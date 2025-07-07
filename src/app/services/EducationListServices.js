import EducationModel from "../models/EducationModel.js";


export const EducationListService = async ()=>{
	try {
		const data = await EducationModel.find()
		return {status: 'success', data: data}
	} catch (e) {
		return {status: 'fail', message: "something went wrong"}
	}
}


export const CreateEducationService = async (req)=>{
	try {
		const reqBody = req.body;
		const data = await EducationModel.create(reqBody)
		return {status: 'success', data: data}
	} catch (e) {
		return {status: 'fail', message: "something went wrong"}
	}
}

export const UpdateEducationService = async (req)=>{
	try {
		const EduID = req.params.EduID;
		const reqBody = req.body;
		const data = await EducationModel.updateOne({_id : EduID}, {$set: reqBody})
		return {status: 'success', data: data}
	} catch (e) {
		return {status: 'fail', message: "something went wrong"}
	}
}


export const DeleteEducationService = async (req)=>{
	try {
		const EduID = req.params.EduID;
		await EducationModel.deleteOne({_id: EduID})
		return {status: 'success', message: "Education Deleted Successfuly."}
	} catch (e) {
		return {status: 'fail', message: "something went wrong"}
	}
}