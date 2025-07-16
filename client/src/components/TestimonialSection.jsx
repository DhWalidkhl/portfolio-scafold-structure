import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { testimonialList } from "../APIRequest/APIRequest.js";
import Rating from "react-rating";
import { FaStar } from 'react-icons/fa';

const TestimonialSection = () => {
	const [testimonials, setTestimonials] = useState(null);

	useEffect(() => {
		(async () => {
			let res = await testimonialList();
			console.log(res.data)
			setTestimonials(res.data);
		})();
	}, []);

	return (
		<div className="py-10 container mx-auto px-10 text-center">
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				slidesPerView={'auto'}
				grabCursor={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={false}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper"
			>
				{testimonials === null ? (
					<h1>Loading.....</h1>
				) : (
					testimonials.map((testimonial) => (
						<SwiperSlide
							key={testimonial._id}
							className="flex justify-center items-center py-10"
						>

							<div className="space-y-2">
								<img
									className="h-50 w-50 object-cover rounded-full mx-auto"
									src={testimonial?.user?.img}
									alt="author image"
								/>
								<h1 className="text-3xl font-semibold">{testimonial?.user?.firstName} {testimonial?.user?.lastName}</h1>
								<h2 className="text-xl">{testimonial.des}</h2>
								<div>
									<Rating
										readonly
										initialRating={parseFloat(testimonial.rating)}
										fullSymbol={<FaStar color="#FFD700" size={30}/>}
										emptySymbol={<FaStar color="#E0E0E0" size={30}/>}
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
