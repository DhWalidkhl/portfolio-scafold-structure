import React from 'react';
import Login from "./Login.jsx";

const ContactInfo = () => {
	return (
		<div className="max-w-5xl mx-auto">
			<h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-slate-100 text-center mb-8">Get in Touch</h2>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start px-4 lg:px-8 text-center lg:text-left">
				<div className="space-y-4">
					<h3 className="text-2xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
						Let's elevate your business together.
					</h3>
					<p className="text-slate-600 dark:text-slate-400 leading-relaxed">
						Reach out for projects, collaboration, or a quick chat.
					</p>
					<div className="flex justify-center lg:justify-start">
						<Login />
					</div>
				</div>
				<div className="space-y-4 lg:mt-0">
					<p className="text-slate-600 dark:text-slate-400 text-sm lg:text-base">
						To contact via this site, please log in. You can also use the details below.
					</p>
					<p className="text-slate-800 dark:text-slate-300 font-medium">
						Mobile / WhatsApp: <span className="font-semibold text-slate-900 dark:text-slate-100">+8801700950650</span>
					</p>
					<p className="text-slate-800 dark:text-slate-300 font-medium">
						Email: <span className="font-semibold text-slate-900 dark:text-slate-100">sm.walid69@yahoo.com</span>
					</p>
					<p className="text-slate-600 dark:text-slate-400 text-sm">
						Address: 169, Mondirer More, Rayermahal, Sonadanga, Khulna-9000
					</p>
				</div>
			</div>
		</div>
	);
};

export default ContactInfo;