import React, {useEffect, useState} from 'react';
import Layout from "../layout/Layout.jsx";
import {blogList} from "../APIRequest/APIRequest.js";
import BlogSkeleton from "../skeleton/BlogSkeleton.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import UserStore from "../store/userStore.js";
import {Link} from "react-router-dom";

const BlogPage = () => {
	let {isLogin} = UserStore()
	const [blogs, setBlogs] = useState([])
	useEffect(() => {
		( () => {
			let res =  blogList()
			setBlogs(res.data)
		})()
	}, []);

	return (
		<Layout>
			<SectionHeading headingBig='read my blog' headingSmall='My Latest Blog'/>
			<div className="container mx-auto">
				{isLogin() ? (
					<div className="flex gap-4">
						<Link to="/dashboard/blog-list" className="btn btn-dash">Your Blogs</Link>
						<button className="btn btn-outline btn-primary">Write a Blog</button>
					</div>
				) : (<></>)}
			</div>
			<div className="mt-6 grid grid-cols-3 gap-6 container mx-auto">

				{blogs.length === 0 ? <BlogSkeleton></BlogSkeleton> :
					blogs.map((blog) =>
						 (
							<div key={blog._id.toLocaleString()} className="card lg:card-side bg-base-100 shadow-sm">
								<figure>
									<img
										src={blog['img']}
										alt="Album"/>
								</figure>
								<div className="card-body">
									<h2 className="card-title">{blog['title']}</h2>
									<p>{blog['des']}</p>
									<div className="card-actions justify-end">
										<button className="btn btn-primary">See Details</button>
									</div>
								</div>
							</div>
						)
					)
				}
			</div>

		</Layout>
	);
};

export default BlogPage;