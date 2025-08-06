import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
	{
		userID: {type: mongoose.Schema.Types.ObjectId, required: true},
		blogID: {type: mongoose.Schema.Types.ObjectId, required: true},
		text: { type: String, required: true },
		replies: [
			{
				userID: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
				text: { type: String, required: true },
				createdAt: { type: Date, default: Date.now }
			}
		]
	},
	{
		timestamps: true,
		versionKey: false
	}
)

const CommentModel = mongoose.model('comments', DataSchema)
export default CommentModel