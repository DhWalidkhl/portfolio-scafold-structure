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
import React, {useEffect, useState} from "react";
import PreLoadingSpinner from "./components/PreLoaderSpinner/PreLoadingSpinner.jsx";
import TermsAndConditionPage from "./pages/TermsAndConditionPage.jsx";
import UsersList from "./pages/UsersList.jsx";
import AdminDashboardLayout from "./layout/AdminDashboardLayout.jsx";
import BlogList from "./pages/UserControllPages/BlogList.jsx";
import OtpPage from "./pages/OtpPage.jsx";
import ContactMassegePage from "./pages/UserControllPages/ContactMassegePage.jsx";

import "./App.css"
import BlogDetailPage from "./pages/BlogDetailPage.jsx";
import ProjectDetailPage from "./pages/ProjectDetailPage.jsx";
import WriteBlogPage from "./pages/UserControllPages/WriteBlogPage.jsx";
import Dashboard from "./pages/UserControllPages/Dashboard.jsx";
import Login from "./components/Login.jsx";
import Layout from "./layout/Layout.jsx";
import UserStore from "./store/userStore.js";
import FAQPage from "./pages/UserControllPages/FAQPage.jsx";
import FAQDetailsPage from "./pages/UserControllPages/FAQDetailsPage.jsx";
import TestimonialPage from "./pages/UserControllPages/TestimonialPage.jsx";
import ApproveBlogListPage from "./pages/UserControllPages/ApproveBlogListPage.jsx";
import PendingBlogListPage from "./pages/UserControllPages/PendingBlogListPage.jsx";
import UserDetails from "./pages/UserDetails.jsx";
import EditBlogPage from "./pages/UserControllPages/EditBlogPage.jsx";
import MsgDetailsPage from "./pages/UserControllPages/MsgDetailsPage.jsx";
import TnTCreatePage from "./pages/UserControllPages/TnTCreatePage.jsx";

function App() {
	let {isLogin} = UserStore()
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

								{
									isLogin() ? (
										<>
											<Route path="/dashboard" element={<Dashboard/>} />
											<Route path="/dashboard/user-list" element={<UsersList/>} />
											<Route path="/dashboard/approveblog-list" element={<ApproveBlogListPage/>} />
                                            <Route path="/dashboard/pendingblog-list" element={<PendingBlogListPage/>} />
                                            <Route path="/dashboard/editblog/:BlogID" element={<EditBlogPage/>} />
                                            <Route path="/dashboard/testimonial-list" element={<TestimonialPage/>} />
											<Route path="/dashboard/writeBlog" element={<WriteBlogPage/>} />
											<Route path="/dashboard/creatTnT" element={<TnTCreatePage/>} />
											<Route path="/dashboard/contact-message-list" element={<ContactMassegePage/>} />
                                            <Route path="/dashboard/singleMsg/:msgID" element={<MsgDetailsPage/>} />
                                            <Route path="/dashboard/faq-list" element={<FAQPage/>} />
											<Route path="/dashboard/user-details" element={<UserDetails/>} />
                                            <Route path="/faqdetails/:FAQId" element={<FAQDetailsPage/>}></Route>
										</>
									) : (
										<Route path="/dashboard/*" element={
											<Layout>
												<div className="flex flex-col gap-10 items-center justify-center h-screen">
													<h1 className="text-4xl font-bold">Please Login to Access the Page</h1>
													<Login />
												</div>
											</Layout>
										}/>
									)
								}


							</Routes>
						</BrowserRouter>
					)
			}
		</div>
	)
}



export default App