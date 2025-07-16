import React from 'react';
import Skeleton from "react-loading-skeleton";

const CourseDetailsSkeleton = () => {
    return (
       <div className="grid grid-cols-3 justify-center items-center">
           <Skeleton height={40} width={450} />
           <Skeleton width={20}/>
           <Skeleton height={70}/>
       </div>
    );
};

export default CourseDetailsSkeleton;