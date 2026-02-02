import "tailwindcss";
import { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserStore from "./store/userStore.js";

// Pages
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const BlogPage = lazy(() => import("./pages/BlogPage.jsx"));
const BlogDetailPage = lazy(() => import("./pages/BlogDetailPage.jsx"));
const EducationPage = lazy(() => import("./pages/EducationPage.jsx"));
const ContactPage = lazy(() => import("./pages/ContactPage.jsx"));
const PortfolioLayout = lazy(() => import("./layout/PortfolioLayout.jsx"));
const CourseDetailsPage = lazy(() => import("./pages/CourseDetailsPage.jsx"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage.jsx"));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage.jsx"));
const ErrorPage = lazy(() => import("./pages/ErrorPage.jsx"));
const SignUpPage = lazy(() => import("./pages/SignUpPage.jsx"));
const TermsAndConditionPage = lazy(() => import("./pages/TermsAndConditionPage.jsx"));
const OtpPage = lazy(() => import("./pages/OtpPage.jsx"));
const ForgetPass = lazy(() => import("./pages/ForgetPass.jsx"));

// Dashboard pages
const Dashboard = lazy(() => import("./pages/UserControllPages/Dashboard.jsx"));
const UsersList = lazy(() => import("./pages/UsersList.jsx"));
const ApproveBlogListPage = lazy(() => import("./pages/UserControllPages/ApproveBlogListPage.jsx"));
const PendingBlogListPage = lazy(() => import("./pages/UserControllPages/PendingBlogListPage.jsx"));
const EditBlogPage = lazy(() => import("./pages/UserControllPages/EditBlogPage.jsx"));
const WriteBlogPage = lazy(() => import("./pages/UserControllPages/WriteBlogPage.jsx"));
const TestimonialPage = lazy(() => import("./pages/UserControllPages/TestimonialPage.jsx"));
const TnTCreatePage = lazy(() => import("./pages/UserControllPages/TnTCreatePage.jsx"));
const TnTListPage = lazy(() => import("./pages/UserControllPages/TnTListPage.jsx"));
const ContactMassegePage = lazy(() => import("./pages/UserControllPages/ContactMassegePage.jsx"));
const FAQPage = lazy(() => import("./pages/UserControllPages/FAQPage.jsx"));
const FAQDetailsPage = lazy(() => import("./pages/UserControllPages/FAQDetailsPage.jsx"));
const UserDetails = lazy(() => import("./pages/UserDetails.jsx"));
const MsgDetailsPage = lazy(() => import("./pages/UserControllPages/MsgDetailsPage.jsx"));

// Components
const Login = lazy(() => import("./components/Login.jsx"));
const Layout = lazy(() => import("./layout/Layout.jsx"));
const PreLoadingSpinner = lazy(() => import("./components/PreLoaderSpinner/PreLoadingSpinner.jsx"));

function App() {
    const { isLogin } = UserStore();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 700);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <PreLoadingSpinner />;
    }

    return (
        <BrowserRouter>
            <Suspense  fallback={<PreLoadingSpinner /> } >
                <Routes>
                    {/* Public routes */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/otp" element={<OtpPage />} />
                    <Route path="/forget-pass" element={<ForgetPass />} />
                    <Route path="/blogs" element={<BlogPage />} />
                    <Route path="/blogs/:BlogID" element={<BlogDetailPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/terms" element={<TermsAndConditionPage />} />

                    {/* Portfolio */}
                    <Route path="/portfolio" element={<PortfolioLayout />} />
                    <Route path="/portfolio/projects" element={<ProjectsPage />} />
                    <Route path="/portfolio/projects/:ProjectID" element={<ProjectDetailPage />} />
                    <Route path="/portfolio/education" element={<EducationPage />} />
                    <Route path="/portfolio/courses" element={<CourseDetailsPage />} />

                    {/* Protected routes */}
                    {isLogin() ? (
                        <>
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/dashboard/user-list" element={<UsersList />} />
                            <Route path="/dashboard/approveblog-list" element={<ApproveBlogListPage />} />
                            <Route path="/dashboard/pendingblog-list" element={<PendingBlogListPage />} />
                            <Route path="/dashboard/editblog/:BlogID" element={<EditBlogPage />} />
                            <Route path="/dashboard/writeBlog" element={<WriteBlogPage />} />
                            <Route path="/dashboard/testimonial-list" element={<TestimonialPage />} />
                            <Route path="/dashboard/TnTList" element={<TnTListPage />} />
                            <Route path="/dashboard/createTnT" element={<TnTCreatePage />} />
                            <Route path="/dashboard/contact-message-list" element={<ContactMassegePage />} />
                            <Route path="/dashboard/singleMsg/:msgID" element={<MsgDetailsPage />} />
                            <Route path="/dashboard/faq-list" element={<FAQPage />} />
                            <Route path="/dashboard/user-details" element={<UserDetails />} />
                            <Route path="/faqdetails/:FAQId" element={<FAQDetailsPage />} />
                        </>
                    ) : (
                        <Route
                            path="/dashboard/*"
                            element={
                                <Layout>
                                    <div className="flex flex-col gap-6 items-center justify-center h-screen">
                                        <h1 className="text-4xl font-bold">
                                            Please Login to Access the Page
                                        </h1>
                                        <Login />
                                    </div>
                                </Layout>
                            }
                        />
                    )}

                    {/* Error page */}
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
