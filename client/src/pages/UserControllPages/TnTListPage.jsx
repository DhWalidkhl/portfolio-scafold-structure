import React, {useEffect, useState} from 'react';
import AdminDashboardLayout from "../../layout/AdminDashboardLayout.jsx";
import UserStore from "../../store/userStore.js";
import Cookies from "js-cookie";
import {Link} from "react-router-dom";
import {IoEyeOutline} from "react-icons/io5";
import {RiDeleteBin6Line} from "react-icons/ri";
import Layout from "../../layout/Layout.jsx";
import Login from "../../components/Login.jsx";
import TnTStore from "../../store/TnTStore.js";
import swal from "sweetalert";
import axios from "axios";

const TnTListPage = () => {
    let {isLogin} = UserStore()
    let userRole = sessionStorage.getItem("role");
    let {TnTList, TnTListRequest} = TnTStore()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (isLogin() && userRole === "admin") {
            TnTListRequest();
        } else {
            Cookies.remove('token');
            sessionStorage.clear();
        }
    }, [TnTListRequest, isLogin, userRole, loading]);

    const handleDelete = async (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(async (willDelete) => {
            if (willDelete) {
                try {
                    if (userRole === 'admin'){
                        const response = await axios.delete(`/api/v1/DeleteTnT/${id}`);
                        if (response.data.status === 'success') {
                            swal("Your blog has been deleted!", { icon: "success" });
                            setLoading(prev => !prev);
                        } else {
                            swal("Failed to delete the blog!", { icon: "error" });
                            console.log(response);
                        }
                    }
                } catch (error) {
                    console.error(error);
                    swal("Something went wrong!", { icon: "error" });
                }
            } else {
                swal("Your blog is safe!");
            }
        });
    };


    return (
        isLogin() ? (
            <AdminDashboardLayout>
                <div className="flex items-center justify-between gap-4 container py-5 px-10">
                    <h1 className="text-xl font-semibold">Total TnC : {TnTList.length}</h1>
                    <Link to="/dashboard/createTnT" className="btn btn-outline btn-primary">Write a TnC</Link>
                </div>

                {
                    userRole === "admin" ? (
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                <tr>
                                    <th className="text-center">
                                        <label>
                                            SL
                                        </label>
                                    </th>
                                    <th className="text-center">Title</th>
                                    <th className="text-center">Description</th>
                                    <th className="text-center">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    TnTList.map((TnT, index) => (
                                        <tr key={TnT._id}>
                                            <th>
                                                <label>
                                                    {index + 1}
                                                </label>
                                            </th>

                                            <td>
                                                <p className="font-semibold">{TnT['title']}</p>
                                            </td>
                                            <td>
                                                <p dangerouslySetInnerHTML={{ __html: TnT.des.slice(0, 200) }} ></p>

                                            </td>
                                            <th>
                                                <div className="flex gap-1">
                                                    <button onClick={()=>handleDelete(TnT._id)} className="btn btn-soft btn-error btn-xs text-md"><RiDeleteBin6Line /></button>
                                                </div>
                                            </th>
                                        </tr>
                                    ))
                                }

                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <></>
                    )
                }
            </AdminDashboardLayout>
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

export default TnTListPage;