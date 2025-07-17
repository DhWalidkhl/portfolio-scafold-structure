import React from 'react';
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const SkillProficiencySection = () => {
	return (
		<div className="px-10 py-16 container mx-auto">
			<div className="lg:grid lg:grid-cols-2 gap-10 py-10">
				<div className="space-y-3 mb-5">
					<h1 className="text-2xl flex items-center text-sky-700 font-semibold">Frontend Skills <span className="ml-3"><LiaLongArrowAltRightSolid/></span></h1>
					<div>
						<h1>HTML + CSS</h1>
						<progress className="progress progress-info w-full" value="100" max="100"></progress>
					</div>
					<div>
						<h1>JavaScript</h1>
						<progress className="progress progress-info w-full" value="80" max="100"></progress>
					</div>
					<div>
						<h1>React</h1>
						<progress className="progress progress-info w-full" value="90" max="100"></progress>
					</div>
				</div>
				<div className="space-y-3">
					<h1 className="text-2xl flex items-center text-sky-700 font-semibold">Backend Skills <span
						className="ml-3"><LiaLongArrowAltRightSolid/></span></h1>
					<div>
						<h1>NodeJS</h1>
						<progress className="progress progress-info w-full" value="60" max="100"></progress>
					</div>
					<div>
						<h1>ExpressJS</h1>
						<progress className="progress progress-info w-full" value="90" max="100"></progress>
					</div>
					<div>
						<h1>Mongoose</h1>
						<progress className="progress progress-info w-full" value="70" max="100"></progress>
					</div>
				</div>


			</div>
		</div>
	);
};

export default SkillProficiencySection;