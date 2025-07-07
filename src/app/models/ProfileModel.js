import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
	{
		img: {type: String, required: true},
		firstName: {type: String, required: true},
		LastName: {type: Date, required: true},
		address: {type: Date, required: true},
		mobile: {type: Date, required: true},
	},
	{
		timestamps: true,
		versionKey: false
	}
)

const ProfileModel = mongoose.model('profiles', DataSchema)
export default ProfileModel