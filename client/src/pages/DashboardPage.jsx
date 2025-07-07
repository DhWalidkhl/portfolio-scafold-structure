import React from 'react';
import Layout from "../layout/Layout.jsx";
import UserStore from "../store/userStore.js";
import Login from "../components/Login.jsx";

const DashboardPage = () => {
    let {UserProfile} = UserStore()
    return (
        <Layout>
            {
                UserProfile === null ? (
                    <div className="flex flex-col gap-10 items-center justify-center h-screen">
                        <h1 className="text-4xl font-bold">Please Login to Access the Page</h1>
                        <Login></Login>
                    </div>
                ) : (
                    <div className="drawer lg:drawer-open">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle"/>
                        <div className="drawer-content flex flex-col items-center justify-center">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                                Open drawer
                            </label>
                        </div>
                        <div className="drawer-side bg-base-200 min-h-full w-80 p-4 text-base-content">
                            {
                                UserProfile === null ? ("") : (<div>
                                    <div className="text-center">
                                        <img className="w-50" src={UserProfile.img}/>

                                        {
                                            sessionStorage.getItem("role") === "admin" ? (
                                                <>
                                                    <p>{UserProfile.firstName} {UserProfile.lastName}</p>
                                                    <p>Welcome back <span
                                                        className="font-semibold uppercase underline text-blue-800">{UserProfile.role}</span>
                                                    </p>
                                                </>
                                            ) : (<>

                                                    <p>Welcome back </p>
                                                    <p className="font-semibold uppercase underline text-blue-800">{UserProfile.firstName} {UserProfile.lastName} </p>

                                                </>
                                            )
                                        }
                                    </div>
                                    <label htmlFor="my-drawer-2" aria-label="close sidebar"
                                           className="drawer-overlay"></label>
                                    <ul className="menu">
                                        {/* Sidebar content here */}
                                        <li><a>Sidebar Item 1</a></li>
                                        <li><a>Sidebar Item 2</a></li>
                                    </ul>
                                </div>)
                            }

                        </div>
                    </div>
                )
            }

        </Layout>
    );
};

export default DashboardPage;