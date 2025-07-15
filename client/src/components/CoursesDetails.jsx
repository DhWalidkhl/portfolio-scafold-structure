import React, {useEffect, useState} from 'react';
import SectionHeading from "./SectionHeading.jsx";
import {courseList} from "../APIRequest/APIRequest.js";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const CoursesDetails = () => {
	const [courses, setCourses] = useState(null)
	useEffect(() => {
		(async () => {
			let res = await courseList()
			setCourses(res.data)
		})()
	}, []);
	return (
		<div>
			<section className="pt-3">
				<ul className="timeline timeline-vertical pt-10">
					{
						courses === null ?
							<div className="flex flex-col gap-6">
								<div className="flex w-full px-16 flex-row gap-4">
									<Skeleton/>
									<Skeleton/>
								</div>
								<div className="flex w-full px-16 flex-row gap-4">
									<div className="skeleton h-4 w-full"></div>
									<div className="skeleton h-4 w-16"></div>
									<div className="skeleton h-4 w-full"></div>
								</div>
								<div className="flex w-full px-16 flex-row gap-4">
									<div className="skeleton h-4 w-full"></div>
									<div className="skeleton h-4 w-16"></div>
									<div className="skeleton h-4 w-full"></div>
								</div>
							</div>
							:
							courses.map((course) => (
								<li key={course._id}>
									<div
										className="timeline-start px-32 text-3xl">{new Date(course['endingDate']).toLocaleDateString()}</div>
									<div className="timeline-middle">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											className="h-6 w-32"
										>
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
									<div className="timeline-end px-16 timeline-box space-y-3 text-center">
										<h1 className="text-2xl">{course['courseName']}</h1>
										<h2 className="text-xl">from {course['instituteName']}</h2>
									</div>
									<hr/>
								</li>
							))
					}
				</ul>
			</section>
		</div>
	);
};

export default CoursesDetails;