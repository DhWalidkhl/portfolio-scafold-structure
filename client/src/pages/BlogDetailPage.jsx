import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import blogStore from "../store/blogStore.js";
import Layout from "../layout/Layout.jsx";

const BlogDetailPage = () => {
	const { BlogID } = useParams();
	const { SingleBlog, BlogDetailsRequest } = blogStore();

	useEffect(() => {
		if (BlogID) {
			BlogDetailsRequest(BlogID);
		}
	}, [BlogID]);

	if (!SingleBlog) {
		return (
			<Layout>
				<div className="mt-20 text-center">Loading blog details...</div>
			</Layout>
		);
	}

	const createdAt = new Date(SingleBlog.createdAt).toLocaleDateString();
	const updatedAt = new Date(SingleBlog.updatedAt).toLocaleDateString();

	return (
		<Layout>
			<div className="mt-20 container mx-auto px-5">
				<div className="space-y-3 mx-auto">
					<div className="lg:flex lg:justify-between items-start gap-4 flex-wrap">
						<h1 className="text-3xl font-bold">{SingleBlog.title}</h1>
						<div>
							<p className="text-sm text-gray-500">
								Written by {SingleBlog.user?.firstName} {SingleBlog.user?.lastName}
							</p>
							<p className="text-xs text-gray-400">Published on {createdAt}</p>
							<p className="text-xs text-gray-400">Updated on {updatedAt}</p>
						</div>
					</div>
					<img src={SingleBlog.img} alt={SingleBlog.title} className="w-full max-h-screen mt-4 rounded"/>
					<div
						className="mt-6 leading-relaxed"
						dangerouslySetInnerHTML={{__html: SingleBlog.des}}
					/>
					<div className="flex gap-4 mt-6">
						<a href={SingleBlog.liveLink} target="_blank" className="btn btn-sm btn-primary">Live</a>
						<a href={SingleBlog.githubLink} target="_blank" className="btn btn-sm btn-outline">GitHub</a>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default BlogDetailPage;
