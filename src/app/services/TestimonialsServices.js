import TestimonialsModel from "../models/TestimonialsModel.js";

import mongoose from "mongoose";

const ObjectID = mongoose.Types.ObjectId;

export const TestimonialsListServices = async (req) => {
    try {
        const SortStage = { $sort: { createdAt: -1 } };
        const JoinWithUserStage = {$lookup: {from: "users", localField: "userID", foreignField: "_id", as: "user"}}
        const UnwindUser = {$unwind: "$user"};
        const ProjectionStage = { $project: {'user._id':0, 'user.password':0, 'user.address': 0, 'user.otp':0, 'user.role':0, 'user.createdAt':0, 'user.updatedAt':0}}
        const data = await TestimonialsModel.aggregate([
            SortStage, JoinWithUserStage, UnwindUser, ProjectionStage
        ])
        return {status: 'success', data: data}
    } catch (e) {
        return {status: 'fail', message: e.toString()}
    }
}


export const TestimonialsListByUserServices = async (req) => {
    try {
	    const user_id = req.headers['user_id']
	    const userID = new ObjectID(user_id);
	    const MatchStage = {$match: {userID: userID}};
	    const JoinWithUserStage = {$lookup: {from: "users", localField: "userID", foreignField: "_id", as: "user"}}
	    const UnwindUser = {$unwind: "$user"};
	    const ProjectionStage = { $project: {'user._id':0, 'user.password':0, 'user.address': 0, 'user.otp':0, 'user.role':0, 'user.createdAt':0, 'user.updatedAt':0}}
		const data = await TestimonialsModel.aggregate([
			MatchStage, JoinWithUserStage, UnwindUser, ProjectionStage
		])
        return {status: 'success', data: data}
    } catch (e) {
        return {status: 'fail', message: e.toString()}
    }
}



export const CreateTestimonialServices = async (req) => {
    try {
	    const user_id = req.headers['user_id']
	    const userID = new ObjectID(user_id)
	    let reqBody = req.body
	    reqBody.userID = userID;
		const data = await TestimonialsModel.create(reqBody)
        return {status: 'success', data: data}
    } catch (e) {
        return {status: 'fail', message: e.toString()}
    }
}


export const UpdateTestimonialServices = async (req) => {
    try {
		const TestimonialID = req.params.TestimonialID;
		const data = await TestimonialsModel.updateOne({_id: TestimonialID}, {$set: req.body})
        return {status: 'success', data: data}
    } catch (e) {
        return {status: 'fail', message: e.toString()}
    }
}


export const DeleteTestimonialServices = async (req) => {
    try {
	    const TestimonialID = req.params.TestimonialID;
		await TestimonialsModel.deleteOne({_id: TestimonialID})
        return {status: 'success', data: "Testimonial Deleted Successfully."}
    } catch (e) {
        return {status: 'fail', message: e.toString()}
    }
}
