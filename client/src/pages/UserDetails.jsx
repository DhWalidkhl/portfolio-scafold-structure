import React, {useEffect} from 'react';
import UserStore from "../store/userStore.js";
import Layout from "../layout/Layout.jsx";
import Login from "../components/Login.jsx";
import Cookies from "js-cookie";
import axios from "axios";
import swal from 'sweetalert';

const UserDetails = () => {
    const {isLogin, ProfileDetailsByID, UserProfile,LoginFormData, LoginFormOnChange} = UserStore();

    console.log(LoginFormData);

    useEffect(() => {
        if (UserProfile) {
            LoginFormOnChange("firstName", UserProfile.firstName);
            LoginFormOnChange("lastName", UserProfile.lastName);
            LoginFormOnChange("mobile", UserProfile.mobile);
        }
    }, [UserProfile]);


    useEffect(() => {
        const loggedIn = isLogin();

        if (loggedIn) {
            ProfileDetailsByID();
        } else {
            Cookies.remove("token");
            sessionStorage.clear();
        }
    }, []);



    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.patch("/api/v1/UpdateUserProfile", LoginFormData);
            if (res.data.status === "success") {
                swal("Profile Updated successfully!");
                ProfileDetailsByID();
            }
        } catch (error) {
            console.error(error);
        }
    };



    return (
        isLogin() ? (
            <Layout>

                <div className="mt-20 container mx-auto">
                    <h1 className="text-2xl underline font-semibold text-center mb-10">{UserProfile?.firstName} {UserProfile?.lastName} profile details </h1>
                    <div className="hero">
                        <form onSubmit={handleUpdate}>
                            <div className="hero-content flex-col gap-15 lg:flex-row-reverse">
                                <img
                                    src={UserProfile?.img}
                                    className="max-w-lg rounded-lg shadow-2xl"
                                />
                                <div>
                                    <div className={"flex flex-row justify-between gap-8"}>
                                        <fieldset className="fieldset">
                                            <legend className="fieldset-legend">First Name</legend>
                                            <input onChange={(e) => LoginFormOnChange('firstName', e.target.value)}
                                                   type="text" defaultValue={UserProfile?.firstName} className="input"
                                                   placeholder="Type here"/>
                                        </fieldset>
                                        <fieldset className="fieldset">
                                            <legend className="fieldset-legend">Last Name</legend>
                                            <input onChange={(e) => LoginFormOnChange('lastName', e.target.value)}
                                                   type="text" defaultValue={UserProfile?.lastName} className="input"
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
                                        <legend className="fieldset-legend">Mobile</legend>
                                        <input onChange={(e) => LoginFormOnChange('mobile', e.target.value)} type="text"
                                               defaultValue={UserProfile?.mobile} className="input"
                                               placeholder="Type here"/>
                                    </fieldset>
                                    <button className="btn btn-soft btn-success w-full mt-10">Update</button>
                                </div>
                            </div>
                        </form>

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