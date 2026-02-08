import React from 'react';
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const SkillProficiencySection = () => {
	return (
		<div className="container mx-auto px-4 py-16 lg:py-20 max-w-6xl">
			<div className="lg:grid lg:grid-cols-2 gap-12 lg:gap-16 py-6">
				<div className="space-y-5">
					<h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
						Frontend Skills <LiaLongArrowAltRightSolid className="text-slate-500 dark:text-slate-400" />
					</h2>
					<div className="space-y-4">
						<div>
							<div className="flex justify-between text-sm mb-1"><span className="font-medium text-slate-700 dark:text-slate-300">HTML + CSS</span><span className="text-slate-500 dark:text-slate-400">100%</span></div>
							<progress className="progress progress-primary w-full h-2 rounded-full" value="100" max="100" />
						</div>
						<div>
							<div className="flex justify-between text-sm mb-1"><span className="font-medium text-slate-700 dark:text-slate-300">JavaScript</span><span className="text-slate-500 dark:text-slate-400">80%</span></div>
							<progress className="progress progress-primary w-full h-2 rounded-full" value="80" max="100" />
						</div>
						<div>
							<div className="flex justify-between text-sm mb-1"><span className="font-medium text-slate-700 dark:text-slate-300">React</span><span className="text-slate-500 dark:text-slate-400">90%</span></div>
							<progress className="progress progress-primary w-full h-2 rounded-full" value="90" max="100" />
						</div>
					</div>
				</div>
				<div className="space-y-5">
					<h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
						Backend Skills <LiaLongArrowAltRightSolid className="text-slate-500 dark:text-slate-400" />
					</h2>
					<div className="space-y-4">
						<div>
							<div className="flex justify-between text-sm mb-1"><span className="font-medium text-slate-700 dark:text-slate-300">Node.js</span><span className="text-slate-500 dark:text-slate-400">60%</span></div>
							<progress className="progress progress-primary w-full h-2 rounded-full" value="60" max="100" />
						</div>
						<div>
							<div className="flex justify-between text-sm mb-1"><span className="font-medium text-slate-700 dark:text-slate-300">Express</span><span className="text-slate-500 dark:text-slate-400">90%</span></div>
							<progress className="progress progress-primary w-full h-2 rounded-full" value="90" max="100" />
						</div>
						<div>
							<div className="flex justify-between text-sm mb-1"><span className="font-medium text-slate-700 dark:text-slate-300">Mongoose</span><span className="text-slate-500 dark:text-slate-400">70%</span></div>
							<progress className="progress progress-primary w-full h-2 rounded-full" value="70" max="100" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkillProficiencySection;