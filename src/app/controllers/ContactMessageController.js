import * as ContactMessageServices from "../services/ContactMessageServices.js";

export const ContactMessageList = async (req, res) => {
	const result = await ContactMessageServices.ContactMassegeListService(req)
	return res.status(200).send(result)
}


export const SendMessage = async (req, res) => {
	const result = await ContactMessageServices.SendMessageService(req)
	return res.status(200).send(result)
}


export const ReplyMessage = async (req, res) => {
    const result = await ContactMessageServices.ReplyMessageService(req)
    return res.status(200).send(result)
}


export const MassegeListByUser = async (req, res) =>{
	const result = await ContactMessageServices.MassegeListByUserService(req)
	return res.status(200).send(result)
}