import React from 'react';
import PortfolioLayout from "../../layout/PortfolioLayout.jsx";
import CoursesDetails from "../../components/CoursesDetails.jsx";
import PageTitle from "../../components/PageTitle.jsx";

const CourseDetailsPage = () => {

	return (
		<PortfolioLayout>
			<PageTitle title={"Walid | About | Courses"}/>
			<CoursesDetails></CoursesDetails>
		</PortfolioLayout>
	);
};

export default CourseDetailsPage;