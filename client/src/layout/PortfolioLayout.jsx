import React from 'react';
import {Link} from "react-router-dom";
import Layout from "./Layout.jsx";

const PortfolioLayout = ({children}) => {
	return (
		<Layout>
			<div className="flex items-center">

				<div className="bg-gray-100 md:min-h-screen fixed top-18 md:top-18 left-20 md:overflow-y-auto z-10">
					<aside className="w-full md:p-6 sm:w-full text-gray-900 md:px-10">
						<nav className="md:space-y-8 text-sm">
							<div>
								<div className="flex flex-row md:flex-col justify-center items-center md:space-y-15 text-xl text-center">
									<Link to="/portfolio/education">Education</Link>
									<Link to="/portfolio/courses" className="px-10">Courses</Link>
									<Link to="/portfolio/projects">Projects</Link>
								</div>
							</div>
						</nav>
					</aside>
				</div>
				<div className="px-25 pb-8 container mx-auto ml-50">
					<div className="pt-16">
						{children}
					</div>
				</div>

			</div>
		</Layout>
	);
};

export default PortfolioLayout;