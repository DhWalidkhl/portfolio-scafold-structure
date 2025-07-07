import ContactMessageModel from "../models/ContactMessageModel.js";
import mongoose from "mongoose";

const ObjectID = mongoose.Types.ObjectId;

export const ContactMassegeListService = async (req)=>{
	try {
		const data = await ContactMessageModel.find()
		return {status: 'success', data: data}
	} catch (e) {
		return {status: 'fail', message: e.toString()}
	}
}

export const MassegeListByUserService = async (req)=>{
	try {
		const user_id = req.headers['user_id']
		const userID = new ObjectID(user_id);
		const MatchStage = {$match: {userID: userID}};
		const JoinWithUserStage = {$lookup: {from: "users", localField: "userID", foreignField: "_id", as: "user"}}
		const UnwindUser = {$unwind: "$user"};
		const ProjectionStage = { $project: {'user._id':0, 'user.password':0, 'user.address': 0, 'user.otp':0, 'user.role':0, 'user.createdAt':0, 'user.updatedAt':0}}
		const data = await ContactMessageModel.aggregate([
			MatchStage, JoinWithUserStage, UnwindUser, ProjectionStage
		])
		return {status: 'success', data: data}
	} catch (e) {
		return {status: 'fail', message: e.toString()}
	}
}



export const SendMessageService = async (req)=>{
	try {
		const user_id = req.headers['user_id']
		const userID = new ObjectID(user_id)
		let reqBody = req.body
		reqBody.userID = userID;
		const data = await ContactMessageModel.create(reqBody)
		return {status: 'success', data: data}
	} catch (e) {
		return {status: 'fail', message: "something went wrong"}
	}
}