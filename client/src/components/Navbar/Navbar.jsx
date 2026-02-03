import React, {useEffect, useRef, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import Login from "../Login.jsx";
import './Navbar.css'
import UserStore from "../../store/userStore.js";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaTwitter, FaFacebookSquare, FaYoutube } from "react-icons/fa";


const Navbar = () => {
	const navigate = useNavigate();
	const navRef = useRef()
	let {isLogin, UserLogoutRequest, UserProfile, ProfileDetailsByID} = UserStore()
	const [scrolled, setScrolled] = useState(false);



	useEffect(() => {
		(async () => {
			await ProfileDetailsByID();

		})()
	}, [ProfileDetailsByID]);


	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);



	const handleLogout = async () => {
		await UserLogoutRequest()
		sessionStorage.clear()
		localStorage.clear()
		navigate('/')
		window.location.reload()
	}

	return (
		<div ref={navRef}
			 className={`fixed top-0 mb-10 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${scrolled ? 'bg-base-100 backdrop-blur-lg shadow-lg border-base-300 translate-y-0' : 'bg-transparent -translate-y-1'}`}>
			<div
				className={`px-6 flex justify-between overflow-hidden bg-cyan-800  transition-all duration-300 ease-in-out ${scrolled ? 'opacity-0 -translate-y-4 scale-95 max-h-0' : 'opacity-100 translate-y-0 scale-100 max-h-40'}`}>
                <div className="w-full">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-row sm:flex-row items-center justify-between lg:gap-4 py-2 px-5 text-sm lg:font-medium text-white">
                            <div className="flex items-center gap-4 lg:gap-6">
                                <a
                                    href="tel:+8801700950650"
                                    className="flex items-center gap-2 opacity-90 hover:opacity-100 hover:text-black transition-all"
                                >
                                    <span className="text-base"><BsFillTelephoneForwardFill /></span>
                                    <span className="hidden sm:inline">+8801700950650</span>
                                </a>

                                <a
                                    href="mailto:sm.walid69@yahoo.com"
                                    className="flex items-center lg:gap-2 opacity-90 hover:opacity-100 hover:text-black transition-all"
                                >
                                    <span className="text-base"><MdEmail /></span>
                                    <span className="hidden sm:inline">sm.walid69@yahoo.com</span>
                                </a>
                            </div>

                            <div className="flex items-center gap-4">
                                <a
                                    href="https://github.com/yourusername"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="GitHub"
                                    className=" hover:text-black transition-colors duration-200"
                                >
                                    <FaGithub className="text-lg hover:scale-110 transition-transform" />
                                </a>

                                <a
                                    href="https://linkedin.com/in/yourusername"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="LinkedIn"
                                    className="hover:text-black transition-colors duration-200"
                                >
                                    <FaLinkedinIn className="text-lg hover:scale-110 transition-transform" />
                                </a>

                                <a
                                    href="https://twitter.com/yourusername"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Twitter"
                                    className="hover:text-black transition-colors duration-200"
                                >
                                    <FaTwitter className="text-lg hover:scale-110 transition-transform" />
                                </a>
                                <a
                                    href="https://twitter.com/yourusername"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Twitter"
                                    className="hover:text-black transition-colors duration-200"
                                >
                                    <FaFacebookSquare className="text-lg hover:scale-110 transition-transform" />
                                </a>
                                <a
                                    href="https://twitter.com/yourusername"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Twitter"
                                    className="hover:text-black transition-colors duration-200"
                                >
                                    <FaYoutube className="text-lg hover:scale-110 transition-transform" />
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

			<div>
				<div className={`navbar container mx-auto transition-all duration-300`}>
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
								className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 shadow">
								<li><NavLink className="text-sky-500" to="/">Home</NavLink></li>
								<li><NavLink className="text-sky-500" to="/blogs">Blogs</NavLink></li>
								<li><NavLink to="/portfolio/projects">Know me</NavLink></li>
								<li><NavLink to="/contact">Contact</NavLink></li>
							</ul>
						</div>
						<Link to="/" className="text-xl w-16 lg:w-full text-blue-50 bg-base-500">
							<img className={`ml-3 transition-all duration-300 ${scrolled ? 'w-24' : 'w-32'}`}
								 src={logo}
								 alt="Logo"
						/></Link>
					</div>
					<div className="navbar-center hidden lg:flex">

						<ul className="menu menu-horizontal px-1 text-lg">
							<li><NavLink to="/">Home</NavLink></li>
							<li><NavLink to="/blogs">Blogs</NavLink></li>
							<li><NavLink to="/portfolio/projects">Know me</NavLink></li>
							<li><NavLink to="/contact">Contact</NavLink></li>
						</ul>
					</div>
					<div className="navbar-end">
						{
							isLogin() ? (
								<div className="flex gap-6 items-center">
									<div className="text-end text-xs lg:text-lg">
										<h1 className="lg:text-xl text-xs">
											<small className="mr-5">{sessionStorage.getItem('role') === "admin" ?
												<Link to="/dashboard" className="btn btn-soft btn-info">Admin
													Dashboard</Link> : <Link to="/dashboard"
																			 className="btn btn-soft btn-info">Dashboard</Link>}</small>
											Hi, <span
											className="text-sky-600 font-semibold">{UserProfile?.lastName}</span>
										</h1>

									</div>
									<div style={{cursor: 'pointer'}} className="dropdown dropdown-end">
										<div tabIndex={0} role="button">
											<div className="avatar">
												<div
													className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
													{
														UserProfile.length === 0 ? <>{UserLogoutRequest}</> : !UserProfile?.img
															? null : <img src={UserProfile['img']} alt="user image"/>
													}
												</div>
											</div>
										</div>
										<ul
											tabIndex={0}
											className="menu dropdown-content text-md bg-base-200 rounded-box gap-1 z-1 mt-4 w-52 p-2 shadow-sm">
											<li>
												<button onClick={handleLogout}
														className="btn btn-outline btn-error">Logout
												</button>
											</li>
										</ul>
									</div>
								</div>
							) : (
								<div className="flex gap-3 items-center">
									<Login/>
								</div>

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
