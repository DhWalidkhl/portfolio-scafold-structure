import React from 'react';
import UserStore from "../store/userStore.js";

const ContactForm = () => {
	let {UserProfile} = UserStore()
	return (
		<div className="max-w-5xl mx-auto">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 p-6 md:p-10 items-start">
				<div className="space-y-4">
					<p className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wide">Get in Touch</p>
					<h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
						Let's elevate your business together.
					</h2>
					<p className="text-slate-600 dark:text-slate-400 leading-relaxed">
						Share your project or idea and I'll get back to you as soon as possible.
					</p>
				</div>
				<form noValidate className="space-y-5">
					<div>
						<label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full name</label>
						<input
							defaultValue={UserProfile?.length === 0 ? '' : `${UserProfile?.firstName ?? ''} ${UserProfile?.lastName ?? ''}`.trim()}
							disabled
							id="name"
							type="text"
							className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300"
						/>
					</div>
					<div>
						<label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
						<input
							defaultValue={UserProfile?.length === 0 ? '' : UserProfile?.email ?? ''}
							disabled
							id="email"
							type="email"
							className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300"
						/>
					</div>
					<div>
						<label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
						<textarea
							id="message"
							rows={5}
							placeholder="Your message..."
							className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-300 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
						/>
					</div>
					<button
						type="submit"
						className="w-full py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg transition-colors"
					>
						Send Message
					</button>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;