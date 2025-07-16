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
            const res = await axios.get(`/api/v1/VerifyOTP/${email}/${LoginFormData.otp}`);
            if (res.data.status === "success") {
                window.alert("User Registered Successfully. Please login.");
                navigate("/");
            } else {
                window.alert(res?.data?.message);
            }
        } catch (error) {
            window.alert("Something went wrong. Please try again.", error);
        }
    };

    return (
        <Layout>
            <div className="container mx-auto pt-30 flex justify-center items-center">
                <form onSubmit={handleOtpVerification} className="w-full px-96 space-y-6">
                    <legend className="fieldset-legend">OTP from your E-mail</legend>
                    <input onChange={(e)=>LoginFormOnChange("otp", e.target.value)} type="text" placeholder="Enter Your OTP" className="input input-primary w-full" required/>
                    <button className="btn btn-dash btn-primary text-lg w-full">Sign Up</button>
                </form>
            </div>
        </Layout>
    );
};

export default OtpPage;