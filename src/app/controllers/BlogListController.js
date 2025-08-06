import * as BlogListServices from "../services/BlogListServices.js"
import {BlogDetailsService} from "../services/BlogListServices.js";


export const BlogList = async (req, res) => {
	const result = await BlogListServices.BlogListServices(req)
	return res.status(200).send(result)
}

export const BlogListByUser = async (req, res) => {
	const result = await BlogListServices.BlogListByUserServices(req)
	return res.status(200).send(result)
}

export const BlogDetails = async (req, res) => {
	const result = await BlogListServices.BlogDetailsService(req)
	return res.status(200).send(result)
}

export const CreateBlog = async (req, res) => {
	const result = await BlogListServices.CreateBlogService(req)
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

export const DeleteBlog = async (req, res) => {
	const result = await BlogListServices.DeleteBlogService(req)
	return res.status(200).send(result)
}

export const DeleteBlogByUser = async (req, res) => {
	const result = await BlogListServices.DeleteBlogByUserServices(req)
	return res.status(200).send(result)
}