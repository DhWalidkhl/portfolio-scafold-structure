import React, {useEffect} from 'react';
import FAQStore from "../../store/FAQStore.js";
import {Link, useParams} from "react-router-dom";
import AdminDashboardLayout from "../../layout/AdminDashboardLayout.jsx";
import Skeleton from "react-loading-skeleton";

const FaqDetailsPage = () => {
    const {FAQDetails, FAQDetailRequest} = FAQStore()
    const {FAQId} = useParams();
    useEffect(() => {
        const fetchData = async () => {
            if (FAQId) {
                await FAQDetailRequest(FAQId);
            }
        };
        fetchData();
    }, [FAQId]);


    return (
        <AdminDashboardLayout>
            <h1 className="text-center font-bold text-2xl py-8">FAQ Details</h1>
            {FAQDetails ? (
                <div>
                    <div className="space-y-3 pb-10">
                        <h1 className="font-semibold text-xl">{FAQDetails?.qstn}</h1>
                        <p>{FAQDetails?.ans}</p>
                    </div>
                    <Link className="btn btn-outline btn-warning">Edit</Link>
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