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
		<div className="grid pt-20 pb-10 container mx-auto px-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center py-6">
			{profession.map((p, i) => (
				<div
					className="border flex flex-col justify-center items-center border-sky-200 py-6 px-3 w-96 space-y-5 text-center rounded-3xl shadow"
					key={i}
				>
					<div className="text-7xl text-sky-600 text-center">{p.logo}</div>
					<div>
						<h1 className="text-2xl font-bold uppercase">{p.title}</h1>
						<p className="py-1">({p.des})</p>
						<h4
							className="text-2xl counter"
							ref={(el) => (countersRef.current[i] = el)}
						>
							{p.project}+ Projects
						</h4>
					</div>
				</div>
			))}
		</div>
	);
};

export default WhatIdoSection;
