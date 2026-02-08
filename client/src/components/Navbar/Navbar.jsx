import React, {useEffect, useRef, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import Login from "../Login.jsx";
import './Navbar.css'
import UserStore from "../../store/userStore.js";
import ThemeStore from "../../store/themeStore.js";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaTwitter, FaFacebookSquare, FaYoutube, FaSearch  } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import BlogStore from "../../store/blogStore.js";


const Navbar = () => {
	const navigate = useNavigate();
	const navRef = useRef()
	let {isLogin, UserLogoutRequest, UserProfile, ProfileDetailsByID} = UserStore()
	const [scrolled, setScrolled] = useState(false);
	const {SearchedBlogs, SearchBlogRequest} = BlogStore()
	const {LoginFormData, LoginFormOnChange} = UserStore()
	const {isDarkMode, toggleTheme} = ThemeStore()



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

	const handleSearch = async (e) => {
		e.preventDefault();
		const keyword = LoginFormData.Keyword;
		if (!keyword) return;
		await SearchBlogRequest(keyword);
		navigate(`/search-result?keyword=${encodeURIComponent(keyword)}`);
	};

	return (
		<div
			ref={navRef}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${scrolled ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-slate-200 dark:border-slate-700' : 'bg-transparent'}`}
		>
			{/* Top bar – contact & social */}
			<div
				className={`overflow-hidden transition-all duration-300 ease-out ${scrolled ? 'max-h-0 opacity-0' : 'max-h-14 opacity-100'}`}
			>
				<div className="bg-slate-800 text-slate-100">
					<div className="container mx-auto px-4">
						<div className="flex flex-row items-center justify-between py-2.5 px-4 text-sm font-medium">
							<div className="flex items-center gap-6">
								<a
									href="tel:+8801700950650"
									className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
								>
									<BsFillTelephoneForwardFill className="shrink-0" />
									<span className="hidden sm:inline">+8801700950650</span>
								</a>
								<a
									href="mailto:sm.walid69@yahoo.com"
									className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
								>
									<MdEmail className="shrink-0" />
									<span className="hidden sm:inline">sm.walid69@yahoo.com</span>
								</a>
							</div>
							<div className="flex items-center gap-4">
								<a href="https://github.com/yourusername" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-white transition-colors">
									<FaGithub className="text-lg" />
								</a>
								<a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-white transition-colors">
									<FaLinkedinIn className="text-lg" />
								</a>
								<a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" aria-label="Twitter" className="text-slate-400 hover:text-white transition-colors">
									<FaTwitter className="text-lg" />
								</a>
								<a href="https://facebook.com/yourusername" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-slate-400 hover:text-white transition-colors">
									<FaFacebookSquare className="text-lg" />
								</a>
								<a href="https://youtube.com/yourusername" target="_blank" rel="noreferrer" aria-label="YouTube" className="text-slate-400 hover:text-white transition-colors">
									<FaYoutube className="text-lg" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className=" dark:bg-slate-900/80  lg:bg-transparent">
				<div className="navbar container mx-auto transition-all duration-300">
					<div className="navbar-start">
						<div className="dropdown">
							<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-slate-700 dark:text-slate-300">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
								</svg>
							</div>
							<ul tabIndex={0} className="menu menu-sm dropdown-content bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 z-[100] mt-3 w-52 p-2 shadow-lg">
								<li><NavLink to="/" className="dark:text-slate-300">Home</NavLink></li>
								<li><NavLink to="/blogs" className="dark:text-slate-300">Blogs</NavLink></li>
								<li><NavLink to="/portfolio/projects" className="dark:text-slate-300">Know me</NavLink></li>
								<li><NavLink to="/contact" className="dark:text-slate-300">Contact</NavLink></li>
							</ul>
						</div>
						<Link to="/" className="flex items-center">
							<img
								className={`ml-3 transition-all w-13 lg:w-full duration-300 ${scrolled ? 'h-9' : 'h-11'}`}
								src={logo}
								alt="Logo"
							/>
						</Link>
					</div>
					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal px-1 gap-1">
							<li><NavLink to="/" className="dark:text-slate-300">Home</NavLink></li>
							<li><NavLink to="/blogs" className="dark:text-slate-300">Blogs</NavLink></li>
							<li><NavLink to="/portfolio/projects" className="dark:text-slate-300">Know me</NavLink></li>
							<li><NavLink to="/contact" className="dark:text-slate-300">Contact</NavLink></li>
						</ul>
					</div>
					<div className="navbar-end gap-3">
						<button
							onClick={toggleTheme}
							className="btn btn-ghost btn-sm btn-circle text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
							aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
							title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
						>
							{isDarkMode ? (
								<MdLightMode className="text-xl" />
							) : (
								<MdDarkMode className="text-xl" />
							)}
						</button>
						<form onSubmit={handleSearch} className="flex items-center">
							<div className="relative">
								<FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 dark:text-slate-500" size={14} />
								<input
									onChange={(e) => LoginFormOnChange("Keyword", e.target.value)}
									type="text"
									placeholder="Search blogs..."
									className="input input-sm w-24 lg:w-56 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-300 placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-lg pr-9 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
								/>
							</div>
						</form>
						{isLogin() ? (
							<div className="flex gap-4 items-center">
								<div className="text-end hidden sm:block">
									<span className="text-slate-600 dark:text-slate-400 text-sm">
										Hi, <span className="font-semibold text-slate-900 dark:text-slate-100">{UserProfile?.lastName}</span>
									</span>
									<div className="mt-0.5">
										{sessionStorage.getItem('role') === 'admin' ? (
											<Link to="/dashboard" className="btn btn-ghost btn-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30">Admin Dashboard</Link>
										) : (
											<Link to="/dashboard" className="btn btn-ghost btn-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30">Dashboard</Link>
										)}
									</div>
								</div>
								<div className="dropdown dropdown-end">
									<div tabIndex={0} role="button" className="cursor-pointer">
										<div className="avatar">
											<div className="w-10 rounded-full ring-2 ring-slate-200 dark:ring-slate-700 ring-offset-2 ring-offset-white dark:ring-offset-slate-900">
												{UserProfile?.length === 0 ? <>{UserLogoutRequest}</> : UserProfile?.img ? <img src={UserProfile.img} alt="Profile" /> : null}
											</div>
										</div>
									</div>
									<ul tabIndex={0} className="menu dropdown-content bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 z-[100] mt-3 w-48 p-2 shadow-lg">
										<li>
											<button onClick={handleLogout} className="btn btn-ghost btn-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30">Logout</button>
										</li>
									</ul>
								</div>
							</div>
						) : (
							<Login />
						)}
					</div>
				</div>
			</div>
		</div>
	)
		;
};

export default Navbar;
