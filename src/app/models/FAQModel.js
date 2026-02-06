import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
	{
		qstn: {type: String, required: true},
		ans: {type: String, required: true}
	},
	{
		timestamps: true,
		versionKey: false
	}
)

const FAQModel = mongoose.model('faq', DataSchema)
export default FAQModel