import React, { useEffect, useState } from "react";
import UserStore from "../../store/userStore.js";
import BlogStore from "../../store/blogStore.js";
import Cookies from "js-cookie";
import Layout from "../../layout/Layout.jsx";
import Login from "../../components/Login.jsx";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import swal from "sweetalert";
import axios from "axios";
import BlogListLayout from "../../layout/BlogListLayout.jsx";

const PendingBlogListPage = () => {
    const { isLogin } = UserStore();
    const {
        PendingBlogList,
        PendingBlogListRequest,
        PendingBlogListByUser,
        PendingBlogListRequestByUser
    } = BlogStore();

    const userRole = sessionStorage.getItem("role");
    const [loading, setLoading] = useState(false);

    // -----------------------
    // Fetch Data
    // -----------------------
    useEffect(() => {
        if (!isLogin()) return;

        if (userRole === "admin") {
            PendingBlogListRequest();
        } else if (userRole === "user") {
            PendingBlogListRequestByUser();
        } else {
            Cookies.remove("token");
            sessionStorage.clear();
        }

    }, [isLogin, loading]);

    // -----------------------
    // Delete Handler
    // -----------------------
    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "You cannot recover this blog after deletion!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(async (willDelete) => {
            if (!willDelete) return swal("Your blog is safe!");

            try {
                const url =
                    userRole === "admin"
                        ? `/api/v1/DeleteBlog/${id}`
                        : `/api/v1/DeleteBlogByUser/${id}`;

                const response = await axios.delete(url);

                if (response.data.status === "success") {
                    swal("Blog Deleted!", { icon: "success" });
                    setLoading(prev => !prev);
                } else {
                    swal("Failed to delete!", { icon: "error" });
                }
            } catch (error) {
                console.error(error);
                swal("Something went wrong!", { icon: "error" });
            }
        });
    };

    // -----------------------
    // Approve Handler (Admin Only)
    // -----------------------
    const handleApprove = async (id) => {
        if (userRole !== "admin") return;

        try {
            await axios.post(`/api/v1/ApproveBlog/${id}`);
            swal("Blog Approved Successfully!", { icon: "success" });
            setLoading(prev => !prev);
        } catch (error) {
            console.error(error);
            swal("Something went wrong!", { icon: "error" });
        }
    };

    // -----------------------
    // If Not Logged In
    // -----------------------
    if (!isLogin()) {
        return (
            <Layout>
                <div className="flex flex-col gap-10 items-center justify-center h-screen">
                    <h1 className="text-4xl font-bold">Please Login to Access the Page</h1>
                    <Login />
                </div>
            </Layout>
        );
    }

    const isAdmin = userRole === "admin";
    const blogs = isAdmin ? PendingBlogList : PendingBlogListByUser;

    return (
        <BlogListLayout>
            <div className="flex justify-between items-center my-5">
                <h1 className="text-xl font-semibold">
                    Total Blogs: {blogs.length}
                </h1>

                <Link to="/dashboard/writeBlog" className="btn btn-outline btn-primary">
                    Write a Blog
                </Link>
            </div>

            {/* Table Wrapper */}
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                    <tr>
                        <th>SL</th>
                        <th>Photo</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    <tbody>
                    {blogs.map((blog, idx) => (
                        <tr key={blog._id}>
                            <td>{idx + 1}</td>

                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <img src={blog.img} alt="blog" />
                                    </div>
                                </div>
                            </td>

                            <td className="font-bold">
                                {blog.title.slice(0, 100)}
                            </td>

                            <td>
                                <p className="text-sm text-gray-700 leading-snug">
                                    {blog.des.replace(/<[^>]+>/g, "").slice(0, 200)}
                                </p>
                            </td>

                            <td>
                                <div className="flex gap-2">

                                    <Link to={`/dashboard/editblog/${blog._id}`} className="btn btn-ghost btn-xs text-lg" ><IoEyeOutline /></Link>

                                    <button onClick={() => handleDelete(blog._id)} className="btn btn-error btn-xs"><RiDeleteBin6Line /></button>

                                    {/* Approve (Admin Only) */}
                                    {isAdmin && (
                                        <button
                                            onClick={() => handleApprove(blog._id)}
                                            className="btn btn-warning btn-xs"
                                        >
                                            Approve
                                        </button>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </BlogListLayout>
    );
};

export default PendingBlogListPage;
