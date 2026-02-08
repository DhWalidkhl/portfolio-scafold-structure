import React from 'react';

const SectionHeading = ({ headingBig, headingSmall }) => {
	return (
		<div className="relative flex flex-col items-center justify-center py-8 lg:py-10">
			<span className="absolute text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-200/80 dark:text-slate-600/80 uppercase tracking-tighter select-none pointer-events-none" aria-hidden>
				{headingBig}
			</span>
			<div className="relative z-10 flex flex-col items-center">
				<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 text-center">
					{headingSmall}
				</h2>
				<span className="mt-2 h-0.5 w-16 sm:w-20 bg-blue-600 dark:bg-blue-500 rounded-full" />
			</div>
		</div>
	);
};

export default SectionHeading;