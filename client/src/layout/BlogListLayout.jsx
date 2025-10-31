import React from 'react';
import AdminDashboardLayout from "./AdminDashboardLayout.jsx";
import {NavLink} from "react-router-dom";

const BlogListLayout = ({children}) => {
    return (
        <AdminDashboardLayout>
            <div>
                <div className="flex gap-3 mx-auto container">
                    <NavLink to="/dashboard/approveblog-list" className={({ isActive }) => `p-2 rounded ${isActive ? 'text-white font-bold bg-blue-400' : 'text-gray-600'}`}>Approved</NavLink>
                    <NavLink to="/dashboard/pendingblog-list" className={({ isActive }) => `p-2 rounded ${isActive ? 'text-white font-bold bg-red-400' : 'text-gray-600'}`}>Pending</NavLink>
                </div>
                <div>
                    {children}
                </div>
            </div>

        </AdminDashboardLayout>
    );
};

export default BlogListLayout;