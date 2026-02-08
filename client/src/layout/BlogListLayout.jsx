import React from 'react';
import AdminDashboardLayout from "./AdminDashboardLayout.jsx";
import { NavLink } from "react-router-dom";
import blogStore from "../store/blogStore.js";

const BlogListLayout = ({ children }) => {
    const userRole = sessionStorage.getItem("role");
    const {ApprovedBlogList, PendingBlogList, PendingBlogListByUser, ApproveBlogListByUser} = blogStore();

    return (
        <AdminDashboardLayout>
            <div>
                <div className="flex gap-3 mx-auto container">
                    <NavLink to="/dashboard/approveblog-list" className={({ isActive }) => `p-2 rounded flex items-center gap-2 ${isActive ? 'text-white font-bold bg-blue-400 dark:bg-blue-500' : 'text-gray-600 dark:text-slate-400'
                            }`
                        }
                    >
                        Approved
                        <span className="bg-white dark:bg-slate-800 text-blue-500 px-2 py-0.5 rounded text-sm font-semibold">
                            {
                                userRole === 'admin' ? (ApprovedBlogList.length) : (ApproveBlogListByUser.length)
                            }
                        </span>
                    </NavLink>

                    <NavLink to="/dashboard/pendingblog-list" className={({ isActive }) =>
                            `p-2 rounded flex items-center gap-2 ${
                                isActive
                                    ? 'text-white font-bold bg-red-400 dark:bg-red-500'
                                    : 'text-gray-600 dark:text-slate-400'
                            }`
                        }
                    >
                        Pending
                        <span className="bg-white dark:bg-slate-800 text-red-500 px-2 py-0.5 rounded text-sm font-semibold">
                            {
                                userRole === 'admin' ? (PendingBlogList.length) : (PendingBlogListByUser.length)
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
