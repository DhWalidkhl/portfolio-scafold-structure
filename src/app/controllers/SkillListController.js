import * as SkillListServices from "../services/SkillListServices.js"


export const SkillList = async (req, res) => {
	const result = await SkillListServices.SkillListServices(req)
	return res.status(200).send(result)
}


export const UploadSkill = async (req, res) => {
	const result = await SkillListServices.UploadSkillServices(req)
	return res.status(200).send(result)
}
