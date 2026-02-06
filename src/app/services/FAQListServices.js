import FAQModel from "../models/FAQModel.js";
import mongoose from "mongoose";


export const FAQListService = async (req) => {
	try {
		const data = await FAQModel.find().sort({createdAt: -1})
		return {status: 'success', data: data}
	} catch (e) {
		return {status: 'fail', message: e.toString()}
	}
}


export const CreateFAQService = async (req) => {
	try {
		const {qstn, ans} = req.body;
		if (!qstn || !ans) {
			return {
				status: 'fail',
				message: 'Both question (qstn) and answer (ans) are required.'
			};
		}
		const data = await FAQModel.create({qstn, ans});
		return {status: 'success', data: data};
	} catch (e) {
		console.error(e);
		let message = 'Something went wrong';

		if (e.code === 11000 && e.keyPattern?.qstn) {
			message = 'A FAQ with this question already exists.';
		}
		return {status: 'fail', message};
	}
};


export const UpdateFAQService = async (req) => {
	try {
		const FAQId = req.params.FAQId;
		const {qstn, ans} = req.body;
		if (!qstn || !ans) {
			return {status: 'fail', message: 'Data required to update.'};
		}
		const data = await FAQModel.updateOne({_id: FAQId}, {$set: {ans: ans, qstn: qstn}});
		return {status: 'success', data: data}
	} catch (e) {
		return {status: 'fail', message: "something went wrong"}
	}
}

export const FaqDetailsService = async (req) => {
    try {
        const FAQId = req.params.FAQId;
        if (!FAQId || !mongoose.Types.ObjectId.isValid(FAQId)) {
            return { status: 'fail', message: 'Invalid or missing FAQId' };
        }
        const data = await FAQModel.findById(FAQId);
        return {status: 'success', data: data}
    }catch (e) {
        console.error(e);
        return {status: 'fail', message: 'Something went wrong.'};
    }
}

export const DeleteFAQService = async (req) => {
	try {
		const FAQId = req.params.FAQId;

		if (!FAQId) {
			return {status: 'fail', message: 'FAQ ID is required.'};
		}

		const result = await FAQModel.deleteOne({_id: FAQId});

		if (result.deletedCount === 0) {
			return {status: 'fail', message: 'No FAQ found with the provided ID.'};
		}

		return {status: 'success', message: 'FAQ deleted successfully.'};
	} catch (e) {
		console.error(e);
		return {status: 'fail', message: 'Something went wrong.'};
	}
};








