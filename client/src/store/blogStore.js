import {create} from "zustand";
import axios from "axios";

const BlogStore = create((set)=>({
	BlogList : [],
	BlogListRequest : async ()=>{
		let res = await axios.get("/api/v1/BlogList");
		if (res.data['status']=== 'success'){
			set({BlogList : res.data['data']})
		}else {
			set({BlogList : []})

		}
	},


	BlogListByUer: [],
	BlogListRequestByUser: async ()=>{
		try {
			let res = await axios.get(`/api/v1/BlogListByUser`)
			if (res){
				set ({BlogListByUer: res?.data?.data})
			}else {
				set ({BlogListByUer: []})
			}
			return res?.data?.data

		}catch (e){
			console.log(e)
		}
	},

}))
export default BlogStore