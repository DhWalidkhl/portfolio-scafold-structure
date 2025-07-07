import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
	{
		userID: {type: mongoose.Schema.Types.ObjectId, required: true},
		msg: {type: String, required: true},
	},
	{
		timestamps: true,
		versionKey: false
	}
)

const ContactMessageModel = mongoose.model('contactmessage', DataSchema)
export default ContactMessageModel