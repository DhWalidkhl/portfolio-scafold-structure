import React, {useEffect, useState} from 'react';
import {educationList} from "../APIRequest/APIRequest.js";
import SectionHeading from "./SectionHeading.jsx";

const EducationDetails = () => {
	const [educations, setEducations] = useState(null)
	useEffect(() => {
		(async () => {
			let res = await educationList()
			setEducations(res.data)
		})()
	}, []);
	return (
		<div>
			<section className="pt-3">
				<div className="container max-w-5xl px-4 pt-6 mx-auto">
					<div className="grid gap-4 mx-4 sm:grid-cols-12">
						<div className="col-span-12 sm:col-span-3">
							<div
								className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-400">
								<h3 className="text-3xl font-semibold">Education</h3>
								<span className="text-sm font-bold tracking-wider uppercase text-gray-400">of Delowar Hossain Walid</span>
							</div>
						</div>
						<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
							<div
								className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
								{
									educations === null ?
										<div>
											<div className="flex w-52 flex-col gap-4">
												<div className="skeleton h-4 w-28"></div>
												<div className="skeleton h-4 w-full"></div>
												<div className="skeleton h-4 w-full"></div>
											</div>
											<br/>
											<div className="flex w-52 flex-col gap-4">
												<div className="skeleton h-4 w-28"></div>
												<div className="skeleton h-4 w-full"></div>
												<div className="skeleton h-4 w-full"></div>
											</div>
											<br/>
											<div className="flex w-52 flex-col gap-4">
												<div className="skeleton h-4 w-28"></div>
												<div className="skeleton h-4 w-full"></div>
												<div className="skeleton h-4 w-full"></div>
											</div>
										</div>

										:
										educations.map((education) => (
											<div key={education._id}
											     className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
												<h3 className="text-xl font-semibold tracking-wide">{education.degree} </h3>
												<time
													className="text-xs tracking-wide uppercase text-gray-400">{education.startingYear} - {education.endingYear}
												</time>
												<h4><span
													className="font-bold text-lg">University/Board:</span> {education.university}
												</h4>
												<p className="mt-3">{education.subject}</p>
											</div>
										))
								}
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default EducationDetails;