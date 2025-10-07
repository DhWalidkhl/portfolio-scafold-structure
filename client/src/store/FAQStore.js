import {create} from "zustand";
import axios from "axios";

const FAQStore = create((set)=>({
	FAQList : [],
    FAQListRequest: async () => {
        try {
            const res = await axios.get(`/api/v1/FAQList`);
            if (res.data?.status === 'success') {
                set({ FAQList: res.data.data });
            } else {
                set({ FAQList: [] });
            }
        } catch (e) {
            console.error(e);
            set({ FAQList: [] });
        }
    },


    FAQDetails: null,
    FAQDetailRequest : async (FAQId)=>{
        try {
            const res = await axios.get(`/api/v1/FAQDetails/${FAQId}`);
            if (res.data['status']=== 'success'){
                set({FAQDetails : res.data?.data})
                return res.data?.data
            }
        }catch (e) {
            console.log(e)
            set({ FAQDetails: null})
        }
    }



}))
export default FAQStore