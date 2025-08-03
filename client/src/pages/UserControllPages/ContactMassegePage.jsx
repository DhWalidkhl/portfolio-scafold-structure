import React from 'react';

import AdminDashboardLayout from "../../layout/AdminDashboardLayout.jsx";

const ContactMassegePage = () => {
    return (
        <AdminDashboardLayout>
            <div className="container p-2 sm:p-4">
                <div className="mb-4 px-11 text-2xl font-semibold leading-tight flex flex-row justify-between items-center">
                    <h2>Message from user</h2>
                    <p>Total Message: </p>
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
                    <div className="flex border-b border-opacity-20">
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
                </div>
            </div>
        </AdminDashboardLayout>
    );
};

export default ContactMassegePage;