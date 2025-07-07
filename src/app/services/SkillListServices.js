import SkillsModel from "../models/SkillsModel.js";


export const SkillListServices = async (req) => {
	try {
		const data = await SkillsModel.find()
		return {status: 'success', data: data}
	} catch (e) {
		return {status: 'fail', message: e.toString()}
	}
}


export const UploadSkillServices = async (req) => {
	try {
		const skillName = req.body.skillName?.trim();
		const proficiency = req.body.proficiency?.trim();
		if(!skillName || !proficiency){
			return {status: 'fail', message: "Please provide Skillname and Proficiency"}
		}

		const data = await SkillsModel.updateOne({skillName: skillName}, {$set: {proficiency: proficiency}}, {upsert: true})
		return {status: 'success', data: data}
	} catch (e) {
		return {status: 'fail', message: e.toString()}
	}
}