import TnTModel from "../models/Terms&ConditionModel.js";


export const TnTListServices = async () =>{
    try{
        const data = await TnTModel.find().sort({createdAt: -1})
        return {status: 'success', data: data}
    }catch (e) {
        return {status: 'fail', message: e.toString()}
    }
}

