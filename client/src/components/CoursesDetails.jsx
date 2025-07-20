import React, {useEffect, useState} from 'react';
import {courseList} from "../APIRequest/APIRequest.js";
import 'react-loading-skeleton/dist/skeleton.css'
import CourseDetailsSkeleton from "../skeleton/CourseDetailsSkeleton.jsx";

const CoursesDetails = () => {
	const [courses, setCourses] = useState(null)
	useEffect(() => {
		(async () => {
			let res = await courseList()
			console.log(res.data)
			setCourses(res.data)
		})()
	}, []);
	return (
		<div className="container mx-auto text-center">
			<section className="pt-3">

					{
						courses === null ?
							<div className="px-50">
								<CourseDetailsSkeleton/>
								<CourseDetailsSkeleton/>
								<CourseDetailsSkeleton/>
							</div>
							:

								<ul className="timeline timeline-vertical pt-10">
									{
										courses.map((course) => (
											<ul className="p-4 lg:p-8 bg-gray-50 rounded-2xl">
												<li>
													<article>
														<div rel="noopener noreferrer"
															 className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:bg-gray-900 hover:text-white">
															<h3 className="mb-1 lg:text-3xl ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">{course['courseName']}</h3>
															<time dateTime={new Date(course.startingDate).toISOString()}
																  className="row-start-1 lg:text-xl mb-1 md:col-start-1 xl:col-span-2 text-gray-500">
																{new Date(course.startingDate).toLocaleDateString('en-GB', {
																	day: '2-digit',
																	month: 'short',
																	year: 'numeric',
																})}
															</time>
															<p className="ml-8 md:col-start-2 lg:text-xl md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0">                                                                {course['instituteName']}
															</p>
														</div>
													</article>
												</li>
											</ul>
										))
									}
								</ul>


					}

			</section>
		</div>
	);
};

export default CoursesDetails;