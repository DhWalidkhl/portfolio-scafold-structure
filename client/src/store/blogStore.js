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



	CreatingBlog: false,
	PostBlogRequest: async (reqBody) => {
		try {
			set({ CreatingBlog: true });

			const res = await axios.post(`/api/v1/CreateBlog`, reqBody);

			if (res.status === 200 && res.data?.status === "success") {
				return true;
			} else {
				console.warn("Blog creation failed:", res.data);
				return false;
			}
		} catch (error) {
			console.error("PostBlogRequest Error:", error);
			return false;
		} finally {
			set({ CreatingBlog: false });
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

	TotalLikes: 0,

	TotalLikesRequest: async (BlogID) => {
		try {
			const res = await axios.get(`/api/v1/CountLike/${BlogID}`);
			if (res.data.status === 'success') {
				const count = res.data?.totalLikes ?? 0;
				set({ TotalLikes: count });
				return count;
			} else {
				set({ TotalLikes: 0 });
				return null;
			}
		} catch (error) {
			console.error("FetchTotalLikes error:", error);
			set({ TotalLikes: 0 });
			return null;
		}
	},




}))
export default BlogStore