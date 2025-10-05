import upload from "../utilities/FileUploadMiddleware.js";

export const FileUploadHandlerMiddlewar = (req, res, next) => {
    upload.single("file")(req, res, (err) => {
        if (err) {
            if (err.code === "LIMIT_FILE_SIZE") {
                return res.status(400).json({ message: "File size is too large. Max limit is 2MB." });
            }
            if (err.message === "Only jpg, jpeg, or png file allowed") {
                return res.status(400).json({ message: err.message });
            }
            return res.status(400).json({ message: err.message || "File upload error." });
        }
        next();
    });
};
