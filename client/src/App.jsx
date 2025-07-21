import "tailwindcss";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import EducationPage from "./pages/EducationPage.jsx";
import PortfolioLayout from "./layout/PortfolioLayout.jsx";
import CourseDetailsPage from "./pages/CourseDetailsPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import {useEffect, useState} from "react";
import PreLoadingSpinner from "./components/PreLoaderSpinner/PreLoadingSpinner.jsx";
import TermsAndConditionPage from "./pages/TermsAndConditionPage.jsx";
import UsersList from "./pages/UsersList.jsx";
import AdminDashboardLayout from "./layout/AdminDashboardLayout.jsx";
import BlogList from "./pages/BlogList.jsx";
import OtpPage from "./pages/OtpPage.jsx";
import ContactMassegePage from "./pages/ContactMassegePage.jsx";

import "./App.css"
import BlogDetailPage from "./pages/BlogDetailPage.jsx";
import ProjectDetailPage from "./pages/ProjectDetailPage.jsx";

function App() {

	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const preLoader = () => {
			setTimeout(() => {
				setIsLoading(false);
			}, 700);
		};
		preLoader();
	}, []);


	return (
		<div>
			{
				isLoading ?
					(<PreLoadingSpinner></PreLoadingSpinner>)  :
					(
						<BrowserRouter>
							<Routes>
								<Route path="*" element={<ErrorPage/>}></Route>
								<Route path="/" element={<HomePage/>}></Route>
								<Route path="/signup" element={<SignUpPage/>}></Route>
								<Route path="/otp" element={<OtpPage/>}></Route>
								<Route path="/blogs" element={<BlogPage/>}></Route>
								<Route path="/blogs/:BlogID" element={<BlogDetailPage/>}></Route>
								<Route path="/contact" element={<ContactPage/>}></Route>
								<Route path="/portfolio" element={<PortfolioLayout/>}></Route>
								<Route path="/portfolio/education" element={<EducationPage/>}></Route>
								<Route path="/portfolio/courses" element={<CourseDetailsPage/>}></Route>
								<Route path="/portfolio/projects" element={<ProjectsPage/>}></Route>
								<Route path="/portfolio/projects/:ProjectID" element={<ProjectDetailPage/>}></Route>
								<Route path="/terms" element={<TermsAndConditionPage/>}></Route>
								<Route path="/dashboard" element={<AdminDashboardLayout/>}></Route>
								<Route path="/dashboard/user-list" element={<UsersList/>}></Route>
								<Route path="/dashboard/blog-list" element={<BlogList/>}></Route>
								<Route path="/dashboard/contact-message-list" element={<ContactMassegePage/>}></Route>
							</Routes>
						</BrowserRouter>
					)
			}
		</div>
	)
}



export default App