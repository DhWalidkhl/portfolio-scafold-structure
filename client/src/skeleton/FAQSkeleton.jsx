import React from 'react';
import Skeleton from "react-loading-skeleton";

const FaqSkeleton = () => {
    return (
        <div className="w-100">
            <Skeleton height={70}/>
            <Skeleton height={70}/>
            <Skeleton height={70}/>
            <Skeleton height={70}/>
            <Skeleton height={70}/>
            <Skeleton height={70}/>
        </div>
    );
};

export default FaqSkeleton;