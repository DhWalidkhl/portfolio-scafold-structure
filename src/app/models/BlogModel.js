import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
	{
		title: {type: String, unique: true, required: true},
		img: {type: String, required: true},
		des: {type: String, required: true},
		liveLink: {type: String, required: true},
		githubLink: {type: String, required: true},
		userID: {type: mongoose.Schema.Types.ObjectId, required: true}
	},
	{
		timestamps: true,
		versionKey: false
	}
)

const BlogModel = mongoose.model('blogs', DataSchema)
export default BlogModel