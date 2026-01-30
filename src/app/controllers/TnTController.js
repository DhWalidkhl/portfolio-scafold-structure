import * as TnTListServices from "../services/TnTServices.js";

export const TnTList = async (req, res) => {
    const result = await TnTListServices.TnTListService()
    return res.status(200).send(result)
}

export const CreateTnT = async (req, res) => {
    const result = await TnTListServices.CreateTnTService(req)
    return res.status(200).send(result)
}

export const UpdateTnT = async (req, res) => {
    const result = await TnTListServices.UpdateTnTService(req)
    return res.status(200).send(result)
}

export const DeleteTnT = async (req, res) => {
    const result = await TnTListServices.DeleteTnTService(req)
    return res.status(200).send(result)
}