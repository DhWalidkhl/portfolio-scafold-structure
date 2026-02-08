import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo.svg';

const footerLinkClass = 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors text-sm font-medium';

const Footer = () => {
	return (
		<>
			<div className="bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 mt-16 transition-colors duration-300">
				<div className="container mx-auto px-4 py-12 lg:py-14 max-w-6xl">
					<div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-8">
						<div className="space-y-4 max-w-sm">
							<Link to="/contact" className="inline-block">
								<img src={Logo} alt="Logo" className="h-10 w-auto" />
							</Link>
							<h2 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-slate-100 leading-snug">
								Let's elevate your business together.
							</h2>
							<p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
								Get in touch for projects and collaboration.
							</p>
						</div>
						<nav className="flex flex-col gap-3">
							<span className="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">Quick links</span>
							<NavLink to="/" className={footerLinkClass}>Home</NavLink>
							<NavLink to="/blogs" className={footerLinkClass}>Blogs</NavLink>
							<NavLink to="/portfolio/education" className={footerLinkClass}>Know me</NavLink>
							<NavLink to="/terms" className={footerLinkClass}>Terms & Conditions</NavLink>
							<NavLink to="/contact" className={footerLinkClass}>Contact</NavLink>
						</nav>
						<nav className="flex flex-col gap-3">
							<span className="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">Social</span>
							<div className="flex gap-4">
								<a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
								</a>
								<a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
								</a>
								<a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
								</a>
							</div>
						</nav>
					</div>
				</div>
			</div>
			<footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 dark:text-slate-400 py-4 transition-colors duration-300">
				<div className="container mx-auto px-4 text-center">
					<p className="text-xs sm:text-sm">© {new Date().getFullYear()} Delowar Hossain Walid. All rights reserved.</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;