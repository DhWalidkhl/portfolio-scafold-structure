import React, {useEffect} from 'react';
import FAQStore from "../store/FAQStore.js";

const FaqSection = () => {

	const {FAQList, FAQListRequest} =FAQStore()

	useEffect( () => {
		( async () => {
			await FAQListRequest()
		})()
	}, [FAQList]);


	return (
		<div className="flex gap-6 flex-col lg:flex-row justify-center items-center container mx-auto p-10">
			<div>
				<h1 className="text-sky-500 font-semibold text-2xl px-1 mb-10">Frequently Asked Question</h1>
				<div className="join join-vertical space-y-6 bg-base-100">
					{
						FAQList.length === 0 ? (
							<div>Loading.....</div>
						) : (
							FAQList.map((faq) => (
								<div key={faq._id.toString()} className="collapse collapse-arrow join-item border-base-300 border">
									<input type="radio" name="my-accordion-4"/>
									<div className="collapse-title font-bold lg:text-xl">
										{faq.qstn}
									</div>
									<div className="collapse-content text-sm lg:text-lg">
										{faq.ans}
									</div>
								</div>
							))
						)
					}


				</div>
			</div>

			<img className="rounded-2xl lg:w-1/2"
			     src="https://res.cloudinary.com/dxsx1hp42/image/upload/v1752586746/Web_Development_Promotion_Instagram_Post_p4qboq.png"/>

		</div>
	);
};

export default FaqSection;