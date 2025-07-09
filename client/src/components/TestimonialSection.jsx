import React, {useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import {testimonialList} from "../APIRequest/APIRequest.js";

const TestimonialSection = () => {
	const [testimonials, setTestimonials] = useState(null)
	useEffect(() => {
		(async () => {
			let res = await testimonialList()
			setTestimonials(res.data)
		})()
	}, []);
	return (
		<div className="px-10">
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper"
			>
				{
					testimonials === null ? <h1>Loading.....</h1>:
						testimonials.map((testimonial)=>(
							<SwiperSlide key={testimonial._id} className="text-center py-10">
									<h1 className="text-4xl">{testimonial.userID}</h1>
									<h2 className="text-3xl font-semibold">{testimonial.des}</h2>
									<p className="text-2xl">{testimonial.rating}</p>
							</SwiperSlide>
						))

				}
			</Swiper>
		</div>
	);
};

export default TestimonialSection;