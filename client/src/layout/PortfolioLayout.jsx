import React from 'react';
import {NavLink} from "react-router-dom";
import Layout from "./Layout.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

const PortfolioLayout = ({children}) => {
	return (
		<Layout>
			<div className="pt-20">
				<div>
					<SectionHeading headingBig="portfolio" headingSmall="Know me"></SectionHeading>
				</div>
				<div className="px-10 pb-10 text-center">
					<ul className="menu lg:gap-20 menu-horizontal text-lg lg:text-xl bg-base-200 rounded-box">
						<li><NavLink to="/portfolio/education">Education</NavLink></li>
						<li><NavLink to="/portfolio/courses">Courses</NavLink></li>
						<li><NavLink to="/portfolio/projects">Projects</NavLink></li>
					</ul>
				</div>

				<div className="px-25 container mx-auto">
					<div className="pb-16">
						{children}
					</div>
				</div>

			</div>
		</Layout>
	);
};

export default PortfolioLayout;