import {create} from "zustand";
import axios from "axios";

const BlogStore = create((set)=>({
	BlogList : [],
	BlogListRequest : async ()=>{
		let res = await axios.get(`/api/v1/BlogList`);
		if (res.data['status']=== 'success'){
			set({BlogList : res.data['data']})
		}else {
			set({BlogList : []})

		}
	},


	BlogListByUser: [],
	BlogListRequestByUser: async ()=>{
		try {
			let res = await axios.get(`/api/v1/BlogListByUser`)
			if (res){
				set ({BlogListByUser: res?.data?.data})
			}else {
				set ({BlogListByUser: []})
			}
			return res?.data?.data

		}catch (e){
			console.log(e)
		}
	},


	SingleBlog: null,

	BlogDetailsRequest: async (BlogID) => {
		try {
			const res = await axios.get(`/api/v1/BlogDetails/${BlogID}`);
			if (res.data.status === 'success') {
				set({ SingleBlog: res?.data?.data });
				return res?.data?.data;
			} else {
				set({ SingleBlog: null });
				return null;
			}
		} catch (error) {
			console.error("FetchBlogDetails error:", error);
			set({ SingleBlog: null });
			return null;
		}
	},


}))
export default BlogStore