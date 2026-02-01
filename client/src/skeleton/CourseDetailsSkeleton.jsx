import React from 'react';
import Skeleton from "react-loading-skeleton";

const CourseDetailsSkeleton = () => {
    return (
       <div className="gird justify-center items-center">
           <Skeleton height={150} />
       </div>
    );
};

export default CourseDetailsSkeleton;