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

    CreatingTnT: false,
    PostTnTRequest: async (reqBody) => {
        try {
            set({ CreatingTnT: true });

            const res = await axios.post(`/api/v1/CreateTnT`, reqBody);

            if (res.status === 200 && res.data?.status === "success") {
                return true;
            } else {
                console.warn("Terms & Condition creation failed:", res.data);
                return false;
            }
        } catch (error) {
            console.error("PostTnTRequest Error:", error);
            return false;
        } finally {
            set({ CreatingTnT: false });
        }
    },

}))
export default TnTStore