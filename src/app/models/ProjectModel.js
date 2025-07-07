import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
	{
		title: {type: String, required: true},
		img: {type: String, required: true},
		des: {type: String, required: true},
		githubLink: {type: String, required: true},
		liveLink: {type: String, required: true},
	},
	{
		timestamps: true,
		versionKey: false
	}
)

const ProjectModel = mongoose.model('projects', DataSchema)
export default ProjectModel