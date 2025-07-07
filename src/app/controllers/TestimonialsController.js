import * as TestimonialsServices from "../services/TestimonialsServices.js"



export const TestimonialsList = async (req, res) => {
    const result = await TestimonialsServices.TestimonialsListServices()
    return res.status(200).send(result)
}

export const TestimonialsListByUser = async (req, res) => {
    const result = await TestimonialsServices.TestimonialsListByUserServices(req)
    return res.status(200).send(result)
}



export const CreateTestimonial = async (req, res) => {
    const result = await TestimonialsServices.CreateTestimonialServices(req)
    return res.status(200).send(result)
}


export const UpdateTestimonial = async (req, res) => {
    const result = await TestimonialsServices.UpdateTestimonialServices(req)
    return res.status(200).send(result)
}

export const DeleteTestimonial = async (req, res) => {
    const result = await TestimonialsServices.DeleteTestimonialServices(req)
    return res.status(200).send(result)
}