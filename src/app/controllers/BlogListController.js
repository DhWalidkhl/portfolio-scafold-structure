import * as BlogListServices from "../services/BlogListServices.js"
import {BlogDetailsService, CreateCommentService, GetCommentsByBlogService} from "../services/BlogListServices.js";


export const ApprovedBlogList = async (req, res) => {
    const result = await BlogListServices.ApprovedBlogListService(req)
    return res.status(200).send(result)
}

export const PendingBlogList = async (req, res) => {
    const result = await BlogListServices.PendingBlogListService(req)
    return res.status(200).send(result)
}

export const ApproveBlogListByUser = async (req, res) => {
	const result = await BlogListServices.ApproveBlogListByUserServices(req)
	return res.status(200).send(result)
}

export const PendingBlogListByUser = async (req, res) => {
    const result = await BlogListServices.PendingBlogListByUserServices(req)
    return res.status(200).send(result)
}

export const BlogDetails = async (req, res) => {
	const result = await BlogListServices.BlogDetailsService(req)
	return res.status(200).send(result)
}

export const SeachByKeyword = async (req, res) => {
	const result = await BlogListServices.SeachByKeywordService(req)
	return res.status(200).send(result)
}

export const CreateBlog = async (req, res) => {
	const result = await BlogListServices.CreateBlogService(req)
	return res.status(200).send(result)
}

export const ApproveBlog = async (req, res) => {
    const result = await BlogListServices.ApproveBlogService(req)
    return res.status(200).send(result)
}

export const AddLike = async (req, res) => {
	const result = await BlogListServices.AddLikeService(req)
	return res.status(200).send(result)
}

export const CountLike = async (req, res) => {
	const result = await BlogListServices.CountLikeService(req)
	return res.status(200).send(result)
}

export const CreateComment = async (req, res) => {
	const result = await BlogListServices.CreateCommentService(req)
	return res.status(200).send(result)
}

export const GetCommentsByBlog = async (req, res) => {
	const result = await BlogListServices.GetCommentsByBlogService(req)
	return res.status(200).send(result)
}

export const DeleteBlog = async (req, res) => {
	const result = await BlogListServices.DeleteBlogService(req)
	return res.status(200).send(result)
}

export const DeleteBlogByUser = async (req, res) => {
	const result = await BlogListServices.DeleteBlogByUserServices(req)
	return res.status(200).send(result)
}