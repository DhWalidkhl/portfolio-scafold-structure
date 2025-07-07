import CourseModel from "../models/CourseModel.js";


export const CourseListService = async ()=>{
	try {
		const data = await CourseModel.find()
		return {status: 'success', data: data}
	} catch (e) {
		return {status: 'fail', message: "something went wrong"}
	}
}


export const CreateCourseService = async (req)=>{
	try {
		const reqBody = req.body
		const data = await CourseModel.create(reqBody)
		return {status: 'success', data: data}
	} catch (e) {
		return {status: 'fail', message: "something went wrong"}
	}
}

export const UpdateCourseService = async (req)=>{
	try {
		const CourseID = req.params.CourseID;
		const data = await CourseModel.updateOne({_id: CourseID}, {$set: req.body})
		return {status: 'success', data: data}
	} catch (e) {
		return {status: 'fail', message: "something went wrong"}
	}
}


export const DeleteCourseService = async (req)=>{
	try {
		const CourseID = req.params.CourseID
		await CourseModel.deleteOne({_id: CourseID})
		return {status: 'success', data: "Course Deleted Successfully"}
	} catch (e) {
		return {status: 'fail', message: "something went wrong"}
	}
}