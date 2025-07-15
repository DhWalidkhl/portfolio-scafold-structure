import React, {useEffect} from 'react';
import AdminDashboardLayout from "../layout/AdminDashboardLayout.jsx";
import UserStore from "../store/userStore.js";
import blogStore from "../store/blogStore.js";
import Cookies from "js-cookie";
import Layout from "../layout/Layout.jsx";
import Login from "../components/Login.jsx";

const BlogList = () => {
	let {isLogin} = UserStore()
	let {BlogListRequest, BlogList,BlogListRequestByUser, BlogListByUer} = blogStore()
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
				<h1 className="text-xl font-semibold">Total Blogs : {BlogList.length}</h1>
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
												<p>{blog['des']}</p>

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
									BlogListByUer.map((userBlog, index) => (
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