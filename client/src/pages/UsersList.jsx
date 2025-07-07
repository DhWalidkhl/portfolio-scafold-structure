import React, {useEffect} from 'react';
import AdminDashboardLayout from "../layout/AdminDashboardLayout.jsx";
import UserStore from "../store/userStore.js";
import Cookies from "js-cookie";

const UsersList = () => {
	const {isLogin, UserListRequest, UserList} = UserStore();

	useEffect(() => {
		(async () => {
			if(isLogin()){
			let res = await UserListRequest();
			console.log(res)
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
										<th></th>
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
															<div className="text-sm opacity-50">{user['role']}</div>
														</div>
													</div>
												</td>
												<td>
													{user['email']}

												</td>
												<td>{user['mobile']}</td>
												<th>
													<button className="btn btn-ghost btn-xs">details</button>
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




