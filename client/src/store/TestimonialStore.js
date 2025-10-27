import {create} from "zustand";
import axios from "axios";

const TestimonialStore = create((set)=>({
	TestimonialList : [],
	TestimonialListRequest : async ()=>{
		let res = await axios.get(`/api/v1/TestimonialsList`);
		if (res.data['status']=== 'success'){
			set({TestimonialList : res.data['data']})
		}else {
			set({TestimonialList : []})

		}
	},

    TestimonialListByUser : [],
    TestimonialListByUserRequest : async ()=>{
        let res = await axios.get(`/api/v1/TestimonialsListByUser`);
        if (res.data['status']=== 'success'){
            set({TestimonialListByUser : res.data['data']})
        }else {
            set({TestimonialListByUser : []})

        }
    },

}))
export default TestimonialStore