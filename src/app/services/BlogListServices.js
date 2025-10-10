import BlogModel from "../models/BlogModel.js";
import mongoose from "mongoose";
import LikeModel from "../models/LikeModel.js";
import CommentModel from "../models/CommentModel.js";
import path from "path";


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


export const DeleteBlogByUserServices = async (req) => {
	try {
		const user_id = req.headers['user_id']
		const userID = new ObjectID(user_id);
		const BlogID = req.params.BlogID
		if (!mongoose.Types.ObjectId.isValid(userID) || !mongoose.Types.ObjectId.isValid(BlogID)) {
			return { status: 'fail', message: 'Invalid user or blog ID' };
		}
		const userObjectId = new mongoose.Types.ObjectId(userID);
		const blogObjectId = new mongoose.Types.ObjectId(BlogID);
		const deleteResult = await BlogModel.deleteOne({
			_id: blogObjectId,
			userID: userObjectId
		});

		if (deleteResult.deletedCount === 0) {
			return { status: 'fail', message: 'No matching blog found or you are not authorized to delete it.' };
		}

		return {status: 'success',	message: 'Blog deleted successfully.'};

	} catch (e) {
		return {status: 'fail', message: e.toString()}
	}
}


export const BlogDetailsService = async (req) => {
	try {
		const { BlogID } = req.params;
        const blogObjectID = new mongoose.Types.ObjectId(BlogID);

		if (!BlogID || !blogObjectID) {
			return { status: 'fail', message: 'Invalid or missing BlogID' };
		}



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
			{ $unwind: {path: "$user", preserveNullAndEmptyArrays: true} },
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

export const AddLikeService = async (req) => {
	try {
		const user_id = req.headers['user_id'];
		const { BlogID } = req.params;

		if (!user_id || !ObjectID.isValid(user_id) || !ObjectID.isValid(BlogID)) {
			return { status: "fail", message: "Invalid userID or BlogID" };
		}
		const userID = new mongoose.Types.ObjectId(user_id);
		const blogID = new mongoose.Types.ObjectId(BlogID);



		const LikeData = { userID: userID, blogID: blogID };


		const data = await LikeModel.updateOne(
			{ userID: new ObjectID(user_id), blogID: new ObjectID(BlogID) },
			{ $setOnInsert: LikeData },
			{ upsert: true }
		);
		if (result.upsertedCount === 0) {
			return { status: 'Liked', message: "User has already liked this blog." };
		}

		return { status: 'success', message: "Blog liked successfully", data: data };
	} catch (e) {
		return { status: 'fail', message: e.message };
	}
};

export const CountLikeService = async (req) => {
	try {
		const { BlogID } = req.params;

		if ( !ObjectID.isValid(BlogID)) {
			return { status: "fail", message: "Invalid BlogID" };
		}
		const blogID = new mongoose.Types.ObjectId(BlogID);

		const totalLikes = await LikeModel.countDocuments({ blogID });

		return { status: 'success', totalLikes: totalLikes };
	} catch (e) {
		return { status: 'fail', message: e.message };
	}
};

export const CreateCommentService = async (req) => {
	try {
		const user_id = req.headers['user_id'];
		const { BlogID } = req.params;
		const { text } = req.body;

		if (!user_id || !ObjectID.isValid(user_id) || !ObjectID.isValid(BlogID) || !text) {
			return { status: "fail", message: "Invalid input" };
		}

		const comment = await CommentModel.create({
			userID: new ObjectID(user_id),
			blogID: new ObjectID(BlogID),
			text
		});

		return { status: "success", message: "Comment created", data: comment };
	} catch (e) {
		return { status: "fail", message: e.message };
	}
};

export const GetCommentsByBlogService = async (req) => {
	try {
		const { BlogID } = req.params;

		if (!BlogID || !ObjectID.isValid(BlogID)) {
			return { status: "fail", message: "Invalid BlogID" };
		}

		const data = await CommentModel.aggregate([
			{ $match: { blogID: new ObjectID(BlogID) } },
			{ $lookup: { from: "users",	localField: "userID", foreignField: "_id", as: "user" }
			},
			{ $unwind: "$user" },
			{ $project: {"user.password": 0, "user.otp": 0,	"user.role": 0,	"user.createdAt": 0, "user.updatedAt": 0 }},
			{ $sort: { createdAt: -1 } }
		]);

		return { status: "success", data: data };
	} catch (e) {
		return { status: "fail", message: e.message };
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