import React from 'react';
import AdminDashboardLayout from "./AdminDashboardLayout.jsx";
import { NavLink } from "react-router-dom";
import blogStore from "../store/blogStore.js";

const BlogListLayout = ({ children }) => {
    const {ApprovedBlogList, PendingBlogList, PendingBlogListByUser, ApproveBlogListByUser} = blogStore();

    return (
        <AdminDashboardLayout>
            <div>
                <div className="flex gap-3 mx-auto container">
                    <NavLink to="/dashboard/approveblog-list" className={({ isActive }) => `p-2 rounded flex items-center gap-2 ${isActive ? 'text-white font-bold bg-blue-400' : 'text-gray-600'
                            }`
                        }
                    >
                        Approved
                        <span className="bg-white text-blue-500 px-2 py-0.5 rounded text-sm font-semibold">
                            {
                                ApprovedBlogList?.length || 0
                            }
                        </span>
                    </NavLink>

                    <NavLink to="/dashboard/pendingblog-list" className={({ isActive }) =>
                            `p-2 rounded flex items-center gap-2 ${
                                isActive
                                    ? 'text-white font-bold bg-red-400'
                                    : 'text-gray-600'
                            }`
                        }
                    >
                        Pending
                        <span className="bg-white text-red-500 px-2 py-0.5 rounded text-sm font-semibold">
                            {
                                PendingBlogList?.length || 0
                            }
                        </span>
                    </NavLink>
                </div>

                <div>
                    {children}
                </div>
            </div>
        </AdminDashboardLayout>
    );
};

export default BlogListLayout;
