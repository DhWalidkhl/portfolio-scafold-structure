import React from 'react';
import PortfolioLayout from "../../layout/PortfolioLayout.jsx";
import Projects from "../../components/Projects.jsx";
import PageTitle from "../../components/PageTitle.jsx";


const ProjectsPage = () => {
	return (
		<PortfolioLayout>
			<PageTitle title={"Walid | About | Projects"}/>
			<Projects></Projects>
		</PortfolioLayout>
	);
};

export default ProjectsPage;