import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import BlogStore from "../../store/blogStore.js";
import Layout from "../../layout/Layout.jsx";
import UserStore from "../../store/userStore.js";
import BlogSkeleton from "../../skeleton/BlogSkeleton.jsx";

const SearchedBlogs = () => {
    const { SearchedBlogs, SearchBlogRequest, loading } = BlogStore();
    const location = useLocation();
    let {isLogin} = UserStore()
    const params = new URLSearchParams(location.search);
    const keyword = params.get("keyword") || "";

    useEffect(() => {
        if (keyword) {
            SearchBlogRequest(keyword);
        }
    }, [keyword, SearchBlogRequest]);

    return (
        <Layout>
            <div className="pt-30 container mx-auto px-10 pb-10">
                <div className="container mx-auto">
                    {isLogin() ? (
                        <div className="flex gap-4 container mb-5">
                            <Link to="/dashboard/blog-list" className="btn btn-dash">Your Blogs</Link>
                            <Link to="/dashboard/writeBlog" className="btn btn-outline btn-primary">Write a Blog</Link>
                        </div>
                    ) : (<></>)}
                </div>
                <h1 className="text-2xl font-bold mb-6">
                    Search Results for "{keyword}"
                </h1>

                {loading ? (
                    <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 pb-10 px-10 gap-6 container mx-auto">
                        <BlogSkeleton/>
                        <BlogSkeleton/>
                        <BlogSkeleton/>
                    </div>
                ) : SearchedBlogs?.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {SearchedBlogs.map((blog) => (
                            <div key={blog._id} className="card lg:card-side bg-base-100 shadow-sm">
                                {blog?.img && (
                                    <figure className="lg:w-96 lg:h-84">
                                        <img
                                            src={blog.img}
                                            alt={blog.title}
                                            className="object-cover w-full h-full"
                                        />
                                    </figure>
                                )}

                                <div className="card-body">
                                    <h2 className="card-title">
                                        {blog?.title?.slice(0, 50)}
                                    </h2>

                                    <p className="mt-2 text-sm text-gray-700 leading-snug">
                                        {blog?.des?.slice(0, 120)}...
                                    </p>

                                    <div className="card-actions justify-end mt-3">
                                        <Link
                                            to={`/blogs/${blog._id}`}
                                            className="btn btn-outline btn-info btn-sm"
                                        >
                                            See Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500">No results found</p>
                )}

            </div>
        </Layout>
    );
};

export default SearchedBlogs;
