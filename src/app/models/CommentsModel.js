import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
	{
		userID: {type: mongoose.Schema.Types.ObjectId, required: true},
		blogID: {type: mongoose.Schema.Types.ObjectId, required: true},
		des: {type: String, required: true},
	},
	{
		timestamps: true,
		versionKey: false
	}
)

const CommentsModel = mongoose.model('comments', DataSchema)
export default CommentsModel