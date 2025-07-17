import * as BlogListServices from "../services/BlogListServices.js"


export const BlogList = async (req, res) => {
	const result = await BlogListServices.BlogListServices(req)
	return res.status(200).send(result)
}

export const BlogListByUser = async (req, res) => {
	const result = await BlogListServices.BlogListByUserServices(req)
	return res.status(200).send(result)
}

export const CreateBlog = async (req, res) => {
	const result = await BlogListServices.CreateBlogService(req)
	return res.status(200).send(result)
}


export const DeleteBlog = async (req, res) => {
	const result = await BlogListServices.DeleteBlogService(req)
	return res.status(200).send(result)
}