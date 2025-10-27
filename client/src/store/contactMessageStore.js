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