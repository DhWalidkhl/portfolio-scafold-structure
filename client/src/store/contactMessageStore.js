import {create} from "zustand";
import axios from "axios";

const ContactMessageStore = create((set)=>({

    ContactMessageList : [],
    ContactMessageListRequest : async ()=>{
        let res = await axios.get(`/api/v1/ContactMessageList`);
        if (res.data['status']=== 'success'){
            set({ContactMessageList : res.data['data']})
        }else {
            set({ContactMessageList : []})

        }
    },


    SingleMsg: null,

    MessageDetailsRequest: async (msgID) => {
        try {
            const res = await axios.get(`/api/v1/message-details/${msgID}`);
            if (res.data.status === 'success') {
                set({ SingleMsg: res?.data?.data });
                return res?.data?.data;
            } else {
                set({ SingleMsg: null });
                return null;
            }
        } catch (error) {
            console.error("FetchBlogDetails error:", error);
            set({ SingleMsg: null });
            return null;
        }
    },

    ContactMessageListByUser: [],
    ContactMessageListRequestByUser: async ()=>{
        try {
            let res = await axios.get(`/api/v1/MassegeListByUser`)
            if (res){
                set ({ContactMessageListByUser: res?.data?.data})
            }else {
                set ({ContactMessageListByUser: []})
            }
            return res?.data?.data

        }catch (e){
            console.log(e)
        }
    },


}))
export default ContactMessageStore