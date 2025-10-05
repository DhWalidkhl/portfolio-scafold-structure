// MongoDB Config
export const MONGODB_CONNECTION = "mongodb+srv://chorompagla:Smwalidkh93@cluster0.hs5ydre.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0"

// jwt Config
export const JWT_SECRET = "c52bc16445487ab27af9274c09de93b55c05fef67b366ffd232aa157888a37a5";
export const JWT_EXPIRATION_TIME = 60 * 60 * 24 * 30;

// File upload config for couldinary
export const CLOUD_NAME = "dxsx1hp42";
export const API_KEY = "822313534223645";
export const API_SECRET = "InJQs52SbU7Lj4WMVYFgKt48i1I";



// CSP Config for Image
export const CSP_CONFIG = {
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'none'"],

            imgSrc: [
                "'self'",
                "https://res.cloudinary.com",
                "https://assets9.lottiefiles.com",
                "https://lottie.host",
                "https://lottiefiles.com/",
                "https://images.pexels.com",
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
                "'unsafe-inline'",
                "https://fonts.googleapis.com"
            ],

            fontSrc: [
                "'self'",
                "https://fonts.gstatic.com",
                "data:"
            ],

            connectSrc: [
                "'self'",
                "https://assets9.lottiefiles.com",
                "https://unpkg.com",
                "https://lottie.host"
            ],

            objectSrc: ["'none'"],

            mediaSrc: [
                "'self'",
                "https://assets9.lottiefiles.com",
                "https://lottie.host"
            ],
            frameAncestors: ["'none'"],

            upgradeInsecureRequests: []
        }
    }
}





// email config
export const EMAIL_HOST = "smtp.gmail.com";
export const EMAIL_PORT = 587;
export const EMAIL_USER = "chorompagla@gmail.com";
export const EMAIL_PASSWORD = "bsodvosaegezletj";

// security (json & url)
export const MAX_JSON_SIZE = "500mb";
export const URL_ENCODED = true;

// Request Limit Config
export const REQUEST_LIMIT_TIME = 15 * 60 * 1000; //15 Min
export const REQUEST_LIMIT_NUMBER = 3000; //Per 15 Min 3000 Request Allowed

// Web Caching config
export const WEB_CACHE = false;

// Port
export const PORT = 5000;