import React from 'react';

const FaqSection = () => {
	return (
		<div className="flex gap-6 flex-col lg:flex-row justify-center items-center container mx-auto p-10">
			<div>
				<h1 className="text-sky-500 font-semibold text-2xl px-1 mb-10">Frequently Asked Question</h1>
				<div className="join join-vertical space-y-6 bg-base-100">
					<div className="collapse collapse-arrow join-item border-base-300 border">
						<input type="radio" name="my-accordion-4"/>
						<div className="collapse-title font-bold lg:text-xl ">How do I create an account?</div>
						<div className="collapse-content text-sm lg:text-lg">Click the "Sign Up" button in the top right
							corner and
							follow the registration process.
						</div>
					</div>
					<div className="collapse collapse-arrow join-item border-base-300 border">
						<input type="radio" name="my-accordion-4"/>
						<div className="collapse-title font-bold lg:text-xl">I forgot my password. What should I do?
						</div>
						<div className="collapse-content text-sm lg:text-lg">Click on "Forgot Password" on the login
							page and
							follow the instructions sent to your email.
						</div>
					</div>
					<div className="collapse collapse-arrow join-item border-base-300 border">
						<input type="radio" name="my-accordion-4"/>
						<div className="collapse-title font-bold lg:text-xl">How do I update my profile information?
						</div>
						<div className="collapse-content text-sm lg:text-lg">Go to "My Account" settings and select
							"Edit Profile"
							to make changes.
						</div>
					</div>
					<div className="collapse collapse-arrow join-item border-base-300 border">
						<input type="radio" name="my-accordion-4"/>
						<div className="collapse-title font-bold lg:text-xl ">How do I create an account?</div>
						<div className="collapse-content text-sm lg:text-lg">Click the "Sign Up" button in the top right
							corner and
							follow the registration process.
						</div>
					</div>
					<div className="collapse collapse-arrow join-item border-base-300 border">
						<input type="radio" name="my-accordion-4"/>
						<div className="collapse-title font-bold lg:text-xl">I forgot my password. What should I do?
						</div>
						<div className="collapse-content text-sm lg:text-lg">Click on "Forgot Password" on the login
							page and
							follow the instructions sent to your email.
						</div>
					</div>
					<div className="collapse collapse-arrow join-item border-base-300 border">
						<input type="radio" name="my-accordion-4"/>
						<div className="collapse-title font-bold lg:text-xl">How do I update my profile information?
						</div>
						<div className="collapse-content text-sm lg:text-lg">Go to "My Account" settings and select
							"Edit Profile"
							to make changes.
						</div>
					</div>
				</div>
			</div>

			<img className="rounded-2xl lg:w-1/2"
			     src="https://res.cloudinary.com/dxsx1hp42/image/upload/v1752586746/Web_Development_Promotion_Instagram_Post_p4qboq.png"/>

		</div>
	);
};

export default FaqSection;