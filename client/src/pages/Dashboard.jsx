import React, {useEffect} from 'react';
import AdminDashboardLayout from "../layout/AdminDashboardLayout.jsx";
import UserStore from "../store/userStore.js";
import BlogStore from "../store/blogStore.js";
import Cookies from "js-cookie";
import {Link} from "react-router-dom";
import TestimonialStore from "../store/TestimonialStore.js";

const Dashboard = () => {
	let {BlogListRequest, BlogList,BlogListRequestByUser, BlogListByUer} = BlogStore()
	let userRole = sessionStorage.getItem("role");
	let {isLogin, UserList ,UserListRequest} = UserStore()
	let {TestimonialList ,TestimonialListRequest} = TestimonialStore()

	useEffect(() => {
		( () => {
			if(isLogin() && userRole === "admin"){
				BlogListRequest();
				UserListRequest();
				TestimonialListRequest()
			}else if(isLogin() && userRole === "user") {
				BlogListRequestByUser()
				BlogListByUer()
			}else {
				Cookies.remove('token')
				sessionStorage.clear()
			}
		})();

	}, [BlogListRequest, TestimonialListRequest, BlogListRequestByUser, isLogin]);
	return (
		<AdminDashboardLayout>
			<div className="p-10">
				<h1 className="mb-6 text-3xl">Dashboard</h1>
				<div className="flex flex-col lg:flex-row justify-between items-center gap-5">
					<div className="p-5 lg:w-1/4 shadow-lg border-lg rounded-lg">
						<div
							className="bg-cyan-500 text-white p-5 text-center rounded-lg font-semibold text-3xl space-y-4">
							<h1>Users</h1>
							<p>{UserList.length}</p>
						</div>
					</div>
					<div className="p-5 lg:w-1/4 shadow-lg border-lg rounded-lg">
						<div
							className="bg-green-500 text-white p-5 text-center rounded-lg font-semibold text-3xl space-y-4">
							<h1>Blogs</h1>
							<p>{BlogList.length}</p>
						</div>
					</div>
					<div className="p-5 lg:w-1/4 shadow-lg border-lg rounded-lg">
						<div
							className="bg-cyan-500 text-white p-5 text-center rounded-lg font-semibold text-3xl space-y-4">
							<h1>Testimonials</h1>
							<p>{TestimonialList.length}</p>
						</div>
					</div>
					<div className="p-5 lg:w-1/4 shadow-lg border-lg rounded-lg">
						<div
							className="bg-cyan-500 text-white p-5 text-center rounded-lg font-semibold text-3xl space-y-4">
							<h1>Message</h1>
							<p>12</p>
						</div>
					</div>
				</div>
				<div className="mt-10 grid grid-cols-2 items-center gap-8">
					<Link to="/dashboard/blog-list" className="shadow-lg border rounded-lg p-8">
						<h2 className="pb-5 text-3xl">Recent Blogs</h2>
						<div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
							<table className="table">
								{/* head */}
								<thead>
								<tr>
									<th>Title</th>
									<th>Des</th>
									<th>Pubished Date</th>
								</tr>
								</thead>
								<tbody>
								{/* row 1 */}

								{BlogList?.slice(0, 4).map(blog => (
									<tr key={blog._id}>
										<td>{blog.title}</td>
										<td>{blog.des.slice(0,20) || "Unknown"}</td>
										<td>{new Date(blog.createdAt).toLocaleDateString()}</td>
									</tr>
								))}

								</tbody>
							</table>
						</div>
					</Link>
					<Link to="" className="shadow-lg border rounded-lg p-8">
						<h2 className="pb-5 text-3xl">Recent Testimonials</h2>
						<div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
							<table className="table">
								{/* head */}
								<thead>
								<tr>
									<th>Author</th>
									<th>Date</th>
								</tr>
								</thead>
								<tbody>
								{/* row 1 */}
								{
									TestimonialList?.slice(0, 4).map((testimonial, index) => (
										<tr key={testimonial._id || index}>
											<td>{testimonial.user?.lastName}</td>
											<td>{new Date(testimonial.createdAt).toLocaleDateString()}</td>
										</tr>
									))
								}

								</tbody>
							</table>
						</div>
					</Link>
					<div className="shadow-lg border rounded-lg p-8">
						<h2 className="pb-5 text-3xl">Recent Message</h2>
						<div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
							<table className="table">
								{/* head */}
								<thead>
								<tr>
									<th>Author</th>
									<th>Message</th>
									<th>Date</th>
								</tr>
								</thead>
								<tbody>
								{/* row 1 */}
								<tr>
									<td>Cy Ganderton</td>
									<td>Quality Control Specialist</td>
									<td>Blue</td>
								</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</AdminDashboardLayout>
	);
};

export default Dashboard;