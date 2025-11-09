import React, {useEffect} from 'react';
import UserStore from "../store/userStore.js";
import Layout from "../layout/Layout.jsx";
import Login from "../components/Login.jsx";
import Cookies from "js-cookie";
import axios from "axios";

const UserDetails = () => {
    const {isLogin, ProfileDetailsByID, UserProfile,LoginFormData, LoginFormOnChange} = UserStore();

    console.log(LoginFormData);

    useEffect(() => {
        ( () => {
            if(isLogin()){
                ProfileDetailsByID()
            }else {
                Cookies.remove('token')
                sessionStorage.clear()
            }
        })();

    }, [ProfileDetailsByID, isLogin]);


    const handleUpdate = async () => {
        try {
            const res = await axios.patch("/api/v1/UpdateUserProfile", LoginFormData);

            if (res.data.status === "success") {
                console.log(LoginFormData);
                // window.location.reload();
            } else {
                console.log("Update failed:", res.data.message || res.data);
            }
        } catch (error) {
            console.error("Error updating user profile:", error);
        }
    };


    return (
        isLogin() ? (
            <Layout>

                <div className="mt-20 container mx-auto">
                    <h1 className="text-2xl underline font-semibold text-center mb-10">{UserProfile?.firstName} {UserProfile?.lastName} profile details </h1>
                    <div className="hero">
                        <div className="hero-content flex-col gap-15 lg:flex-row-reverse">
                            <img
                                src={UserProfile?.img}
                                className="max-w-lg rounded-lg shadow-2xl"
                            />
                            <div>
                                <div className={"flex flex-row justify-between gap-8"}>
                                    <fieldset className="fieldset">
                                        <legend className="fieldset-legend">First Name</legend>
                                        <input onChange={(e) => LoginFormOnChange('firstName', e.target.value)} type="text" defaultValue={UserProfile?.firstName} className="input"
                                               placeholder="Type here"/>
                                    </fieldset>
                                    <fieldset className="fieldset">
                                        <legend className="fieldset-legend">Last Name</legend>
                                        <input onChange={(e) => LoginFormOnChange('lastName', e.target.value)} type="text" defaultValue={UserProfile?.lastName} className="input"
                                               placeholder="Type here"/>
                                    </fieldset>
                                </div>

                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Email</legend>
                                    <input type="text" defaultValue={UserProfile?.email} disabled
                                           className="input w-full"
                                           placeholder="Type here"/>
                                </fieldset>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Password</legend>
                                    <input onChange={(e) => LoginFormOnChange('password', e.target.value)} type="password" defaultValue={UserProfile?.password}
                                           className="input w-full"
                                           placeholder="Type here"/>
                                </fieldset>

                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Mobile</legend>
                                    <input onChange={(e) => LoginFormOnChange('mobile', e.target.value)} type="text" defaultValue={UserProfile?.mobile} className="input"
                                           placeholder="Type here"/>
                                </fieldset>
                                <button onClick={handleUpdate} className="btn btn-soft btn-success w-full mt-10">Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
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

export default UserDetails;