import React, { useState } from "react";
import Layout from "../../layout/Layout.jsx";
import Login from "../../components/Login.jsx";
import axios from "axios";
import swal from "sweetalert";

const ForgetPass = () => {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const handleSendOTP = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await axios.post("/api/v1/ForgetPassword", { email });

            if (res.data.status === "success") {
                swal(res.data.message);
                setStep(2);
            } else {
                swal(res.data.message);
            }
        } catch {
            swal("Failed to send OTP");
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOTP = async (e) => {
        e.preventDefault();
        if (!otp) return swal("Enter OTP");
        setStep(3);
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await axios.post("/api/v1/ResetPassword", {
                email,
                otp,
                newPassword,
            });

            if (res.data.status === "success") {
                swal("Password reset successful");
                localStorage.setItem("token", res.data.token);
                window.location.href = "/";
            } else {
                swal(res.data.message);
            }
        } catch {
            swal("Failed to reset password");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <div className="min-h-screen flex items-center justify-center bg-base-200">
                <div className="card w-full max-w-md shadow-xl bg-base-100 p-8 rounded-xl">
                    <h1 className="text-3xl font-bold text-center mb-4">
                        Forgot Password
                    </h1>
                    <p className="text-center text-gray-500 mb-6">
                        Enter your email to receive a otp to reset your password.
                    </p>

                    <form
                        className="space-y-4"
                        onSubmit={
                            step === 1
                                ? handleSendOTP
                                : step === 2
                                    ? handleVerifyOTP
                                    : handleResetPassword
                        }
                    >
                        {/* Email */}
                        <div className="form-control">
                            <label className="label mb-2">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                className="input input-bordered w-full"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={step > 1}
                                required
                            />
                        </div>

                        {/* OTP */}
                        {step >= 2 && (
                            <div className="form-control">
                                <label className="label mb-2">
                                    <span className="label-text">OTP</span>
                                </label>
                                <input
                                    type="text"
                                    className="input input-bordered w-full"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    required
                                />
                            </div>
                        )}

                        {/* New Password */}
                        {step === 3 && (
                            <div className="form-control">
                                <label className="label mb-2">
                                    <span className="label-text">New Password</span>
                                </label>
                                <input
                                    type="password"
                                    className="input input-bordered w-full"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    required
                                />
                            </div>
                        )}

                        <button
                            type="submit"
                            className="btn btn-primary w-full"
                            disabled={loading}
                        >
                            {loading
                                ? "Processing..."
                                : step === 1
                                    ? "Send OTP"
                                    : step === 2
                                        ? "Verify OTP"
                                        : "Reset Password"}
                        </button>
                    </form>

                    <div className="mt-4 text-center">
                        <Login />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ForgetPass;