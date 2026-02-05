import React, {useEffect} from 'react';
import FAQStore from "../../store/FAQStore.js";
import {useParams} from "react-router-dom";
import AdminDashboardLayout from "../../layout/AdminDashboardLayout.jsx";
import Skeleton from "react-loading-skeleton";
import userStore from "../../store/userStore.js";
import axios from "axios";

const FaqDetailsPage = () => {
    const {FAQDetails, FAQDetailRequest} = FAQStore()
    const {LoginFormData, LoginFormOnChange} = userStore()
    const {FAQId} = useParams();
    useEffect(() => {
        if (FAQId) {
            FAQDetailRequest(FAQId);
        }
    }, [FAQId, FAQDetailRequest]);

    useEffect(() => {
        if (FAQDetails) {
            LoginFormOnChange('qstn', FAQDetails.qstn);
            LoginFormOnChange('ans', FAQDetails.ans);
        }
    }, [FAQDetails, LoginFormOnChange]);

    const handleUpdateFAQ = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`/UpdateFAQ/${FAQId}`, LoginFormData)
            console.log(res)
        }catch (err) {
            console.error('Error updating FAQ:', err);
            alert('Failed to update FAQ');
        }
    }



    return (
        <AdminDashboardLayout>
            <h1 className="text-center font-bold text-2xl py-8">FAQ Details</h1>
            {FAQDetails ? (
                <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
                    <form onSubmit={handleUpdateFAQ} className="space-y-5">
                        <div>
                            <label className="block text-gray-700 font-medium mb-1" htmlFor="question">
                                Question
                            </label>
                            <input
                                id="question"
                                type="text"
                                value={FAQDetails?.qstn || ' '}
                                onChange={(e)=>LoginFormOnChange('qstn', e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-1" htmlFor="answer">
                                Answer
                            </label>
                            <input
                                id="answer"
                                type="text"
                                value={FAQDetails?.ans || ' '}
                                onChange={(e)=>LoginFormOnChange('ans', e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-sky-400 text-white font-semibold rounded-lg hover:bg-sky-500 transition-colors duration-200"
                        >
                            Update
                        </button>
                    </form>
                </div>



            ) : (
                <div>
                    <Skeleton/>
                    <Skeleton/>
                </div>
            )}

        </AdminDashboardLayout>
    );
};

export default FaqDetailsPage;