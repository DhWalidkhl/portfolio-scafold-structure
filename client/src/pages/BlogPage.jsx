import React, {useEffect} from 'react';
import Layout from "../layout/Layout.jsx";
import BlogSkeleton from "../skeleton/BlogSkeleton.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import UserStore from "../store/userStore.js";
import {Link} from "react-router-dom";
import BlogStore from "../store/blogStore.js";

const BlogPage = () => {
	let {isLogin} = UserStore()
	let {BlogList, BlogListRequest} = BlogStore()
	useEffect( () => {
		( async () => {
			await BlogListRequest()
		})()
	}, []);

	console.log(BlogList)

	return (
		<Layout>
<div className="pt-16">
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

		{BlogList.length === 0 ?
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
			BlogList.map((blog) =>
				(
					<div key={blog._id.toLocaleString()} className="card lg:card-side bg-base-100 shadow-sm">
						<figure className="w-64">
							<img
								src={blog['img']}
								alt="Album"/>
						</figure>
						<div className="card-body">
							<h2 className="card-title">{blog['title']}</h2>
							<div
								className="mt-2 text-sm text-gray-700 leading-snug"
								dangerouslySetInnerHTML={{__html: blog.des.slice(0, 200)}}
							/>
							<p></p>
							<div className="card-actions justify-end">
								<Link to={`/blogs/${blog._id}`} className="btn btn-outline btn-info">See Details</Link>
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