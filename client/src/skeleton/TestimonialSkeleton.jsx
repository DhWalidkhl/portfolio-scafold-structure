import React from 'react';
import Skeleton from "react-loading-skeleton";

const TestimonialSkeleton = () => {
    return (
        <div className="w-3/5 mx-auto space-y-4">
            <div className="flex justify-center">
                <Skeleton
                    height={200}
                    width={200}
                    style={{ borderRadius: '50%' }}
                />
            </div>
            <div className="space-y-2">
                <Skeleton height={40} />
                <Skeleton height={30} />
                <Skeleton height={20} />
            </div>
        </div>


    );
};

export default TestimonialSkeleton;