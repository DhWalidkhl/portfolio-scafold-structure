import * as TnTServices from "../services/Terms&ConditionServices";



export const TnTList = async (req, res) => {
    const result = await TnTServices.TnTListServices()
    return res.status(200).send(result)
}