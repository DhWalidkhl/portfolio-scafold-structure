import React from 'react';
import Layout from "../layout/Layout.jsx";
import userStore from "../store/userStore.js";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const OtpPage = () => {
    let {LoginFormData, LoginFormOnChange} = userStore()
    const navigate = useNavigate();

    const handleOtpVerification = async (e) => {
        e.preventDefault();
        const email = sessionStorage.getItem("email");

        try {
            const res = await axios.get(`/api/v1/UserList/${email}/${LoginFormData?.otp}`);
            console.log(res);

            // ✅ res.status is a *number* (like 200) not "success".
            // You should check res.data.status or res.status === 200
            if (res.data.status === "success") {
                window.alert("User Registered Successfully. Please login.");
                navigate("/");
            } else {
                window.alert("Invalid OTP");
            }
        } catch (error) {
            console.error("OTP verification failed:", error);
            if (error.response) {
                console.log("Error response data:", error.response.data);
                console.log("Error response status:", error.response.status);
            } else {
                console.log("Error without response:", error.message);
            }
            window.alert("Something went wrong. Please try again.");
        }
    };

    return (
        <Layout>
            <div className="container mx-auto py-20 flex justify-center items-center">
                <form onSubmit={handleOtpVerification} className="w-full px-96 space-y-6">
                    <legend className="fieldset-legend">OTP from your E-mail</legend>
                    <input onChange={(e)=>LoginFormOnChange("otp", e.target.value)} type="text" placeholder="Enter Your OTP" className="input input-primary w-full"/>
                    <button className="btn btn-dash btn-primary text-lg w-full">Sign Up</button>
                </form>
            </div>
        </Layout>
    );
};

export default OtpPage;