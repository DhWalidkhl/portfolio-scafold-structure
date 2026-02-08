import React from 'react';
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Layout = ({ children }) => {


	return (
		<div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
			<Navbar />
			<main className="flex-grow">
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
