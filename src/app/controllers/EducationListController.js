import * as EducationListServices from "../services/EducationListServices.js";
import {CreateEducationService} from "../services/EducationListServices.js";

export const EducationList = async (req, res) => {
	const result = await EducationListServices.EducationListService()
	return res.status(200).send(result)
}

export const CreateEducation = async (req, res) => {
	const result = await EducationListServices.CreateEducationService(req)
	return res.status(200).send(result)
}

export const UpdateEducation = async (req, res) => {
	const result = await EducationListServices.UpdateEducationService(req)
	return res.status(200).send(result)
}

export const DeleteEducation = async (req, res) => {
	const result = await EducationListServices.DeleteEducationService(req)
	return res.status(200).send(result)
}