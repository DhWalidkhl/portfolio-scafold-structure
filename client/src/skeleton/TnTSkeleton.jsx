import React from 'react';
import Skeleton from "react-loading-skeleton";

const TnTSkeleton = () => {
    return (
        <div className="container mx-auto px-20 space-y-4 mt-20">
            <div>
                <Skeleton
                    height={50}
                    width={500}
                />
            </div>
            <div className="space-y-2">
                <Skeleton height={30}/>
                <Skeleton height={100}/>
            </div>
            <div className="space-y-2">
                <Skeleton height={30}/>
                <Skeleton height={100}/>
            </div>
            <div className="space-y-2">
                <Skeleton height={30}/>
                <Skeleton height={100}/>
            </div>
        </div>
    );
};

export default TnTSkeleton;