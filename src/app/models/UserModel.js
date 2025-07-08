import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
	{
		img: {type: String, required: true},
		firstName: {type: String, required: true},
		lastName: {type: String, required: true},
		email: {type: String, unique: true, required: true, lowercase: true, trim: true, match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']},
		password: {type: String, required: true},
		mobile: { type: String, required: true, match: [/^\d{10,15}$/, 'Invalid mobile number'] },
		verified: {type: String, required: true},
		otp: {type: String, required: true},
		role: {type: String, enum: ["admin", "user"], default: "user", required: true},


	},
	{
		timestamps: true,
		versionKey: false
	}
)

const UserModel = mongoose.model('users', DataSchema)
export default UserModel