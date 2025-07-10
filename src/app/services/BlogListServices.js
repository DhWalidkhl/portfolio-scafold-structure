import BlogModel from "../models/BlogModel.js";
import mongoose from "mongoose";


const ObjectID = mongoose.Types.ObjectId;

export const BlogListServices = async (req) => {
	try {
		const data = await BlogModel.find().sort({createdAt: -1})
		return {status: 'success', data: data}
	} catch (e) {
		return {status: 'fail', message: e.toString()}
	}
}



export const BlogListByUserServices = async (req) => {
	try {
		const user_id = req.headers['user_id']
		const userID = new ObjectID(user_id);
		const MatchStage = {$match: {userID: userID}};
		const JoinWithUserStage = {$lookup: {from: "users", localField: "userID", foreignField: "_id", as: "user"}}
		const UnwindUser = {$unwind: "$user"};
		const ProjectionStage = { $project: {'user._id':0, 'user.password':0, 'user.otp':0, 'user.role':0, 'user.createdAt':0, 'user.updatedAt':0}}
		const data = await BlogModel.aggregate([
			MatchStage, JoinWithUserStage, UnwindUser, ProjectionStage
		])
		return {status: 'success', data: data}
	} catch (e) {
		return {status: 'fail', message: e.toString()}
	}
}


export const CreateBlogService = async (req) => {
	try {
		const user_id = req.headers['user_id'];
		if (!user_id || !mongoose.Types.ObjectId.isValid(user_id)) {
			return { status: 'fail', message: 'Invalid or missing user_id' };
		}
		const userID = new mongoose.Types.ObjectId(user_id);

		const { title, img, des, liveLink, githubLink } = req.body;

		if (!title || !img || !des || !liveLink || !githubLink) {
			return { status: 'fail', message: 'Missing required fields' };
		}

		const reqBody = {
			title,
			img,
			des,
			liveLink,
			githubLink,
			userID
		};

		const data = await BlogModel.updateOne(
			{ title: title },
			{ $set: reqBody },
			{ upsert: true }
		);

		return { status: 'success', data: data };
	} catch (e) {
		console.error('CreateBlogService error:', e);
		return { status: 'fail', message: e.message };
	}
};



