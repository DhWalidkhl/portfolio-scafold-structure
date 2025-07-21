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


export const BlogDetailsService = async (req) => {
	try {
		const { BlogID } = req.params;

		if (!BlogID || !mongoose.Types.ObjectId.isValid(BlogID)) {
			return { status: 'fail', message: 'Invalid or missing BlogID' };
		}

		const blogObjectID = new mongoose.Types.ObjectId(BlogID);

		const data = await BlogModel.aggregate([
			{ $match: { _id: blogObjectID } },
			{
				$lookup: {
					from: "users",
					localField: "userID",
					foreignField: "_id",
					as: "user"
				}
			},
			{ $unwind: "$user" },
			{
				$project: {
					"user.password": 0,
					"user.otp": 0,
					"user.role": 0,
					"user.createdAt": 0,
					"user.updatedAt": 0,
					"userID": 0,
				}
			}
		]);

		if (!data || data.length === 0) {
			return { status: 'fail', message: 'No blog found with this ID' };
		}

		return { status: 'success', data: data[0] };
	} catch (e) {
		console.error("BlogDetailsService Error:", e);
		return { status: 'fail', message: e.message };
	}
};

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


export const DeleteBlogService = async (req) => {
	try {
		const { BlogID } = req.params;

		if (!BlogID) {
			return { status: 'fail', message: "BlogID is required" };
		}

		const result = await BlogModel.deleteOne({ _id: BlogID });

		if (result.deletedCount === 0) {
			return { status: 'fail', message: "No blog found with this ID" };
		}

		return { status: 'success', data: "Blog Deleted Successfully" };

	} catch (error) {
		console.error("DeleteBlogService Error:", error);
		return { status: 'fail', message: "Something went wrong" };
	}
};