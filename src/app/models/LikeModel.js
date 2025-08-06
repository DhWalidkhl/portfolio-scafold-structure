import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
	{
		userID: {type: mongoose.Schema.Types.ObjectId, required: true},
		blogID: {type: mongoose.Schema.Types.ObjectId, required: true}
	},
	{
		timestamps: true,
		versionKey: false
	}
)

DataSchema.index({ blogID: 1, userID: 1 }, { unique: true });

const LikeModel = mongoose.model('likes', DataSchema)
export default LikeModel