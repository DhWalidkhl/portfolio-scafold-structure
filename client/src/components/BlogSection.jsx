import React, {useEffect} from 'react';
import BlogSkeleton from "../skeleton/BlogSkeleton.jsx";
import {Link} from "react-router-dom";
import BlogStore from "../store/blogStore.js";
import {LiaLongArrowAltRightSolid} from "react-icons/lia";
import Skeleton from "react-loading-skeleton";

const BlogSection = () => {
	let {ApprovedBlogList, ApprovedBlogListRequest} = BlogStore()
	useEffect(() => {
		(async () => {
			await ApprovedBlogListRequest()
		})()
	}, []);

	const blogs = ApprovedBlogList.slice(0, 4);


	return (
		<div className="py-16 lg:py-20 container mx-auto px-4 max-w-6xl">
			<h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 text-center mb-10">Blog and News</h2>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				{blogs.length === 0 ? (
					<>
						<BlogSkeleton />
						<BlogSkeleton />
						<BlogSkeleton />
						<BlogSkeleton />
					</>
				) : (
					blogs.map((blog) => (
						<article key={blog._id} className="card lg:card-side bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
							<figure className="lg:w-80 shrink-0">
								<img src={blog.img} alt="" className="w-full h-48 lg:h-full object-cover" />
							</figure>
							<div className="card-body p-5">
								<h3 className="card-title text-slate-900 dark:text-slate-100 text-lg font-semibold">{blog?.title?.slice(0, 40)}{blog?.title?.length > 40 ? '…' : ''}</h3>
								<div className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-snug" dangerouslySetInnerHTML={{ __html: blog.des?.slice(0, 80) ?? '' }} />
								<div className="card-actions justify-end mt-3">
									<Link to={`/blogs/${blog._id}`} className="btn btn-sm bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white border-0 rounded-lg">
										See Details
									</Link>
								</div>
							</div>
						</article>
					))
				)}
			</div>
			{ApprovedBlogList.length > 4 && blogs.length > 0 && (
				<div className="flex justify-center mt-10">
					<Link to="/blogs" className="btn btn-outline border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg gap-2">
						See All Blogs <LiaLongArrowAltRightSolid className="text-lg" />
					</Link>
				</div>
			)}
		</div>
	);
};

export default BlogSection;