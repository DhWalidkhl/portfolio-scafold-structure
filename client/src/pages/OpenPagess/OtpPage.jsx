import React from 'react';
import Layout from "../../layout/Layout.jsx";
import userStore from "../../store/userStore.js";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const OtpPage = () => {
    let {LoginFormData, LoginFormOnChange} = userStore()
    const navigate = useNavigate();
    const email = sessionStorage.getItem("email");

    const handleOtpVerification = async (e) => {
        e.preventDefault();
        try {
                const res = await axios.get(`/api/v1/VerifyOTP/${email}/${LoginFormData.otp}`);
            if (res.data.status === "success") {
                window.alert("User Registered Successfully. Please login.");
                navigate("/");
            } else {
                window.alert(res?.data?.message);
            }
        } catch (error) {
            console.log("Axios error:", error);
            console.log("Response:", error.response);
            console.log("Status:", error.response?.status);
            console.log("Message:", error.message);
            window.alert(`Something went wrong. Please try again. Error: ${error.message}`);
        }
    };

    return (
        <Layout>
            <div className="min-h-screen flex items-center justify-center px-4 mt-10">
                <form onSubmit={handleOtpVerification} className="w-full max-w-md space-y-6 bg-base-100 p-6 sm:p-8 rounded-lg shadow-md">
                    <legend className="fieldset-legend">OTP from your E-mail</legend>
                    <input onChange={(e)=>LoginFormOnChange("otp", e.target.value)} type="text" placeholder="Enter Your OTP" className="input input-primary w-full" required/>
                    <button className="btn btn-dash btn-primary text-lg w-full">Sign Up</button>
                </form>
            </div>
        </Layout>
    );
};

export default OtpPage;