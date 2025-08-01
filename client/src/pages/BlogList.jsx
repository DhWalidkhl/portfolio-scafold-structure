import React, {useEffect} from 'react';
import AdminDashboardLayout from "../layout/AdminDashboardLayout.jsx";
import UserStore from "../store/userStore.js";
import BlogStore from "../store/blogStore.js";
import Cookies from "js-cookie";
import Layout from "../layout/Layout.jsx";
import Login from "../components/Login.jsx";
import {Link} from "react-router-dom";

const BlogList = () => {
	let {isLogin} = UserStore()
	let {BlogListRequest, BlogList,BlogListRequestByUser, BlogListByUser} = BlogStore()
	let userRole = sessionStorage.getItem("role");

	useEffect(() => {
		( () => {
			if(isLogin() && userRole === "admin"){
				BlogListRequest();
			}else if(isLogin() && userRole === "user") {
				BlogListRequestByUser()
			}else {
				Cookies.remove('token')
				sessionStorage.clear()
			}
		})();

	}, [BlogListRequest, BlogListRequestByUser, isLogin]);




	return (
		isLogin() ? (
			<AdminDashboardLayout>
				<div className="flex justify-between items-center my-5">
					{
						userRole === "admin" ? (
							<h1 className="text-xl font-semibold">Total Blogs : {BlogList.length}</h1>) : (
							<h1 className="text-xl font-semibold">Total Blogs : {BlogListByUser.length}</h1>)
					}

					<Link to="/dashboard/writeBlog" className="btn btn-outline btn-primary">
						Write a Blog
					</Link>
				</div>
				{
					userRole === "admin" ? (
						<div className="overflow-x-auto">
							<table className="table">
								{/* head */}
								<thead>
								<tr>
									<th>
										<label>
											SL
										</label>
									</th>
									<th>Name</th>
									<th>Email</th>
									<th>Mobile Number</th>
									<th>Action</th>
									<th></th>
								</tr>
								</thead>
								<tbody>
								{
									BlogList.map((blog, index) => (
										<tr key={blog._id}>
											<th>
												<label>
													{index + 1}
												</label>
											</th>
											<td>
												<div className="flex items-center gap-3">
													<div className="avatar">
														<div className="mask mask-squircle h-12 w-12">
															<img
																src={blog['img']}
																alt="blog Photo"/>
														</div>
													</div>
													<div>
														<div
															className="font-bold">{blog['title']}</div>

													</div>
												</div>
											</td>
											<td>
												<p>{blog['des'].slice(0, 100)}</p>

											</td>
											<td>{blog['githubLink']}</td>
											<th>
												<div className="flex gap-1">
													<button className="btn btn-ghost btn-xs">details</button>
												</div>
											</th>
										</tr>
									))
								}

								</tbody>
							</table>
						</div>
					) : (
						<div className="overflow-x-auto">
							<table className="table">
								{/* head */}
								<thead>
								<tr>
									<th>
										<label>
											SL
										</label>
									</th>
									<th>Name</th>
									<th>Email</th>
									<th>Mobile Number</th>
									<th>Action</th>
									<th></th>
								</tr>
								</thead>
								<tbody>
								{
									BlogListByUser.map((userBlog, index) => (
										<tr key={userBlog._id}>
											<th>
												<label>
													{index + 1}
												</label>
											</th>
											<td>
												<div className="flex items-center gap-3">
													<div className="avatar">
														<div className="mask mask-squircle h-12 w-12">
															<img
																src={userBlog['img']}
																alt="blog Photo"/>
														</div>
													</div>
													<div>
														<div
															className="font-bold">{userBlog['title']}</div>

													</div>
												</div>
											</td>
											<td>
												<p>{userBlog['des']}</p>

											</td>
											<td>{userBlog['githubLink']}</td>
											<th>
												<div className="flex gap-1">
													<button className="btn btn-ghost btn-xs">details</button>
												</div>
											</th>
										</tr>
									))
								}

								</tbody>
							</table>
						</div>
					)
				}
			</AdminDashboardLayout>
		) : (


			<Layout>
				<div className="flex flex-col gap-10 items-center justify-center h-screen">
					<h1 className="text-4xl font-bold">Please Login to Access the Page</h1>
					<Login></Login>
				</div>
			</Layout>
		)
	)
		;
};

export default BlogList;