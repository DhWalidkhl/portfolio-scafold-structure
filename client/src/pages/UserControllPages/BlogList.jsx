import React, {useEffect, useState} from 'react';
import AdminDashboardLayout from "../../layout/AdminDashboardLayout.jsx";
import UserStore from "../../store/userStore.js";
import BlogStore from "../../store/blogStore.js";
import Cookies from "js-cookie";
import Layout from "../../layout/Layout.jsx";
import Login from "../../components/Login.jsx";
import {Link} from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import swal from 'sweetalert';
import axios from "axios";

const BlogList = () => {
	let {isLogin} = UserStore()
	let {BlogListRequest, BlogList,BlogListRequestByUser, BlogListByUser} = BlogStore()
	let userRole = sessionStorage.getItem("role");
	const [loading, setLoading] = useState(false)

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

	}, [BlogListRequest, BlogListRequestByUser, isLogin, loading]);


	const handleDelete = async (id) => {
		swal({
			title: "Are you sure?",
			text: "Once deleted, you will not be able to recover this imaginary file!",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		}).then(async (willDelete) => {
			if (willDelete) {
				try {
					if (userRole === 'admin'){
						const response = await axios.delete(`/api/v1/DeleteBlog/${id}`);
						if (response.data.status === 'success') {
							swal("Your blog has been deleted!", { icon: "success" });
							setLoading(prev => !prev);
						} else {
							swal("Failed to delete the blog!", { icon: "error" });
                            console.log(response);
						}
					} else {
						const response = await axios.delete(`/api/v1/DeleteBlogByUser/${id}`);
						if (response.data.status === 'success') {
							swal("Your blog has been deleted!", { icon: "success" });
							setLoading(prev => !prev);
						} else {
							swal("Failed to delete the blog!", { icon: "error" });
						}
					}

				} catch (error) {
					console.error(error);
					swal("Something went wrong!", { icon: "error" });
				}
			} else {
				swal("Your blog is safe!");
			}
		});
	};




	return (
		isLogin() ? (
			<AdminDashboardLayout>
				<div className="flex justify-between items-center my-5">
					{
						userRole === "admin" ? (
							<h1 className="text-xl font-semibold">Total Blogs : {BlogList.length}</h1>) : (
							<h1 className="text-xl font-semibold">Total Blogs : {BlogListByUser.length}</h1>)
					}


                    <div className="join">
                        <input
                            className="join-item btn btn-approved"
                            type="radio"
                            name="options"
                            aria-label="Approved"
                        />
                        <input
                            className="join-item btn btn-pending"
                            type="radio"
                            name="options"
                            aria-label="Pending"
                        />
                    </div>


                    <style>
                        {`
                        .btn-approved:checked {
                          background-color: green !important;
                          border-color: green !important;
                          color: white !important; 
                          --tw-shadow-color: green !important;
                        }
                    
                       
                        .btn-pending:checked {
                          background-color: red !important;
                          border-color: red !important; 
                          color: white !important;
                          --tw-shadow-color: red !important;
                        }
                      `}
                    </style>




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
									<th>Photo</th>
									<th>Title</th>
									<th>Description</th>
									<th>Action</th>
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


													</div>
												</div>
											</td>
											<td>
												<p className="font-bold">{blog['title'].slice(0, 100)}</p>

											</td>
											<td>
												<div
													className="mt-2 text-sm text-gray-700 leading-snug"
													dangerouslySetInnerHTML={{__html: blog.des.slice(0, 200)}}
												/>
											</td>
											<th>
												<div className="flex gap-1">
													<button className="btn btn-ghost btn-xs text-lg"><IoEyeOutline/>
													</button>
													<button onClick={()=>handleDelete(blog._id)} className="btn btn-soft btn-error btn-xs text-md"><RiDeleteBin6Line />
													</button>
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
									<th>Photo</th>
									<th>Title</th>
									<th>Description</th>
									<th>Action</th>
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


													</div>
												</div>
											</td>
											<td>
												<p className="font-bold">{userBlog['title']}</p>

											</td>
											<td>
												<p>{userBlog['des'].slice(0, 100)}</p>

											</td>

											<th>
												<div className="flex gap-1">
													<button className="btn btn-ghost btn-xs text-lg"><IoEyeOutline/>
													</button>
													<button onClick={() => handleDelete(userBlog._id)}
													        className="btn btn-soft btn-error btn-xs text-md">
														<RiDeleteBin6Line/>
													</button>
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