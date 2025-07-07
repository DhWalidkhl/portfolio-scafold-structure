import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const BlogSkeleton = () => {
	return (
		<div>
			<Skeleton height={160}/>
			<Skeleton width={1000}/>
			<Skeleton count={3}/>
		</div>
	);
};

export default BlogSkeleton;