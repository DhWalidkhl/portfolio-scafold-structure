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
						<h1 className="text-4xl font-bold">Please Login to Access the Page</h1>
						<Login></Login>
					</div>
				) : (
					<div className="drawer container px-5 mx-auto pt-16 lg:drawer-open">
						<input id="my-drawer-2" type="checkbox" className="drawer-toggle"/>
						<div className="drawer-content flex flex-col items-center justify-center">
							<label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
								Open drawer
							</label>

							<div className="w-full px-10 h-full">
								{children}
							</div>
						</div>
						<div className="drawer-side bg-base-200 min-h-full w-80 p-4 text-base-content">
							{
								UserProfile === null ? ("") : (<div>
									<div className="max-w-sm mx-auto">
										<div className="card">
											<figure className="px-10 pt-10">
												<img
													src={UserProfile.img}
													alt={UserProfile.firstName}
													className="rounded-xl w-40 h-40 object-cover"
												/>
											</figure>
											<div className="card-body items-center text-center">
												<h2 className="card-title text-lg">
													{UserProfile.firstName} {UserProfile.lastName}
												</h2>
												<p className="text-sm text-gray-500">{UserProfile.email}</p>
												<p className="text-sm">📱 {UserProfile.mobile}</p>
												<p className={`badge ${UserProfile.verified === "yes" ? "badge-success" : "badge-error"}`}>
													{UserProfile.verified === "yes" ? "Verified" : "Not Verified"}
												</p>
												<div className="mt-2 w-full">
													<div className="flex justify-between text-sm text-gray-400">
														<span>Role:</span>
														<span className="capitalize">{UserProfile.role}</span>
													</div>
												</div>
												<div>
													<Link className="btn btn-soft btn-success w-full px-20">Edit</Link>
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
													<li><NavLink to="/dashboard/blog-list">All Blogs</NavLink></li>
													<li><NavLink to="/dashboard/contact-message-list">All Message</NavLink></li>
													<li><NavLink to="/dashboard/testimonial-list">All Testimonials</NavLink></li>
                                                    <li><NavLink to="/dashboard/faq-list">All FAQ</NavLink></li>
												</div>
												:
												<div>
													<li><NavLink to="/dashboard">Dashboard</NavLink></li>
													<li><NavLink to="/dashboard/blog-list">My Blogs</NavLink></li>
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