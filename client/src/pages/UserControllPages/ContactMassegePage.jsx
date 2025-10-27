import React, {useEffect, useState} from 'react';

import AdminDashboardLayout from "../../layout/AdminDashboardLayout.jsx";
import contactMessageStore from "../../store/contactMessageStore.js";
import UserStore from "../../store/userStore.js";
import Login from "../../components/Login.jsx";
import Layout from "../../layout/Layout.jsx";
import Cookies from "js-cookie";

const ContactMassegePage = () => {
    let {isLogin} = UserStore()
    const {ContactMessageList, ContactMessageListRequest, ContactMessageListByUser, ContactMessageListRequestByUser} = contactMessageStore()
    let userRole = sessionStorage.getItem("role");
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        ( () => {
            if(isLogin() && userRole === "admin"){
                setLoading(true)
                ContactMessageListRequest();
                setLoading(false)
            }else if(isLogin() && userRole === "user") {
                setLoading(true)
                ContactMessageListRequestByUser()
                setLoading(false)
            }else {
                Cookies.remove('token')
                sessionStorage.clear()
            }
        })();

    }, [ContactMessageListRequest, ContactMessageListRequestByUser, isLogin, loading]);





    return (
        isLogin() ? (
            <AdminDashboardLayout>
                {
                    userRole === "admin" ? (
                        <div className="container p-2 sm:p-4">
                            <div className="mb-4 px-11 text-2xl font-semibold leading-tight flex flex-row justify-between items-center">
                                <h2>Message from user</h2>
                                <p>Total Message: {ContactMessageList.length || 0}</p>
                            </div>
                            <div className="flex px-10 flex-col overflow-x-auto">
                                <div className="flex text-center bg-gray-200 font-semibold">
                                    <div className="flex items-center text-center justify-center w-8 px-2 py-3 sm:p-3">
                                        SL
                                    </div>
                                    <div className="w-32 px-2 py-3 sm:p-3">Sender</div>
                                    <div className="flex-1 px-2 py-3 sm:p-3">Message</div>
                                    <div className="hidden text-center w-24 px-2 py-3 sm:p-3 sm:block">Action</div>
                                </div>
                                {
                                    ContactMessageList.map((message, index) => (
                                        <div key={message._id} className="flex border-b border-opacity-20">
                                            <div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
                                                {index + 1}
                                            </div>
                                            <div className="w-64 px-2 text-center py-3 sm:p-3">
                                                <p>{message?.sender?.firstName} {message?.sender?.lastName}</p>
                                            </div>
                                            <div className="flex-1 block px-2 py-3 truncate sm:p-3 sm:w-auto">
                                                {message?.msg}
                                            </div>
                                            <div className="text-center w-24 px-2 py-3 sm:p-3 sm:block text-gray-400">
                                                <p>View</p>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    ) : (
                        <div className="container p-2 sm:p-4">
                            <div className="mb-4 px-11 text-2xl font-semibold leading-tight flex flex-row justify-between items-center">
                                <h2>Message from You</h2>
                                <p>Total Message: {ContactMessageListByUser.length || 0}</p>
                            </div>
                            <div className="flex px-10 flex-col overflow-x-auto">
                                <div className="flex text-center bg-gray-200 font-semibold">
                                    <div className="flex items-center text-center justify-center w-8 px-2 py-3 sm:p-3">
                                        SL
                                    </div>
                                    <div className="w-32 px-2 py-3 sm:p-3">Sender</div>
                                    <div className="flex-1 px-2 py-3 sm:p-3">Message</div>
                                    <div className="hidden text-center w-24 px-2 py-3 sm:p-3 sm:block">Action</div>
                                </div>
                                {
                                    ContactMessageList.map((message) => (
                                        <div key={message._id} className="flex border-b border-opacity-20">
                                            <div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
                                                1
                                            </div>
                                            <div className="w-32 px-2 text-center py-3 sm:p-3">
                                                <p>Tracy Kim</p>
                                            </div>
                                            <div className="flex-1 block px-2 py-3 truncate sm:p-3 sm:w-auto">An cum minimum voluptua
                                                repudiandae, nec illum essent et. Id tibique voluptatum per, eos eu civibus mnesarchum
                                                intellegam. An mundi detracto usu, diceret deserunt lobortis te cum.
                                            </div>
                                            <div className="text-center w-24 px-2 py-3 sm:p-3 sm:block text-gray-400">
                                                <p>View</p>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
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

export default ContactMassegePage;