import * as UserServices from "../services/UserServices.js"
import {DeleteUserServices, UserListByIDServices} from "../services/UserServices.js";


export const UserRegister = async (req, res) =>{
	const result = await UserServices.UserRegisterServices(req)
	return res.status(200).send(result)
}

export const VerifyOTP = async (req, res) => {
	const result = await UserServices.VerifyOTPServices(req)

	if (result['status'] === "success") {
		const cookieOptions = {
			expires: new Date(Date.now() + 24 * 6060 * 1000), httpOnly: true,  credentials: true,  secure: true, sameSite: "none"
		}
		res.cookie('token', result['token'], cookieOptions)
		return res.status(200).send(result)
	}else {
		return res.status(400).json(result)
	}
}

export const UserLogin = async (req, res) =>{
	const result = await UserServices.UserLoginServices(req)
	if (result['status'] === "success") {
		const cookieOptions = {
			expires: new Date(Date.now() + 24 * 60 * 60 * 1000), httpOnly: false
		}
		res.cookie('token', result['token'], cookieOptions)
		return res.status(200).send(result)
	}
}

export const UserLogout = async (req, res) => {
	const cookieOptions = {
		expires: new Date(Date.now() - 24 * 6060 * 1000), httpOnly: false,
	}
	res.cookie('token', "", cookieOptions)
	return res.status(200).send({status: "success"})
}


export const UserList = async (req, res) =>{
	const result = await UserServices.UserListServices()
	return res.status(200).send(result)
}


export const UserListByID = async (req, res) =>{
	const result = await UserServices.UserListByIDServices(req)
	return res.status(200).send(result)
}


export const UpdateUserProfile = async (req, res) =>{
	const result = await UserServices.UpdateUserProfileServices(req)
	return res.status(200).send(result)
}




export const DeleteUser = async (req, res) =>{
	const result = await UserServices.DeleteUserServices(req)
	return res.status(200).send(result)
}

