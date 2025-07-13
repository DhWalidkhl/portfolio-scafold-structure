import React from 'react';
import LottieFiles from "./LottieFiles.jsx";
import UserStore from "../store/userStore.js";
import Login from "./Login.jsx";

const ContactForm = () => {
	let {UserProfile} = UserStore()
	return (
		<div>
			<div
				className="grid max-w-screen-xl grid-cols-1 gap-32 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-10 lg:px-10 xl:px-16 items-center ">
				<div className="space-y-4">
					<h2 className="text-sky-500 font-semibold text-2xl">Get in Touch</h2>
					<h1 className="text-5xl font-bold">Let's Elevate your business together.</h1>
					<p>ished fact that a reader will be distrol acted bioiiy desig ished fact that a reader will acted
						ished fact that a reader will be distrol acted</p>
				</div>
				<form noValidate="" className="space-y-6">
					<div>
						<label htmlFor="name" className="text-sm">Full name</label>
						<input
							defaultValue={UserProfile === null ? ("") : `${UserProfile.firstName} ${UserProfile.lastName}`}
							disabled id="name" type="text" className="w-full p-3 rounded bg-gray-200"/>
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