import TnTModel from "../models/TnTModel.js";


export const TnTListService = async () =>{
    try{
        const data = await TnTModel.find()
        return {status: 'success', data: data}
    } catch (e) {
        return {status: 'fail', message: "something went wrong"}
    }
}

export const CreateTnTService = async (req)=>{
    try {
        const reqBody = req.body
        const data = await TnTModel.create(reqBody)
        return {status: 'success', data: data}
    } catch (e) {
        return {status: 'fail', message: "something went wrong"}
    }
}

export const UpdateTnTService = async (req)=>{
    try {
        const TnTID = req.params.TnTID;
        const data = await TnTModel.updateOne({_id: TnTID}, {$set: req.body})
        return {status: 'success', data: data}
    } catch (e) {
        return {status: 'fail', message: "something went wrong"}
    }
}


export const DeleteTnTService = async (req)=>{
    try {
        const TnTID = req.params.TnTID
        await TnTModel.deleteOne({_id: TnTID})
        return {status: 'success', data: "Terms and Condition Deleted Successfully"}
    } catch (e) {
        return {status: 'fail', message: "something went wrong"}
    }
}