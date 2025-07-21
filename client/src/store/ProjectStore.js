import {create} from "zustand";
import axios from "axios";

const ProjectStore = create((set)=>({
	ProjectsList : [],
	ProjectListRequest : async ()=>{
		let res = await axios.get(`/api/v1/ProjectsList`);
		if (res.data['status']=== 'success'){
			set({ProjectsList : res.data['data']})
		}else {
			set({ProjectsList : []})

		}
	},


	SingleProject: null,

	ProjectDetailsRequest: async (ProjectID) => {
		try {
			const res = await axios.get(`/api/v1/ProjectDetails/${ProjectID}`);
			if (res.data.status === 'success') {
				set({ SingleProject: res?.data?.data });
				return res?.data?.data;
			} else {
				set({ SingleProject: null });
				return null;
			}
		} catch (error) {
			console.error("SingleProject error:", error);
			set({ SingleProject: null });
			return null;
		}
	},


}))
export default ProjectStore