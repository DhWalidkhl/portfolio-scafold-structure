import {create} from "zustand";
import axios from "axios";

const BlogStore = create((set)=>({
	PendingBlogList : [],
    PendingBlogListRequest : async ()=>{
		let res = await axios.get(`/api/v1/PendingBlogList`);
		if (res.data['status']=== 'success'){
			set({PendingBlogList : res.data['data']})
		}else {
			set({PendingBlogList : []})

		}
	},

    ApprovedBlogList: [],
    ApprovedBlogListRequest : async ()=>{
        let res = await axios.get(`/api/v1/ApprovedBlogList`);
        if (res.data['status']=== 'success'){
            set({ApprovedBlogList : res?.data?.data})
        }else {
            set({ApprovedBlogList : []})

        }
    },



    ApproveBlogListByUser: [],
	ApproveBlogListRequestByUser: async ()=>{
		try {
			let res = await axios.get(`/api/v1/ApproveBlogListByUser`)
			if (res){
				set ({ApproveBlogListByUser: res?.data?.data})
			}else {
				set ({ApproveBlogListByUser: []})
			}
			return res?.data?.data

		}catch (e){
			console.log(e)
		}
	},


    PendingBlogListByUser: [],
    PendingBlogListRequestByUser: async ()=>{
        try {
            let res = await axios.get(`/api/v1/PendingBlogListByUser`)
            if (res){
                set ({PendingBlogListByUser: res?.data?.data})
            }else {
                set ({PendingBlogListByUser: []})
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


	AddLikeRequest: async (BlogID) => {
		try {
			const res = await axios.post(`/api/v1/AddLike/${BlogID}`);
			if (res.data.status === 'success') {
				await BlogStore.getState().TotalLikesRequest(BlogID);
				return true;
			} else {
				console.warn("AddLike failed:", res.data);
				return false;
			}
		} catch (error) {
			console.error("AddLikeRequest error:", error);
			return false;
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


	CommentsByBlog: [],
	GetCommentsByBlogRequest: async (BlogID) => {
		try {
			const res = await axios.get(`/api/v1/GetCommentsByBlog/${BlogID}`);
			if (res.data.status === 'success') {
				set({ CommentsByBlog: res.data?.data });
			} else {
				set({ CommentsByBlog: [] });
			}
		} catch (error) {
			console.error("GetCommentsByBlog error:", error);
			set({ CommentsByBlog: [] });
		}
	},


	CreateCommentRequest: async (BlogID, commentData) => {
		try {
			const res = await axios.post(`/api/v1/CreateComment/${BlogID}`, commentData);
			if (res.data.status === 'success') {
				await BlogStore.getState().GetCommentsByBlogRequest(BlogID);
				return true;
			} else {
				console.warn("CreateComment failed:", res.data);
				return false;
			}
		} catch (error) {
			console.error("CreateCommentRequest error:", error);
			return false;
		}
	},

	SearchedBlogs: [],
	loading: false,
	SearchBlogRequest: async (keyword) => {
		try {
			set({ loading: true });
			const res = await axios.get(`/api/v1/SeachByKeyword`,{ params: { keyword: keyword } });
			if (res.data['status']=== 'success'){
				set({SearchedBlogs : res.data?.data})
			}else {
				set({SearchedBlogs : []})
			}
		}catch (e) {
			console.log(e);
			set({ SearchedBlogs: [] });
		} finally {
			set({ loading: false });
		}
	}
}))
export default BlogStore