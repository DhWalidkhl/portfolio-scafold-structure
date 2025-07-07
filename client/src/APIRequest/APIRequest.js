import axios from "axios";



export const blogList = async () =>{
	let res = await axios.get(`/api/v1/BlogList`)
	if(res.data.status === "success"){
		return res.data
	}else {
		return []
	}
}


export const educationList = async () =>{
	let res = await axios.get(`/api/v1/EducationList`)
	console.log(res)
	if(res.data.status === "success"){
		// console.log(res.data.data)
		return res.data
	}else {
		return []
	}
}



export const courseList = async () =>{
	let res = await axios.get(`/api/v1/CourseList`)
	if(res.data.status === "success"){
		return res.data
	}else {
		return []
	}
}


export const testimonialList = async () =>{
	let res = await axios.get(`/api/v1/TestimonialsList`)
	if(res.data.status === "success"){
		return res.data
	}else {
		return []
	}
}


export const projectList = async () =>{
	let res = await axios.get(`/api/v1/ProjectsList`)
	if(res.data.status === "success"){
		return res.data
	}else {
		return []
	}
}