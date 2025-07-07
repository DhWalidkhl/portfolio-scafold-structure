import jwt from 'jsonwebtoken'
import {JWT_EXPIRATION_TIME, JWT_SECRET} from "../config/config.js";

export const EncodeToken = (email, user_id)=>{
	const KEY = JWT_SECRET;
	const PAYLOAD = {email: email, user_id: user_id};
	const EXPIRE = {expiresIn: JWT_EXPIRATION_TIME};
	return jwt.sign(PAYLOAD, KEY, EXPIRE)
}

export const DecodeToken = (token) =>{
	try {
		return jwt.verify(token, JWT_SECRET);
	}
	catch (error){
		return null
	}
}