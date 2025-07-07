import React from 'react';

const SectionHeading = ({headingBig, headingSmall}) => {
	return (
		<div>
			<div className="text-center heading flex justify-center items-center">
				<div className="py-6 relative z-0">
					<h1 className="uppercase font-bold opacity-5 xl:text-8xl lg:text-8xl text-5xl decoration-sky-500/30">
						{headingBig}
					</h1>
				</div>
				<div className="heading-1 absolute  flex flex-col justify-center">
					<h2 className="md:text-3xl text-3xl lg:text-4xl xl:text-4xl">{headingSmall}</h2>
					<span style={{height: "2px"}} className="text-center mx-auto bg-teal-600  w-5/12 mt-1"></span>
				</div>
			</div>
		</div>
	);
};

export default SectionHeading;