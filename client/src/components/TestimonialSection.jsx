import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { testimonialList } from "../APIRequest/APIRequest.js";
import Rating from "react-rating";
import { FaStar } from 'react-icons/fa';
import TestimonialSkeleton from "../skeleton/TestimonialSkeleton.jsx";

const TestimonialSection = () => {
	const [testimonials, setTestimonials] = useState(null);

	useEffect(() => {
		(async () => {
			let res = await testimonialList();
			setTestimonials(res.data);
		})();
	}, []);

	return (
		<div className="py-16 lg:py-20 container mx-auto px-4 max-w-4xl text-center">
			<h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-10">What people say</h2>
			<Swiper
				spaceBetween={30}
				centeredSlides
				slidesPerView="auto"
				grabCursor
				autoplay={{ delay: 2500, disableOnInteraction: false }}
				pagination={{ clickable: true }}
				navigation={false}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper"
			>
				{testimonials === null ? (
					<TestimonialSkeleton />
				) : (
					testimonials.map((testimonial) => (
						<SwiperSlide key={testimonial._id} className="flex justify-center items-center py-8">
							<div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-8 py-10 max-w-lg mx-auto space-y-4">
								<img
									className="h-20 w-20 object-cover rounded-full mx-auto border-2 border-slate-200 dark:border-slate-600"
									src={testimonial?.user?.img}
									alt=""
								/>
								<h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
									{testimonial?.user?.firstName} {testimonial?.user?.lastName}
								</h3>
								<p className="text-slate-600 dark:text-slate-400 leading-relaxed">{testimonial.des}</p>
								<div className="flex justify-center">
									<Rating
										readonly
										initialRating={parseFloat(testimonial.rating)}
										fullSymbol={<FaStar color="#2563eb" size={24} />}
										emptySymbol={<FaStar color="#e2e8f0" size={24} />}
									/>
								</div>
							</div>
						</SwiperSlide>
					))
				)}
			</Swiper>
		</div>
	);
};

export default TestimonialSection;
