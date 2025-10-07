import React, {useEffect} from 'react';
import AdminDashboardLayout from "../../layout/AdminDashboardLayout.jsx";
import {Link} from "react-router-dom";
import {IoEyeOutline} from "react-icons/io5";
import {RiDeleteBin6Line} from "react-icons/ri";
import Layout from "../../layout/Layout.jsx";
import Login from "../../components/Login.jsx";
import UserStore from "../../store/userStore.js";
import FAQStore from "../../store/FAQStore.js";
import Cookies from "js-cookie";

const FaqPage = () => {
    let {isLogin} = UserStore()
    let userRole = sessionStorage.getItem("role");
    let {FAQList, FAQListRequest} = FAQStore()

    useEffect(() => {
        if (isLogin() && userRole === "admin") {
            FAQListRequest();
        } else {
            Cookies.remove('token');
            sessionStorage.clear();
        }
    }, [FAQListRequest, isLogin, userRole]);



    return (
        isLogin() ? (
            <AdminDashboardLayout>
                <h1 className="text-xl font-semibold">Total FAQ : {FAQList.length}</h1>
                {
                    userRole === "admin" ? (
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                <tr>
                                    <th className="text-center">
                                        <label>
                                            SL
                                        </label>
                                    </th>
                                    <th className="text-center">QSTN</th>
                                    <th className="text-center">ANS</th>
                                    <th className="text-center">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    FAQList.map((faq, index) => (
                                        <tr key={faq._id}>
                                            <th>
                                                <label>
                                                    {index + 1}
                                                </label>
                                            </th>

                                            <td>
                                                <p className="font-bold">{faq['qstn'].slice(0, 15)}</p>
                                            </td>
                                            <td>
                                                <p>{faq['ans'].slice(0, 100)}</p>
                                            </td>
                                            <th>
                                                <div className="flex gap-1">
                                                    <Link to={`/faqdetails/${faq._id}`} className="btn btn-ghost btn-xs text-lg"><IoEyeOutline/>
                                                    </Link>
                                                    <button className="btn btn-soft btn-error btn-xs text-md"><RiDeleteBin6Line />
                                                    </button>
                                                </div>
                                            </th>
                                        </tr>
                                    ))
                                }

                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <></>
                    )
                }
            </AdminDashboardLayout>
        ) : (


            <Layout>
                <div className="flex flex-col gap-10 items-center justify-center h-screen">
                    <h1 className="text-4xl font-bold">Please Login to Access the Page</h1>
                    <Login></Login>
                </div>
            </Layout>
        )
    );
};

export default FaqPage;