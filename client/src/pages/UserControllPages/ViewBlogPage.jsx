import React, {useEffect} from 'react';
import AdminDashboardLayout from "../../layout/AdminDashboardLayout.jsx";
import {useParams} from "react-router-dom";
import UserStore from "../../store/userStore.js";
import BlogStore from "../../store/blogStore.js";
import {AiFillLike, AiOutlineLike} from "react-icons/ai";
import {FaCommentDots} from "react-icons/fa6";
import Layout from "../../layout/Layout.jsx";
import Login from "../../components/Login.jsx";

const ViewBlogPage = () => {
    let { isLogin } = UserStore();
    let userRole = sessionStorage.getItem("role");
    let { BlogID } = useParams();
    let { BlogDetailsRequest, SingleBlog } = BlogStore();

    useEffect(() => {
        const fetchBlog = async () => {
            if (!BlogID) {
                console.log("NO Blog found with the ID");
                return;
            }
            await BlogDetailsRequest(BlogID);
        };

        fetchBlog();

        console.log(SingleBlog);
    }, [BlogID]);

    return (
        isLogin() ? (
            <AdminDashboardLayout>
                <h1>View the blog</h1>


            </AdminDashboardLayout>
        ) : (


                <Layout>
                    <div className="flex flex-col gap-10 items-center justify-center h-screen">
                        <h1 className="text-4xl font-bold">Please Login to Access the Page</h1>
                        <Login></Login>
                    </div>
                </Layout>
            )

    );
};

export default ViewBlogPage;
