import React from 'react';
import EducationDetails from "../../components/EducationDetails.jsx";
import PortfolioLayout from "../../layout/PortfolioLayout.jsx";
import PageTitle from "../../components/PageTitle.jsx";

const EducationPage = () => {
	return (
		<PortfolioLayout>
			<PageTitle title={"Walid | About | Education"}/>
			<EducationDetails></EducationDetails>
		</PortfolioLayout>
	);
};

export default EducationPage;