import express from "express";
import path from 'path';
import cors from "cors";
import mongoose from "mongoose";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import hpp from "hpp";
import router from './routes/api.js'
import {
	MONGODB_CONNECTION,
	MAX_JSON_SIZE,
	URL_ENCODED,
	WEB_CACHE,
	REQUEST_LIMIT_NUMBER,
	REQUEST_LIMIT_TIME,
} from "./src/app/config/config.js";

const app = express();

// Global Application Middleware
app.use(cors());
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_ENCODED }));
app.use(hpp());

// csp configuration for cloudinary
app.use(
	helmet({
		contentSecurityPolicy: {
			directives: {
				defaultSrc: ["'self'"],

				imgSrc: [
					"'self'",
					"https://res.cloudinary.com",
					"https://assets9.lottiefiles.com",
					"https://lottie.host",
					"https://lottiefiles.com/",
					"data:"
				],

				scriptSrc: [
					"'self'",
					"https://unpkg.com",
					"https://cdnjs.cloudflare.com",
					"'unsafe-inline'"
				],

				styleSrc: [
					"'self'",
					"'unsafe-inline'"
				],

				connectSrc: [
					"'self'",
					"https://assets9.lottiefiles.com",
					"https://unpkg.com",
					"https://lottie.host"
				],

				fontSrc: ["'self'"],

				objectSrc: ["'none'"],

				mediaSrc: [
					"'self'",
					"https://assets9.lottiefiles.com",
					"https://lottie.host"
				],

				upgradeInsecureRequests: []
			}
		}
	})
);







app.use(cookieParser());



// Rate Limiter
const limiter = rateLimit({
	windowMs: REQUEST_LIMIT_TIME,
	max: REQUEST_LIMIT_NUMBER,
});
app.use(limiter);

// Web Caching
app.set("etag", WEB_CACHE);

// Database connection
mongoose.connect(MONGODB_CONNECTION, {autoIndex: true})
	.then(()=>{
		console.log('DB Connected')
	})
	.catch((err)=>{

		console.log(err.toString())
	})


// Set API Routes
app.use("/api/v1", router);


const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'client', 'dist')));

app.get('*', (req, res) =>
	res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
);

// app.use(express.static('client/dist'));
//
// app.use('*', (req, res)=>{
// 	res.sendFile(path.resolve(__dirname,'client','dist','index.html'))
// })



export default app