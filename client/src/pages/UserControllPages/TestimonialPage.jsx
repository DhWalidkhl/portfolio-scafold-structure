import React, {useEffect} from 'react';
import AdminDashboardLayout from "../../layout/AdminDashboardLayout.jsx";
import UserStore from "../../store/userStore.js";
import Cookies from "js-cookie";
import TestimonialStore from "../../store/TestimonialStore.js";
import {IoEyeOutline} from "react-icons/io5";
import {RiDeleteBin6Line} from "react-icons/ri";
import swal from "sweetalert";
import axios from "axios";

const TestimonialPage = () => {
    let {isLogin} = UserStore()
    let {TestimonialListRequest, TestimonialList} = TestimonialStore()
    let userRole = sessionStorage.getItem("role");

    useEffect(() => {
        ( async () => {
            if(isLogin() && userRole === "admin"){
                await TestimonialListRequest();
            }else {
                Cookies.remove('token')
                sessionStorage.clear()
            }
        })();

    }, []);


    const handleDelete = async (id) => {
        swal({
            title: "Are you sure?",
            text: "This action cannot be undone. Do you want to delete this testimonial?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(async (willDelete) => {
            if (willDelete) {
                try {
                    if (userRole === 'admin'){
                        const response = await axios.delete(`/api/v1/DeleteTestimonial/${id}`);
                        if (response.data.status === 'success') {
                            swal("Your Testimonial has been deleted!", { icon: "success" });
                            await TestimonialListRequest()
                        } else {
                            swal("Failed to delete the Testimonial!", { icon: "error" });
                        }
                    } else {
                            swal("Failed to delete the Testimonial!", { icon: "error" });
                    }

                } catch (error) {
                    console.error(error);
                    swal("Something went wrong!", { icon: "error" });
                }
            } else {
                swal("Your Testimonial is safe!");
            }
        });
    };


    return (
        <AdminDashboardLayout>
            <div>
                <h1 className= "text-xl font-semibold">
                    Total Testimonials: {TestimonialList.length}
                </h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>SL</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        TestimonialList.length === 0 ?
                            (<p className="text-center text-gray-500 py-4">No testimonials found.</p>)
                            :
                            TestimonialList.map((testimonial, index) => (
                                <tr key={testimonial._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={testimonial.user?.img}
                                                        alt="author image" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{testimonial.user?.firstName} {testimonial.user?.lastName}</div>
                                                <div className="text-sm opacity-50">{testimonial.user?.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {testimonial.des?.slice(0, 100)}
                                    </td>
                                    <th>
                                        <div className="flex gap-1">
                                            <button title="View" className="btn btn-ghost btn-xs text-lg"><IoEyeOutline/>
                                            </button>
                                            <button title="Delete" onClick={()=>handleDelete(testimonial._id)} className="btn btn-soft btn-error btn-xs text-md"><RiDeleteBin6Line />
                                            </button>
                                        </div>
                                    </th>
                                </tr>
                            ))
                    }

                    </tbody>

                </table>
            </div>
        </AdminDashboardLayout>
    );
};

export default TestimonialPage;