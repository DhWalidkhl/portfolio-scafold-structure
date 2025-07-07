import React, { useEffect, useRef } from 'react';
import counterUp from 'counterup2';

const WhatIdoSection = () => {
	const profession = [
		{
			logo: "HI",
			title: "Web site & Page Design",
			des: 12
		},
		{
			logo: "HI",
			title: "Frontend Development",
			des: 18
		},
		{
			logo: "Hi️",
			title: "Backend Development",
			des: 9
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
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center py-6">
			{profession.map((p, i) => (
				<div
					className="border border-sky-500 py-4 w-96 px-6 space-y-5 text-center rounded-3xl shadow"
					key={i}
				>
					<div className="text-4xl">{p.logo}</div>
					<h1 className="text-3xl font-bold uppercase">{p.title}</h1>
					<h4
						className="text-2xl counter"
						ref={(el) => (countersRef.current[i] = el)}
					>
						{p.des}+ Projects
					</h4>
				</div>
			))}
		</div>
	);
};

export default WhatIdoSection;
