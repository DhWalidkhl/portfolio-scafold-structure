import React, {useEffect} from 'react';
import AdminDashboardLayout from "../layout/AdminDashboardLayout.jsx";
import UserStore from "../store/userStore.js";
import Cookies from "js-cookie";
import axios from "axios";

const UsersList = () => {
	const {isLogin, UserListRequest, UserList} = UserStore();

	const handleUserDelete = async (id) => {
		try {
			await axios.delete(`/api/v1/DeleteUser/${id}`);
			UserListRequest();
		} catch (error) {
			console.error('Failed to delete user:', error);
		}
	};

	useEffect(() => {
		( () => {
			if(isLogin()){
			UserListRequest();
			console.log(UserList);
			}else {
				Cookies.remove('token')
				sessionStorage.clear()
			}
		})();

	}, [UserListRequest, isLogin]);

	return (
		<AdminDashboardLayout>
			{sessionStorage.getItem("role") === "admin" && (
				<div>
					{isLogin() ?
						(
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
									</tr>
									</thead>
									<tbody>
									{
										UserList.map((user, index)=>(
											<tr key={user._id}>
												<th>
													<label>
														{index+1}
													</label>
												</th>
												<td>
													<div className="flex items-center gap-3">
														<div className="avatar">
															<div className="mask mask-squircle h-12 w-12">
																<img
																	src={user['img']}
																	alt="User Photo"/>
															</div>
														</div>
														<div>
															<div className="font-bold">{user['firstName']} {user['lastName']}</div>
															{
																user['role'] === "admin" ? (
																	<div className="text-sm opacity-50 text-[red] font-semibold uppercase">{user['role']}</div>
																) : (
																	<div
																		className="text-sm opacity-50">{user['role']}</div>
																)
															}

														</div>
													</div>
												</td>
												<td>
													<p>{user['email']}</p>
													{
														user?.verified === "yes" ? (
															<p className="text-[green] font-bold">Verified</p>
														) : (
															<p className="text-[red]">Not Verified</p>
														)
													}

												</td>
												<td>{user['mobile']}</td>
												<th>
													<div className="flex gap-1">
														<button className="btn btn-ghost btn-xs">details</button>
														{
															user['role'] === "admin" ? <></> :
																<button onClick={() => handleUserDelete(user['_id'])}
																        className="btn btn-error btn-xs text-white">delete</button>
														}

													</div>
												</th>
											</tr>
										))
									}

									</tbody>
								</table>

							</div>
						)
						: (<h1>Please Login</h1>)}
				</div>
			)}
		</AdminDashboardLayout>
	);
};

export default UsersList;




