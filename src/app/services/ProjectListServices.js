import ProjectModel from "../models/ProjectModel.js";


export const ProjectsListServices = async (req) => {
	try {
		const data = await ProjectModel.find()
		return {status: 'success', data: data}
	} catch (e) {
		return {status: 'fail', message: e.toString()}
	}
}


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