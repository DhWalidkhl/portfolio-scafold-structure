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


	// Login by using API
	UserLoginRequest: async (reqBody)=>{
		let res = await axios.post(`/api/v1/UserLogin`, reqBody)
		sessionStorage.setItem('role',res?.data?.role )
		return res.data['status'] === "success";
	},


	// Profile Details

	UserProfile: null,
	ProfileDetailsByID: async ()=>{
		try {
			let res = await axios.get(`/api/v1/UserListByID`)
			if (res){
				set ({UserProfile: res?.data?.data})
			}else {
				set ({UserProfile: null})
			}
			return res?.data?.data

		}catch (e){
			console.log(e)
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
			return null;
		}
	},



	UserLogoutRequest : async ()=>{
		let res = await axios.get(`/api/v1/UserLogout`)
		Cookies.remove('token')
		return res.data['status'] === "success";
	},
}))
export default UserStore