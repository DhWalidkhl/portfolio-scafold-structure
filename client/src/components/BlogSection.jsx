import React, {useEffect, useState} from 'react';
import BlogSkeleton from "../skeleton/BlogSkeleton.jsx";
import {Link} from "react-router-dom";
import BlogStore from "../store/blogStore.js";
import {LiaLongArrowAltRightSolid} from "react-icons/lia";
import {blogList} from "../APIRequest/APIRequest.js";

const BlogSection = () => {

	const [blogs, setBlogs] = useState([])
	useEffect( () => {
		( async () => {
			let res = await blogList()
			setBlogs(res.data)
		})()
	}, [blogs]);


	return (
		<div className="py-20">
			<h1 className="text-sky-700 text-center font-semibold text-4xl">Blog and News</h1>
			<div className="mt-10 grid grid-cols-1 lg:grid-cols-2 px-10 gap-6 container mx-auto">

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
									<p>{blog.des.slice(0, 200)}</p>
									<div className="card-actions justify-end">
										<button className="btn btn-dash btn-info">See Details</button>
									</div>
								</div>
							</div>

						)
					)
				}
			</div>
			<div>
				{
					blogs.length > 4 ? <Link className="flex items-center justify-center mt-10 btn btn-outline btn-info w-1/2 lg:w-1/7 mx-auto" to="/blogs">See All Blogs <span><LiaLongArrowAltRightSolid/></span></Link> : <></>
				}
			</div>
		</div>
	);
};

export default BlogSection;