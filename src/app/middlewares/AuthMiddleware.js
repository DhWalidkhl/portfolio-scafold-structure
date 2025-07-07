import {DecodeToken} from "../utilities/TokenUtility.js";
import UserModel from "../models/UserModel.js";

export const AuthMiddleware =  (req, res, next)=>{
	let token = req.headers['token']
	if(!token){
		token = req.cookies['token']
	}
	const decoded = DecodeToken(token)
	if (decoded === null){
		return res.status(401).send({status: 'fail', message: 'Unauthorized'})
	}
	else {
		const email = decoded.email;
		const user_id = decoded.user_id;

		req.headers.email = email;
		req.headers.user_id = user_id;

		next()
	}
}



export const AdminMiddleware = async (req, res, next)=>{
	try {
		const user_id = req.headers['user_id']
		const adminUser = await UserModel.findById({_id: user_id})
		if(!adminUser || adminUser.role !== "admin"){
			return res.status(401).send({status: 'fail', message: 'You are not authorized for this operation'})
		}
		next()
	}catch (e) {
		return {status: "fail", message: e.toString()};
	}
}