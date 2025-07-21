import ProjectModel from "../models/ProjectModel.js";
import mongoose from "mongoose";
import BlogModel from "../models/BlogModel.js";


export const ProjectsListServices = async (req) => {
	try {
		const data = await ProjectModel.find().sort({createdAt: -1})
		return {status: 'success', data: data}
	} catch (e) {
		return {status: 'fail', message: e.toString()}
	}
}


export const ProjectDetailsService = async (req) => {
	try {
		const { ProjectID } = req.params;

		if (!ProjectID || !mongoose.Types.ObjectId.isValid(ProjectID)) {
			return { status: 'fail', message: 'Invalid or missing ProjectID' };
		}

		const ProjectObjectID = new mongoose.Types.ObjectId(ProjectID);

		const data = await ProjectModel.aggregate([
			{ $match: { _id: ProjectObjectID } }
		]);

		if (!data || data.length === 0) {
			return { status: 'fail', message: 'No blog found with this ID' };
		}

		return { status: 'success', data: data[0] };
	} catch (e) {
		console.error("ProjectDetailsService Error:", e);
		return { status: 'fail', message: e.message };
	}
};


export const UploadProjectServices = async (req) => {
	try {
		const title = req.body.title?.trim();
		const img = req.body.img?.trim();
		const des = req.body.des?.trim();
		const githubLink = req.body.githubLink?.trim();
		const liveLink = req.body.liveLink?.trim();

		if(!title || !img || !des || !githubLink || !liveLink){
			return {status: 'fail', message: "Please fillup all fields"}
		}

		const data = await ProjectModel.updateOne({title: title}, {$set: {title: title, img: img, des:des, githubLink:githubLink, liveLink: liveLink}}, {upsert: true})
		return {status: 'success', data: data}
	} catch (e) {
		return {status: 'fail', message: e.toString()}
	}
}