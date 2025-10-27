import ContactMessageModel from "../models/ContactMessageModel.js";
import mongoose from "mongoose";
import EmailSend from "../utilities/EmailUtility.js";

const ObjectID = mongoose.Types.ObjectId;

export const ContactMassegeListService = async (req)=>{
	try {
        const JoinWithUserStage = {$lookup: {from: "users", localField: "userID", foreignField: "_id", as: "sender"}}
        const UnwindUser = {
            $unwind: {
                path: "$sender",
                preserveNullAndEmptyArrays: true
            }
        };
        const ProjectionStage = { $project: {'sender._id':0, 'sender.password':0, 'sender.address': 0, 'sender.otp':0, 'sender.role':0, 'sender.createdAt':0, 'sender.updatedAt':0, 'sender.imagePublicId':0}}
        const SortStage = { $sort: { createdAt: -1 } };
		const data = await ContactMessageModel.aggregate([JoinWithUserStage, UnwindUser, ProjectionStage, SortStage])
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

export const ReplyMessageService = async (req)=>{
    try {
        let replyEmail = req.params.email;
        let {emailSubject, emailText} = req.body
        if(!replyEmail){
            return {status: 'fail', message: 'Please enter a valid email address'};
        }
        if (!emailSubject || !emailText) {
            return { status: 'fail', message: 'Email subject and text are required.' };
        }
        let sentMail
        try {
            sentMail = await EmailSend(replyEmail, emailText, emailSubject)
        } catch (e) {
            return {status: 'fail', message: 'Failed to reply. Please try again.'};
        }
        if (!sentMail?.accepted?.includes(replyEmail)) {
            return {status: 'fail', message: `Please try again!!`}
        }

        return {status: 'success', message: `Your reply sent to your ${replyEmail} email address`}

    } catch (e) {
        return {status: 'fail', message: e.toString()}
    }
}