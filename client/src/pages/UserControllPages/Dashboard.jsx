import React, {useEffect} from 'react';
import AdminDashboardLayout from "../../layout/AdminDashboardLayout.jsx";
import UserStore from "../../store/userStore.js";
import BlogStore from "../../store/blogStore.js";
import Cookies from "js-cookie";
import {Link} from "react-router-dom";
import TestimonialStore from "../../store/TestimonialStore.js";
import Login from "../../components/Login.jsx";
import Layout from "../../layout/Layout.jsx";
import contactMessageStore from "../../store/contactMessageStore.js";

const Dashboard = () => {
	let {BlogListRequest, BlogList,BlogListRequestByUser, BlogListByUser} = BlogStore()
	let userRole = sessionStorage.getItem("role");
	let {isLogin, UserList ,UserListRequest} = UserStore()
	let {TestimonialList ,TestimonialListRequest, TestimonialListByUser, TestimonialListByUserRequest} = TestimonialStore()
    const {ContactMessageList, ContactMessageListRequest, ContactMessageListByUser, ContactMessageListRequestByUser} = contactMessageStore()

	useEffect(() => {
		( () => {
			if(isLogin() && userRole === "admin"){
				BlogListRequest();
				UserListRequest();
				TestimonialListRequest()
                ContactMessageListRequest()
			}else if(isLogin() && userRole === "user") {
				BlogListRequestByUser()
                ContactMessageListRequestByUser()
                TestimonialListByUserRequest()
			}else {
				Cookies.remove('token')
				sessionStorage.clear()
			}
		})();

	}, [BlogListRequest, BlogListByUser, TestimonialListRequest, BlogListRequestByUser, isLogin]);

	console.log(BlogListByUser)

	return (
		<>
			{
				isLogin() ? (<AdminDashboardLayout>
					<div className="p-10">
						<h1 className="mb-6 text-3xl">Dashboard</h1>
						{
							userRole ==="admin" ? (
								<>
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
												<p>{ContactMessageList.length}</p>
											</div>
										</div>
									</div>
									<div className="mt-10 grid grid-cols-2 items-center gap-8">
										<Link to="/dashboard/blog-list" className="shadow-2xl rounded-lg p-8">
											<h2 className="pb-5 text-3xl">Recent Blogs</h2>
											<div
												className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
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
															<td>{blog.des.slice(0, 20) || "Unknown"}</td>
															<td>{new Date(blog.createdAt).toLocaleDateString()}</td>
														</tr>
													))}

													</tbody>
												</table>
											</div>
										</Link>
										<Link to="" className="shadow-2xl rounded-lg p-8">
											<h2 className="pb-5 text-3xl">Recent Testimonials</h2>
											<div
												className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
												<table className="table">
													{/* head */}
													<thead>
													<tr>
														<th>Author</th>
														<th>Date</th>
													</tr>
													</thead>
													<tbody>
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
										<div className="shadow-2xl rounded-lg p-8">
											<h2 className="pb-5 text-3xl">Recent Message</h2>
											<div
												className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
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
								</>
							) : (
								<>
									<div className="flex flex-col lg:flex-row justify-between items-center gap-5">

										<div className="p-5 lg:w-1/4 shadow-lg border-lg rounded-lg">
											<div
												className="bg-green-500 text-white p-5 text-center rounded-lg font-semibold text-3xl space-y-4">
												<h1>Blogs</h1>
												<p>{BlogListByUser.length}</p>
											</div>
										</div>
										<div className="p-5 lg:w-1/4 shadow-lg border-lg rounded-lg">
											<div
												className="bg-cyan-500 text-white p-5 text-center rounded-lg font-semibold text-3xl space-y-4">
												<h1>Testimonials</h1>
												<p>{TestimonialListByUser.length}</p>
											</div>
										</div>
										<div className="p-5 lg:w-1/4 shadow-lg border-lg rounded-lg">
											<div
												className="bg-cyan-500 text-white p-5 text-center rounded-lg font-semibold text-3xl space-y-4">
												<h1>Message</h1>
												<p>{ContactMessageListByUser.length}</p>
											</div>
										</div>
									</div>
									<div className="mt-10 grid grid-cols-2 items-center gap-8">
										<Link to="/dashboard/blog-list" className="shadow-2xl rounded-lg p-8">
											<h2 className="pb-5 text-3xl">Recent Blogs</h2>
											<div
												className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
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

													{BlogListByUser?.slice(0, 4).map(userBlog => (
														<tr key={userBlog._id}>
															<td>{userBlog.title}</td>
															<td>{userBlog.des.slice(0, 20) || "Unknown"}</td>
															<td>{new Date(userBlog.createdAt).toLocaleDateString()}</td>
														</tr>
													))}

													</tbody>
												</table>
											</div>
										</Link>
										<Link to="" className="shadow-2xl rounded-lg p-8">
											<h2 className="pb-5 text-3xl">Recent Testimonials</h2>
											<div
												className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
												<table className="table">
													{/* head */}
													<thead>
													<tr>
														<th>Author</th>
														<th>Date</th>
													</tr>
													</thead>
													<tbody>
													{
                                                        TestimonialListByUser?.slice(0, 4).map((testimonial, index) => (
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
										<div className="shadow-2xl rounded-lg p-8">
											<h2 className="pb-5 text-3xl">Recent Message</h2>
											<div
												className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
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
								</>
							)
						}

					</div>
				</AdminDashboardLayout>) : (<Layout>
					<div className="flex flex-col gap-10 items-center justify-center h-screen">
						<h1 className="text-4xl font-bold">Please Login to Access the Page</h1>
						<Login></Login>
					</div>
				</Layout>)
			}
		</>

	);
};

export default Dashboard;