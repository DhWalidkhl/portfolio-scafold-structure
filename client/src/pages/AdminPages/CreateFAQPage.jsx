import React, {useState} from 'react';
import AdminDashboardLayout from "../../layout/AdminDashboardLayout.jsx";
import userStore from "../../store/userStore.js";
import axios from "axios";
import {toast} from "react-toastify";

const CreateFaqPage = () => {
    const {LoginFormData, LoginFormOnChange} = userStore()
    const [loading, setLoading] = useState(false);

    const handleCreateFAQ = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await axios.post("/api/v1/CreateFAQ", LoginFormData);

            if (res?.data?.status === 'success') {
                toast.success("Successfully created FAQ");
                LoginFormOnChange("qstn", "");
                LoginFormOnChange("ans", "");
            }
            else {
                toast.error(res?.data?.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <AdminDashboardLayout>
            <h1 className="text-center font-bold text-2xl py-8">Create a new FAQ</h1>
            <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
                <form onSubmit={handleCreateFAQ} className="space-y-5">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="question">
                            Question
                        </label>
                        <input
                            id="question"
                            required
                            type="text"
                            placeholder="Type Question"
                            onChange={(e)=>LoginFormOnChange('qstn', e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="answer">
                            Answer
                        </label>

                        <textarea
                            id="answer"
                            required
                            name="answer"
                            rows={8}
                            onChange={(e) => LoginFormOnChange("ans", e.target.value)}
                            placeholder="Type your answer here..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
                        />
                    </div>

                    <button
                        onClick={handleCreateFAQ}
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
                                Creating...
                            </div>
                        ) : (
                            "Create"
                        )}
                    </button>




                    {/*<button*/}
                    {/*    onClick={handleCreateFAQ}*/}
                    {/*    type="submit"*/}
                    {/*    className="w-full py-2 px-4 bg-sky-400 text-white font-semibold rounded-lg hover:bg-sky-500 transition-colors duration-200"*/}
                    {/*>*/}
                    {/*    Create*/}
                    {/*</button>*/}
                </form>
            </div>

        </AdminDashboardLayout>
    );
};

export default CreateFaqPage;