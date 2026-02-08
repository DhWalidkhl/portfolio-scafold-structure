import React, { useEffect, useRef } from 'react';
import counterUp from 'counterup2';
import { MdDeveloperMode } from "react-icons/md";
import { SiAltiumdesigner } from "react-icons/si";
import { IoCodeSlashOutline } from "react-icons/io5";

const WhatIdoSection = () => {
	const profession = [
		{
			logo: <SiAltiumdesigner />,
			title: "UI/UX Design",
			des: "HTML, CSS, TailwindCSS, Bootstrap",
			project: 12
		},
		{
			logo: <MdDeveloperMode/>,
			title: "Frontend",
			des: "REACT",
			project: 12
		},
		{
			logo: <IoCodeSlashOutline/>,
			title: "Backend",
			des: "Node, Express, Mongoose",
			project: 12
		},
	];

	// Create refs for each number
	const countersRef = useRef([]);

	useEffect(() => {
		countersRef.current.forEach((el) => {
			if (el) {
				counterUp(el, {
					duration: 1000,
					delay: 10,
				});
			}
		});
	}, []);

	return (
		<div className="container mx-auto px-4 py-16 lg:py-20 max-w-6xl">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
				{profession.map((p, i) => (
					<div
						className="flex flex-col justify-center items-center border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-2xl py-8 px-6 text-center shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200"
						key={i}
					>
						<div className="text-slate-600 dark:text-slate-400 mb-4 text-5xl">{p.logo}</div>
						<h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 uppercase tracking-tight">{p.title}</h3>
						<p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{p.des}</p>
						<p
							className="text-xl font-semibold text-blue-600 dark:text-blue-400 mt-3 counter"
							ref={(el) => (countersRef.current[i] = el)}
						>
							{p.project}+ Projects
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default WhatIdoSection;
