import React from 'react';

const ExperienceSection = () => {
	return (
		<div className="grid grid-cols-2 gap-6 p-10 justify-center items-center">
			<div className="bg-sky-100 py-10 px-20 rounded-2xl shadow-xl space-y-6">
				<div className="grid grid-cols-3 pb-3 items-center justify-center">
					<h1 className="text-9xl font-semibold">25</h1>
					<div className="text-4xl col-span-2">
						<h2>Years Of</h2>
						<h2>Experiencef</h2>
					</div>
				</div>
				<div>
					<p className="text-xl">Business consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency</p>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-6">
				<div className="text-center space-y-3 px-10 py-8 bg-base-300/90 rounded-xl shadow-xl">
					<h1 className="text-4xl font-semibold">20k+</h1>
					<p className="text-xl">Our Project Complete</p>
				</div>
				<div className="text-center space-y-3 px-10 py-8 bg-base-300/90 rounded-xl shadow-xl">
					<h1 className="text-4xl font-semibold">20k+</h1>
					<p className="text-xl">Our Project Complete</p>
				</div>
				<div className="text-center space-y-3 px-10 py-8 bg-base-300/90 rounded-xl shadow-xl">
					<h1 className="text-4xl font-semibold">20k+</h1>
					<p className="text-xl">Our Project Complete</p>
				</div>
				<div className="text-center space-y-3 px-10 py-8 bg-base-300/90 rounded-xl shadow-xl">
					<h1 className="text-4xl font-semibold">20k+</h1>
					<p className="text-xl">Our Project Complete</p>
				</div>


			</div>
		</div>
	);
};

export default ExperienceSection;