import React from 'react';
import './PreLoaderSpinner.css'

const PreLoadingSpinner = () => {
	return (
		<div className="min-h-screen flex flex-col gap-4 justify-center items-center">
			<div className="text-center text-5xl font-semibold">
				D H Walid
			</div>
			<section className="dots-container">
				<div className="dot"></div>
				<div className="dot"></div>
				<div className="dot"></div>
				<div className="dot"></div>
				<div className="dot"></div>
			</section>

		</div>

	);
};

export default PreLoadingSpinner;