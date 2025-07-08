import EmailSend from "../utilities/EmailUtility.js";
import UserModel from "../models/UserModel.js";
import bcrypt from "bcryptjs"
import {EncodeToken} from "../utilities/TokenUtility.js";

import mongoose from "mongoose";

const ObjectID = mongoose.Types.ObjectId;

export const UserRegisterServices = async (req) => {
	try {
		const {firstName, lastName, email, password, mobile, img} = req.body
		const code = Math.floor(100000 + Math.random() * 900000)
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);
		const hashedOTP = await bcrypt.hash(code.toString(), salt);
		const EmailText = `Your Verification Code is = ${code}`
		const EmailSubject = 'Email Verification code from Walid Portfolio'
		const totalUser = await UserModel.find()
		const findUser = await UserModel.findOne({email: email})
		if (findUser) {
			return {status: 'fail', message: `User Already Exist`}
		}
		let sentMail
		try {
			sentMail = await EmailSend(email, EmailText, EmailSubject)
		} catch (e) {
			return {status: 'fail', message: 'Failed to send OTP. Please try again.'};
		}
		if (!sentMail?.accepted?.includes(email)) {
			return {status: 'fail', message: `Please try again!!`}
		}
		await UserModel.create({img: img, firstName: firstName,lastName:lastName, email: email, role: totalUser.length === 0 ? "admin" : "user", password: hashedPassword, mobile:mobile, otp: hashedOTP})
		return {status: 'success', message: `Your 6 digit OTP has been sent to your ${email} email address`}

	} catch (e) {
		return {status: 'fail', message: e.toString()}
	}
}


export const VerifyOTPServices = async (req) => {
	try {
		const email = req.params.email;
		const otp = req.params.otp;
		let total = await UserModel.countDocuments({email: email})
		if (total === 1) {
			const findUser = await UserModel.findOne({email: email})
			const hash = findUser.otp;
			const checkOTP =  await bcrypt.compare(otp, hash)
			if(!checkOTP){
				return {status: 'fail', message: "Invalid OTP"}
			}
			const user_id = findUser._id.toString()
			const token = EncodeToken(email, user_id)
			await UserModel.updateOne({email: email}, {$set: {otp: "0"}})
			return {status: 'success', message: "Valid OTP", token: token}
		}
	} catch (e) {
		return {status: 'fail', message: e.toString()}
	}
}


export const UserLoginServices = async (req) => {
	try {
		const email = req.body.email;
		const password = req.body.password;
		const findUser = await UserModel.findOne({email: email, otp: "0"})
		const hash = findUser.password;
		const bcryptPassword = await bcrypt.compare(password, hash);
		if (!findUser || !bcryptPassword) {
			return {status: "fail", message: "Invalid email or password!!"}
		}
		const user_id = findUser._id.toString()
		const token = EncodeToken(email, user_id)
		return {status: "success", message: "User Login successfully.", token: token, role: findUser.role};
	} catch (e) {
		return {status: 'fail', message: e.toString()}
	}
}

export const UserListServices = async () =>{
	try {
		const data = await UserModel.aggregate([
			{ $project: {'password': 0, 'otp': 0}}
		])
		return {status: 'success', data: data}
	} catch (e) {
		return {status: 'fail', message: e.toString()}
	}
}


export const UpdateUserProfileServices = async (req) =>{
	try {
		const user_id = req.headers['user_id']
		const userID = new ObjectID(user_id);
		const {img, firstName, lastName, password, mobile, email} = req.body;
		if(email){
			return {status: "fail", message: "Email Cannot be Changed"}
		}
		let updatedData = {img: img, firstName: firstName, lastName: lastName, password: password, mobile: mobile}
		if(password){
			const salt = await bcrypt.genSalt(10);
			let hashedPassword = await bcrypt.hash(password, salt);
			updatedData.password = hashedPassword
		}

		const data = await UserModel.updateOne({_id: userID}, {$set: updatedData})
		return {status: 'success', data: data}
	} catch (e) {
		return {status: 'fail', message: e.toString()}
	}
}


export const UserListByIDServices = async (req) =>{
	try {
		const user_id = req.headers['user_id']
		const userID = new ObjectID(user_id);
		const data = await UserModel.findOne({_id: userID})
		return {status: 'success', data: data}
	} catch (e) {
		return {status: 'fail', message: e.toString()}
	}
}




export const DeleteUserServices = async (req) =>{
	try {
		const userID = req.params.userID
		const data = await UserModel.deleteOne({_id: userID})
		if(data.deletedCount === 0){
			return { status: 'fail', message: 'User not found' };
		}
		return {status: 'success', message: `User Deleted Successfully`}
	} catch (e) {
		return {status: 'fail', message: e.toString()}
	}
}