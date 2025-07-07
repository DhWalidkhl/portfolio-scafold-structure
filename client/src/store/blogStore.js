import {create} from "zustand";
import axios from "axios";

const BlogListStore = create((set)=>({
	BlogList : null,
	BlogListRequest : async ()=>{
		let res = await axios.get("/api/v1/BlogList");
		if (res.data['status']=== 'success'){
			set({BlogList : res.data['data']})
		}
	}

}))
export default BlogListStore