import React from 'react';
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Layout = ({ children }) => {


	return (
		<div className="min-h-screen flex flex-col">
			<Navbar/>
			<main className="flex-grow">
				{children}
			</main>
			<Footer/>
		</div>
	);
};

export default Layout;
