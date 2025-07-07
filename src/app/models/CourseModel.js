import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
	{
		courseName: {type: String, required: true},
		instituteName: {type: String, required: true},
		startingDate: {type: Date, required: true},
		endingDate: {type: Date, required: true},
	},
	{
		timestamps: true,
		versionKey: false
	}
)

const CourseModel = mongoose.model('courses', DataSchema)
export default CourseModel