import React from 'react';
import LottieFiles from "./LottieFiles.jsx";
import Lottie from "lottie-react";
import UserStore from "../store/userStore.js";

const ContactForm = () => {
	let {UserProfile} = UserStore()
	// console.log(UserProfile['firstName']+ " " + UserProfile['lastName']);
	return (
		<div>
			<div
				className="grid max-w-screen-xl grid-cols-1 gap-32 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-10 lg:px-10 xl:px-16 items-center ">
				<LottieFiles></LottieFiles>
				{/*<Lottie loop={true} />;*/}
				<form noValidate="" className="space-y-6">
					<div>
						<label  htmlFor="name" className="text-sm">Full name</label>
						<input defaultValue={UserProfile === null ? ("") : `${UserProfile.firstName} ${UserProfile.lastName}`} disabled id="name" type="text" className="w-full p-3 rounded bg-gray-200"/>
					</div>
					<div>
						<label htmlFor="email" className="text-sm">Email</label>
						<input defaultValue={UserProfile === null ? ("") : `${UserProfile.email}`} disabled id="email" type="email" className="w-full p-3 rounded bg-gray-200"

						       data-temp-mail-org="1"/>
					</div>
					<div>
						<label htmlFor="message" className="text-sm">Message</label>
						<textarea id="message" rows="7" className="w-full p-3 rounded bg-gray-200"></textarea>
					</div>
					<button type="submit"
					        className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-400 text-gray-900">Send
						Message
					</button>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;