import React, {useEffect} from 'react';
import {Link, NavLink} from "react-router-dom";
import Login from "../Login.jsx";
import './Navbar.css'
import UserStore from "../../store/userStore.js";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();
	let {isLogin, UserLogoutRequest, UserProfile, ProfileDetailsByID} = UserStore()

	useEffect(() => {
		(async () => {
			await ProfileDetailsByID();

		})()
	}, [ProfileDetailsByID]);



	const handleLogout = async () => {
		await UserLogoutRequest()
		sessionStorage.clear()
		localStorage.clear()
		navigate('/')
		// window.location.reload()
	}

	return (
		<div className="fixed top-0 left-0 right-0 z-50">
			<div className="bg-base-100 shadow-sm">
				<div className="navbar container mx-auto">
					<div className="navbar-start">
						<div className="dropdown">
							<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
								     viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
									      d="M4 6h16M4 12h8m-8 6h16"/>
								</svg>
							</div>
							<ul tabIndex={0}
							    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
								<li><NavLink to="/">Home</NavLink></li>
								<li><NavLink to="/blogs">Blogs</NavLink></li>
								<li><NavLink to="/portfolio">Know me</NavLink></li>
								<li><NavLink to="/contact">Contact</NavLink></li>
							</ul>
						</div>
						<a className="btn btn-ghost text-xl">D H Walid</a>
					</div>
					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal px-1 text-lg">
							<li><NavLink to="/">Home</NavLink></li>
							<li><NavLink to="/blogs">Blogs</NavLink></li>
							<li><NavLink to="/portfolio/education">Know me</NavLink></li>
							<li><NavLink to="/contact">Contact</NavLink></li>
						</ul>
					</div>
					<div className="navbar-end">
						{
							isLogin() ? (
									<div className="flex gap-6 items-center">
										<div className="text-end">
											<h1 className="text-xl">Hi <span
												className="text-blue-600/100 font-semibold">{UserProfile?.firstName}</span>
												<span
													className="text-blue-600/100 font-semibold">{UserProfile?.lastName}</span>
											</h1>
											<small>{sessionStorage.getItem('role') === "admin" ? "Hello Admin" : "Welcome to the application"}</small>
										</div>
										<div className="dropdown dropdown-end">
											<div tabIndex={0} role="button">
												<div className="avatar">
													<div
														className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
														{
															UserProfile === null ? <></> :
																<img src={UserProfile['img']}/>
														}
													</div>
												</div>
											</div>
											<ul
												tabIndex={0}
												className="menu dropdown-content text-md bg-base-200 rounded-box gap-1 z-1 mt-4 w-52 p-2 shadow-sm">

												{
													sessionStorage.getItem('role') === "admin" ?
														(
														<li ><Link to="/dashboard" className="py-3">
														Admin Dashboard
													</Link></li>
													) : (
															<li><Link to="/dashboard" className="py-3">
																Dashboard
															</Link></li>
														)

												}
												<li><a className="py-3">
												Profile
												</a></li>
												<li>
													<button onClick={handleLogout}
													        className="btn btn-outline btn-error">Logout
													</button>
												</li>
											</ul>
										</div>


									</div>
							) : (
								<Login/>
							)
				}
			</div>
		</div>
</div>
</div>
)
	;
};

export default Navbar;
