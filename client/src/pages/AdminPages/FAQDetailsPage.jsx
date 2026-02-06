import React, {useEffect, useState} from 'react';
import FAQStore from "../../store/FAQStore.js";
import {useNavigate, useParams} from "react-router-dom";
import AdminDashboardLayout from "../../layout/AdminDashboardLayout.jsx";
import Skeleton from "react-loading-skeleton";
import userStore from "../../store/userStore.js";
import axios from "axios";
import {toast} from "react-toastify";

const FaqDetailsPage = () => {
    const {FAQDetails, FAQDetailRequest} = FAQStore()
    const {LoginFormData, LoginFormOnChange} = userStore()
    const {FAQId} = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
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
        setLoading(true);
        try {
            const res = await axios.post(`/api/v1/UpdateFAQ/${FAQId}`, LoginFormData)
            if (res?.data?.data?.acknowledged){
                toast.success("FAQ updated successfully");
                navigate('/dashboard/faq-list')
            }else {
                toast.error("FAQ updated failed");
            }
        }catch (err) {
            toast.error(err?.message, "Failed to update FAQ");
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
                                value={LoginFormData?.qstn || ''}
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
                                value={LoginFormData?.ans || ''}
                                onChange={(e)=>LoginFormOnChange('ans', e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-2 px-4 font-semibold rounded-lg transition-colors duration-200 ${loading ? "bg-sky-300 cursor-not-allowed"  : "bg-sky-400 hover:bg-sky-500 text-white"}`}
                        >
                            {loading ? (
                                <div className="flex items-center justify-center gap-2">
                                    <svg
                                        className="w-5 h-5 animate-spin"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="white"
                                            strokeWidth="4"
                                            fill="none"
                                            opacity="0.25"
                                        />
                                        <path
                                            d="M22 12a10 10 0 0 1-10 10"
                                            stroke="white"
                                            strokeWidth="4"
                                            fill="none"
                                        />
                                    </svg>
                                    Updating...
                                </div>
                            ) : (
                                "Update"
                            )}
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