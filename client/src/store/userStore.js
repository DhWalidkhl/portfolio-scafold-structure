import {create} from "zustand";
import axios from "axios";
import Cookies from 'js-cookie'

const UserStore = create((set)=>({

	isLogin: ()=>{
		if (Cookies.get('token')){
			return true
		}else {
			return false
		}
	},

	// Form Data
	LoginFormData: {},
	LoginFormOnChange :(name, value)=>{
		set((state)=>(
			{
				LoginFormData:{
					...state.LoginFormData, [name] : value
				}
			}
		))
	},



	// File upload data
	ImageName: "",
    imagePublicId: "",
	FileUploading: false,
    FileUploadError: "",
	FileUploadOnChange: async (event) => {
		set({FileUploading: true})
		try {
			const file = event.target.files[0];
			if (!file) {
				console.log("No file selected");
				set({ ImageName: "", imagePublicId: "", FileUploading: false, FileUploadError: "Please Select a file." });
				return false;
			}
			const formData = new FormData();
			formData.append("file", file);

			const res = await axios.post("/api/v1/fileUpload", formData, {
				headers: { "Content-Type": "multipart/form-data" }
			});

			if (res.status === 200) {
				set({ ImageName: res?.data?.data?.path, imagePublicId: res?.data?.data?.filename, FileUploading: false, FileUploadError: "" });
				return true;
			} else {
				set({ ImageName: "", imagePublicId: "", FileUploading: false, FileUploadError: "Upload failed. Try again." });
				return false;
			}
		} catch (error) {
			set({ ImageName: "", imagePublicId: "", FileUploading: false, FileUploadError: "Upload failed. Try again with jpg/jpeg/png format with 2MB file size.", });
			console.log(error)
			return false;
		}

	},



	// Login by using API
	UserLoginRequest: async (reqBody)=>{
		let res = await axios.post(`/api/v1/UserLogin`, reqBody)
		sessionStorage.setItem('role',res?.data?.role )
		return res.data['status'] === "success";
	},

	UserSignUpRequest: async (reqBody)=>{
		let res = await axios.post(`/api/v1/UserRegister`, reqBody)
		return res.data['status'] === "success";
	},


	// Profile Details

	UserProfile: [],
	ProfileDetailsByID: async ()=>{
		try {
			let res = await axios.get(`/api/v1/UserListByID`)
			if (res){
				set ({UserProfile: res?.data?.data})
			}else {
				set ({UserProfile: []})
			}
			return res?.data?.data

		}catch (e){
			console.log(e.toString())
		}
	},


	UserList : [],
	UserListRequest : async ()=>{
		try {
			let res = await axios.get("/api/v1/UserList");
			if (res.data.status === 'success') {
				set({ UserList: res.data.data });
			}else {
				set({ UserList: [] });
			}
			return res.data.data;
		} catch (e) {
			console.error("Failed to fetch user list", e);
			return e.toString();
		}
	},


	UserLogoutRequest : async ()=>{
		let res = await axios.get(`/api/v1/UserLogout`)
		Cookies.remove('token')
		return res.data['status'] === "success";
	},
}))
export default UserStore