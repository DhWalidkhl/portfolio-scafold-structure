import * as FAQListServices from "../services/FAQListServices.js";


export const FAQList = async (req, res) => {
	const result = await FAQListServices.FAQListService(req)
	return res.status(200).send(result)
}


export const CreateFAQ = async (req, res) => {
	const result = await FAQListServices.CreateFAQService(req)
	return res.status(200).send(result)
}


export const UpdateFAQ = async (req, res) => {
	const result = await FAQListServices.UpdateFAQService(req)
	return res.status(200).send(result)
}

export const FaqDetails = async (req, res) => {
    const result = await FAQListServices.FaqDetailsService(req)
    return res.status(200).send(result)
}

export const DeleteFAQ = async (req, res) => {
	const result = await FAQListServices.DeleteFAQService(req)
	return res.status(200).send(result)
}

