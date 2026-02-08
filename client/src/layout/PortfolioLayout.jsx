import React from 'react';
import {NavLink} from "react-router-dom";
import Layout from "./Layout.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

const PortfolioLayout = ({children}) => {
	return (
		<Layout>
			<div className="pt-25">
				<div>
					<SectionHeading headingBig="portfolio" headingSmall="Know me"></SectionHeading>
				</div>
				<div className="px-10 pb-10 text-center">
					<ul className="menu lg:gap-20 menu-horizontal text-lg lg:text-xl bg-slate-100 dark:bg-slate-800 rounded-box text-slate-800 dark:text-slate-200">
						<li><NavLink to="/portfolio/projects" className="dark:hover:bg-slate-700 dark:focus:bg-slate-700">Projects</NavLink></li>
						<li><NavLink to="/portfolio/education" className="dark:hover:bg-slate-700 dark:focus:bg-slate-700">Education</NavLink></li>
						<li><NavLink to="/portfolio/courses" className="dark:hover:bg-slate-700 dark:focus:bg-slate-700">Courses</NavLink></li>
					</ul>
				</div>

				<div className="px-16 container mx-auto">
				<div className="pb-16">
						{children}
					</div>
				</div>

			</div>
		</Layout>
	);
};

export default PortfolioLayout;