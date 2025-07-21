import * as ProjectListServices from "../services/ProjectListServices.js"


export const ProjectsList = async (req, res) => {
	const result = await ProjectListServices.ProjectsListServices(req)
	return res.status(200).send(result)
}


export const ProjectDetails = async (req, res) => {
	const result = await ProjectListServices.ProjectDetailsService(req)
	return res.status(200).send(result)
}

export const UploadProject = async (req, res) => {
	const result = await ProjectListServices.UploadProjectServices(req)
	return res.status(200).send(result)
}