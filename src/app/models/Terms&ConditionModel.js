import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
    {
        title: {type: String, unique: true, required: true},
        des: {type: String, required: true},
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const TnTModel = mongoose.model('terms&condition', DataSchema)
export default TnTModel