import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
	{
		degree: {type: String, required: true},
		subject: {type: String, required: true},
		university: {type: String, required: true},
		des: {type: String, required: true},
		startingYear: {type: String, required: true},
		endingYear: {type: String, required: true},
	},
	{
		timestamps: true,
		versionKey: false
	}
)

const EducationModel = mongoose.model('educations', DataSchema)
export default EducationModel