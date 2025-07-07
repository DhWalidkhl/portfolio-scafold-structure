import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
	{
		skillName: {type: String, unique: true, required: true},
		proficiency: {type: String, required: true, limit: 10}
	},
	{
		timestamps: true,
		versionKey: false
	}
)

const SkillsModel = mongoose.model('skills', DataSchema)
export default SkillsModel