import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import {API_KEY, API_SECRET, CLOUD_NAME} from "../config/config.js";

cloudinary.config({
	cloud_name: CLOUD_NAME,
	api_key: API_KEY,
	api_secret: API_SECRET
});


const UPLOAD_FOLDER = 'uploads';
const FILE_SIZE_LIMIT = 2097152;


const storage = new CloudinaryStorage({
	cloudinary,
	params: {
		folder: UPLOAD_FOLDER,
		allowed_formats: ["jpg", "jpeg", "png"],
		public_id: (req, file) => "api-img_" + Date.now() + "_" + file.originalname
	}
});

console.log("Cloudinary config:", CLOUD_NAME, API_KEY ? "yes" : "no", API_SECRET ? "yes" : "no");



const FILE_FILTER = (req, file, cb) => {
if(!file) {
	return cb(new Error('No file uploaded'));
}
else {
	if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/jpg") {
		return cb(null, true);
	} else {
		return cb("Only jpg, jpeg, or png file allowed", false);
	}
}
};


// const fileStorage = multer.diskStorage({
// 	destination: (req, file, cb) => {
// 		cb(null, UPLOAD_FOLDER);
// 	},
// 	filename: (req, file, cb) => {
// 		cb(null, 'api-img_' + Date.now() + "_" + file.originalname);
// 	}
// });



const upload = multer({
	// storage: fileStorage,
	storage: storage,
	limits: { fileSize: FILE_SIZE_LIMIT },
	fileFilter: FILE_FILTER
});

export default upload;