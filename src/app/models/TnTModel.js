import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema({
    title: {type: String, required: true, unique: true},
    des: {type: String, required: true},
},
    {
        timestamps: true,
        versionKey: false
    }
)

const TnTModel = mongoose.model('TnT', DataSchema);
export default TnTModel