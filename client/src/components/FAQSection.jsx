import React, {useEffect} from 'react';
import FAQStore from "../store/FAQStore.js";
import FAQSkeleton from "../skeleton/FAQSkeleton.jsx";

const FaqSection = () => {

	const {FAQList, FAQListRequest} =FAQStore()

	useEffect( () => {
		( async () => {
			await FAQListRequest()
		})()
	}, []);


	return (
		<div className="container mx-auto px-4 py-16 lg:py-20 max-w-6xl">
			<div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start justify-center">
				<div className="w-full lg:max-w-xl">
					<h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8">Frequently Asked Questions</h2>
					{FAQList.length === 0 ? (
						<FAQSkeleton />
					) : (
						<div className="space-y-3">
							{FAQList.map((faq) => (
								<div key={faq._id} className="collapse collapse-arrow bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
									<input type="radio" name="faq-accordion" />
									<div className="collapse-title font-semibold text-slate-900 dark:text-slate-100 text-base lg:text-lg">
										{faq.qstn}
									</div>
									<div className="collapse-content text-slate-600 dark:text-slate-400 text-sm lg:text-base">
										{faq.ans}
									</div>
								</div>
							))}
						</div>
					)}
				</div>
				<figure className="w-full lg:w-1/2 shrink-0">
					<img
						className="rounded-2xl w-full object-cover shadow-sm"
						alt="FAQ"
						src="https://res.cloudinary.com/dxsx1hp42/image/upload/v1752586746/Web_Development_Promotion_Instagram_Post_p4qboq.png"
					/>
				</figure>
			</div>
		</div>
	);
};

export default FaqSection;