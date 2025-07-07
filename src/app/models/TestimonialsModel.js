import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
	{
		userID: {type: mongoose.Schema.Types.ObjectId, required: true},
		des:{type: String, required: true},
		rating: {type: String, required: true}
	},
	{
		timestamps: true,
		versionKey: false
	}
)

const TestimonialsModel = mongoose.model('testimonials', DataSchema)
export default TestimonialsModel