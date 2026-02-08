import React from 'react';
import Layout from "./Layout.jsx";
import Login from "../components/Login.jsx";
import {Link, NavLink} from "react-router-dom";
import UserStore from "../store/userStore.js";

const AdminDashboardLayout = ({children}) => {
	let {UserProfile} = UserStore()
	return (
		<Layout>
			{
				UserProfile === null ? (
					<div className="flex flex-col gap-10 items-center justify-center h-screen">
						<h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100">Please Login to Access the Page</h1>
						<Login></Login>
					</div>
				) : (
					<div className="drawer container px-5 mx-auto pt-30 lg:drawer-open">
						<input id="my-drawer-2" type="checkbox" className="drawer-toggle"/>
						<div className="drawer-content flex flex-col items-center justify-center">
							<label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
								Open drawer
							</label>

							<div className="w-full px-10 h-full">
								{children}
							</div>
						</div>
						<div className="drawer-side bg-slate-100 dark:bg-slate-800 min-h-full w-80 p-4 text-slate-900 dark:text-slate-100">
							{
								UserProfile === null ? ("") : (<div>
									<div className="max-w-sm mx-auto">
										<div className="card bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600">
											<figure className="px-10 pt-10">
												<img
													src={UserProfile.img}
													alt={UserProfile.firstName}
													className="rounded-xl w-40 h-40 object-cover"
												/>
											</figure>
											<div className="card-body items-center text-center">
												<h2 className="card-title text-lg text-slate-900 dark:text-slate-100">
													{UserProfile.firstName} {UserProfile.lastName}
												</h2>
												<p className="text-sm text-gray-500 dark:text-slate-400">{UserProfile.email}</p>
												<p className="text-sm text-slate-700 dark:text-slate-300">📱 {UserProfile.mobile}</p>
												<p className={`badge ${UserProfile.verified === "yes" ? "badge-success" : "badge-error"}`}>
													{UserProfile.verified === "yes" ? "Verified" : "Not Verified"}
												</p>
												<div className="mt-2 w-full">
													<div className="flex justify-between text-sm text-gray-400 dark:text-slate-500">
														<span>Role:</span>
														<span className="capitalize">{UserProfile.role}</span>
													</div>
												</div>
												<div>
													<Link to="/dashboard/user-details" className="btn btn-soft btn-success w-full px-20">Edit</Link>
												</div>
											</div>
										</div>
									</div>
									<label htmlFor="my-drawer-2" aria-label="close sidebar"
									       className="drawer-overlay"></label>
									<ul className="menu text-lg">
										{
											sessionStorage.getItem("role") === "admin" ?
												<div>
													<li><NavLink to="/dashboard">Dashboard</NavLink></li>
													<li><NavLink to="/dashboard/user-list">All Users</NavLink></li>
													<li><NavLink to="/dashboard/approveblog-list">All Blogs</NavLink></li>
													<li><NavLink to="/dashboard/contact-message-list">All Message</NavLink></li>
													<li><NavLink to="/dashboard/testimonial-list">All Testimonials</NavLink></li>
													<li><NavLink to="/dashboard/faq-list">All FAQ</NavLink></li>
													<li><NavLink to="/dashboard/TnTList">TnC List</NavLink></li>
												</div>
												:
												<div>
													<li><NavLink to="/dashboard">Dashboard</NavLink></li>
													<li><NavLink to="/dashboard/approveblog-list">My Blogs</NavLink></li>
                                                    <li><NavLink to="/dashboard/contact-message-list">My Messages</NavLink></li>
													<li><NavLink to="/dashboard/testimonial-list">My Testimonials</NavLink>
													</li>
												</div>
										}
									</ul>
								</div>)
							}
						</div>
					</div>
				)
			}
		</Layout>
	);
};

export default AdminDashboardLayout;