import {create} from "zustand";
import axios from "axios";

const FAQStore = create((set)=>({
	FAQList : [],
	FAQListRequest : async ()=>{
		let res = await axios.get(`/api/v1/FAQList`);
		if (res.data['status']=== 'success'){
			set({FAQList : res.data['data']})
		}else {
			set({FAQList : []})

		}
	},



}))
export default FAQStore