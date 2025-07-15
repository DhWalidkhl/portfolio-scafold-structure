import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const BlogSkeleton = () => {
	return (
		<div className="grid gap-4 grid-cols-2">
				<Skeleton height={180}/>
			<div>
				<Skeleton height={50}/>
				<Skeleton height={50}/>
				<Skeleton height={50}/>
				<Skeleton/>
			</div>
		</div>
	);
};

export default BlogSkeleton;