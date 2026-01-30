import {create} from "zustand";
import axios from "axios";


const TnTStore = create((set)=>({
    TnTList : [],
    TnTListRequest : async ()=>{
        let res = await axios.get(`/api/v1/TnTList`);
        if (res.data['status']=== 'success'){
            set({TnTList : res.data['data']})
        }else {
            set({TnTList : []})

        }
    },

}))
export default TnTStore