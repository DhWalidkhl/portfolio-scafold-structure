import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import blogStore from "../../store/blogStore.js";
import Layout from "../../layout/Layout.jsx";
import { AiFillLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa6";
import UserStore from "../../store/userStore.js";
import { AiOutlineLike } from "react-icons/ai";

const BlogDetailPage = () => {
	const { BlogID } = useParams();
	const { SingleBlog, BlogDetailsRequest, TotalLikesRequest, TotalLikes, GetCommentsByBlogRequest, CommentsByBlog, CreateCommentRequest, AddLikeRequest } = blogStore();
	const {isLogin, UserProfile, ProfileDetailsByID, LoginFormOnChange, LoginFormData} = UserStore()
	const [hasLiked, setHasLiked] = useState(false);

	useEffect(() => {
		if (BlogID) {
			BlogDetailsRequest(BlogID);
			TotalLikesRequest(BlogID);
			GetCommentsByBlogRequest(BlogID)
			ProfileDetailsByID()
		}
	}, [BlogID]);



	if (!SingleBlog) {
		return (
			<Layout>
				<div className="mt-20 text-center">Loading blog details...</div>
			</Layout>
		);
	}

	const handleCommentSubmit = async (e) => {
		e.preventDefault();

		if (!LoginFormData.commentData?.trim()) return;

		const success = await CreateCommentRequest(BlogID, { text: LoginFormData.commentData });

		if (success) {
			GetCommentsByBlogRequest(BlogID)
			LoginFormOnChange("commentData", "");
		}
	};

	const handleLike = async () => {
		if (!isLogin()) return alert("Please log in to like.");
		if (hasLiked) return;

		const res = await AddLikeRequest(BlogID);

		if (res?.status === "success") {
			setHasLiked(true); // Set as liked
			await TotalLikesRequest(BlogID);
		} else if (res?.status === "alreadyLiked") {
			setHasLiked(true); // Already liked earlier
		}
	};



	const createdAt = new Date(SingleBlog.createdAt).toLocaleDateString();
	const updatedAt = new Date(SingleBlog.updatedAt).toLocaleDateString();


	return (
		<Layout>
			<div className="mt-30 container mx-auto px-5">
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

					<div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-8">

						<div className="space-y-6 text-center">
							<div className="flex flex-col items-center gap-1">
								<AiFillLike
									className="text-3xl text-blue-500 hover:scale-110 transition-transform duration-200"/>
								<p className="text-sm text-gray-600 font-semibold">{TotalLikes}</p>
							</div>
							<div className="flex flex-col items-center gap-1">
								<FaCommentDots
									className="text-3xl text-green-500 hover:scale-110 transition-transform duration-200"/>
								<p className="text-sm text-gray-600 font-semibold">{CommentsByBlog.length}</p>
							</div>
						</div>

						{/* Blog Image */}
						<img
							src={SingleBlog.img}
							alt={SingleBlog.title}
							className="w-full md:w-1/2 max-h-[70vh] rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
						/>
					</div>


					<div
						className="mt-6 leading-relaxed"
						dangerouslySetInnerHTML={{__html: SingleBlog.des}}
					/>
					<div className="flex gap-4 mt-6">
						<button onClick={handleLike} disabled={hasLiked}
						        title={hasLiked ? "Already liked" : "Like this blog"}>
							{hasLiked ? (
								<AiFillLike className="text-3xl text-blue-500 cursor-not-allowed"/>
							) : (
								<AiOutlineLike
									className="text-3xl hover:scale-110 transition-transform duration-200 text-gray-600"/>
							)}
						</button>

						<a href={SingleBlog.liveLink} target="_blank" className="btn btn-sm btn-primary">Live</a>
						<a href={SingleBlog.githubLink} target="_blank" className="btn btn-sm btn-outline">GitHub</a>
					</div>
				</div>

				<div className="mt-4 text-sm">
					<p className="mb-2">comments</p>
					{CommentsByBlog && CommentsByBlog.length > 0 ? (
						CommentsByBlog.map((comment) => (
							<div key={comment._id} className="px-3">
								<p className="text-sm text-gray-800">{comment.text}</p>
								<p className="text-xs text-gray-500 mt-1">
									By: {comment.user?.firstName ?? "Anonymous"}
								</p>
							</div>
						))
					) : (
						<p className="text-sm text-gray-500">No comments yet.</p>
					)}
				</div>
				<div className="mt-6">
					{isLogin() && (
						<div className="flex items-center gap-4 p-4 rounded-xl">
							{/* Profile Image + Name */}
							<div className="flex flex-col items-center w-16">
								<img
									className="w-10 h-10 rounded-full object-cover border border-gray-300"
									src={UserProfile.img}
									alt="User"
								/>
							</div>

							{/* Input Field */}
							<form onSubmit={handleCommentSubmit} className="flex gap-5 w-full">
								<input
									type="text"
									value={LoginFormData.commentData || ""}
									placeholder="Write a comment..."
									className="flex-1 w-full px-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 bg-white"
									onChange={(e) => {
										LoginFormOnChange("commentData", e.target.value)
									}}
								/>
								<button>submit</button>
							</form>
						</div>
					)}
				</div>

			</div>
		</Layout>
	);
};

export default BlogDetailPage;
