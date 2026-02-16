import React, {useEffect} from 'react';
import Layout from "../../layout/Layout.jsx";
import BlogSkeleton from "../../skeleton/BlogSkeleton.jsx";
import SectionHeading from "../../components/SectionHeading.jsx";
import UserStore from "../../store/userStore.js";
import {Link} from "react-router-dom";
import BlogStore from "../../store/blogStore.js";
import PageTitle from "../../components/PageTitle.jsx";

const BlogPage = () => {
	let {isLogin} = UserStore()
	let {ApprovedBlogList, ApprovedBlogListRequest} = BlogStore()
	useEffect( () => {
		( async () => {
			await ApprovedBlogListRequest()
		})()
	}, []);

	return (
		<Layout>
			<PageTitle title={"Walid | Blogs"}/>
			<div className="pt-25">
				<SectionHeading headingBig='read my blog' headingSmall='My Latest Blog'/>
				<div className="container mx-auto">
					{isLogin() ? (
						<div className="flex gap-4 container px-10">
							<Link to="/dashboard/blog-list" className="btn btn-dash">Your Blogs</Link>
							<Link to="/dashboard/writeBlog" className="btn btn-outline btn-primary">Write a Blog</Link>
						</div>
					) : (<></>)}
				</div>
				<div className="mt-6 grid grid-cols-1 lg:grid-cols-3 pb-10 px-10 gap-6 container mx-auto">

					{ApprovedBlogList.length === 0 ?
						<>
							<BlogSkeleton/>
							<BlogSkeleton/>
							<BlogSkeleton/>
							<BlogSkeleton/>
							<BlogSkeleton/>
							<BlogSkeleton/>
							<BlogSkeleton/>
							<BlogSkeleton/>
							<BlogSkeleton/>
						</>
						:
						ApprovedBlogList.map((blog) =>
							(
								<div key={blog?._id.toLocaleString()} className="card lg:card-side bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
									<figure className="lg:w-96 lg:h-84">
										<img
											src={blog['img']}
											alt="Album"/>
									</figure>
									<div className="card-body">
										<h2 className="card-title text-slate-900 dark:text-slate-100">{blog?.title.slice(0, 20)}</h2>
										<div
											className="mt-2 text-sm text-gray-700 dark:text-slate-400 leading-snug"
											dangerouslySetInnerHTML={{__html: blog?.des.slice(0, 50)}}
										/>
										<p></p>
										<div className="card-actions justify-end">
											<Link to={`/blogs/${blog?._id}`} className="btn btn-outline btn-info dark:border-slate-600 dark:text-slate-300">See Details</Link>
										</div>
									</div>
								</div>
							)
						)
					}
				</div>
			</div>

		</Layout>
	);
};

export default BlogPage;