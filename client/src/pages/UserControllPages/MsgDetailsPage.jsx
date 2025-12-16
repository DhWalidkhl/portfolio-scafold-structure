import React, {useEffect} from 'react';
import AdminDashboardLayout from "../../layout/AdminDashboardLayout.jsx";
import UserStore from "../../store/userStore.js";
import contactMessageStore from "../../store/contactMessageStore.js";
import {useParams} from "react-router-dom";
import Layout from "../../layout/Layout.jsx";
import Login from "../../components/Login.jsx";

const MsgDetailsPage = () => {
    let { isLogin } = UserStore();
    let {SingleMsg, MessageDetailsRequest} = contactMessageStore()
    const {msgID} = useParams()

    useEffect(() => {
        if (isLogin && msgID) {
            MessageDetailsRequest(msgID);
        }
    }, [isLogin, msgID, MessageDetailsRequest]);


    return (
        isLogin() ? (
            <AdminDashboardLayout>
                <div className="container">
                    {
                        SingleMsg ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-2xl shadow-sm p-6 border border-gray-100">

                                {/* Message Section */}
                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Message
                                    </h3>
                                    <textarea
                                        disabled
                                        value={SingleMsg?.msg}
                                        className="w-full min-h-[150px] resize-none rounded-xl border border-gray-200 bg-gray-50 p-4 text-gray-700 focus:outline-none"
                                    />
                                </div>

                                {/* Sender Details */}
                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Sender Details
                                    </h3>

                                    <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 space-y-2 flex justify-between">
                                        <div>
                                            <p className="text-gray-700">
                                                <span className="font-medium text-gray-900">Name:</span>{" "}
                                                {SingleMsg?.user[0]?.firstName} {SingleMsg?.user[0]?.lastName}
                                            </p>
                                            <p className="text-gray-700">
                                                <span className="font-medium text-gray-900">Email:</span>{" "}
                                                {SingleMsg?.user[0]?.email}
                                            </p>
                                        </div>
                                        <div>
                                            <img src={SingleMsg?.user[0]?.img} alt="Sender Image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <p className="text-center text-gray-500 py-10">
                                Loading message details...
                            </p>
                        )
                    }
                </div>
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

export default MsgDetailsPage;