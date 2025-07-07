import * as CourseListServices from "../services/CourseListServices.js";

export const CourseList = async (req, res) => {
	const result = await CourseListServices.CourseListService()
	return res.status(200).send(result)
}

export const CreateCourse = async (req, res) => {
	const result = await CourseListServices.CreateCourseService(req)
	return res.status(200).send(result)
}

export const UpdateCourse = async (req, res) => {
	const result = await CourseListServices.UpdateCourseService(req)
	return res.status(200).send(result)
}

export const DeleteCourse = async (req, res) => {
	const result = await CourseListServices.DeleteCourseService(req)
	return res.status(200).send(result)
}