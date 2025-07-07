import React, {useEffect, useState} from 'react';
import SectionHeading from "./SectionHeading.jsx";
import {Link} from "react-router-dom";
import {projectList} from "../APIRequest/APIRequest.js";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'


const Projects = () => {
	const [projects, setProjects] = useState(null)
	useEffect(() => {
		(async () => {
			let res = await projectList()
			setProjects(res.data)
		})()
	}, []);
	return (
		<div>
			<SectionHeading headingBig="Portfolio" headingSmall="Projects"/>

				{
					projects === null ?
						(
							<div className="grid grid-cols-3 gap-6">
								<div>
									<Skeleton height={200}/>
									<Skeleton width={200}/>
									<Skeleton count={2}/>
								</div>
								<div>
									<Skeleton height={200}/>
									<Skeleton width={200}/>
									<Skeleton count={2}/>
								</div>
								<div>
									<Skeleton height={200}/>
									<Skeleton width={200}/>
									<Skeleton count={2}/>
								</div>
								<div>
									<Skeleton height={200}/>
									<Skeleton width={200}/>
									<Skeleton count={2}/>
								</div>
								<div>
									<Skeleton height={200}/>
									<Skeleton width={200}/>
									<Skeleton count={2}/>
								</div>
								<div>
									<Skeleton height={200}/>
									<Skeleton width={200}/>
									<Skeleton count={2}/>
								</div>


							</div>

						)
						:
						<div className="grid grid-cols-3 gap-4">
							{
								projects.map((project) => (
									<div key={project._id} className="card bg-base-100 shadow-sm">
										<figure>
											<img
												src={project.img}
												alt="Shoes"/>
										</figure>
										<div className="card-body">
											<h2 className="card-title">
												{project.title}
											</h2>
											<p>{project.des}</p>
											<div className="card-actions justify-end">
												<Link target={"_blank"} to={project.githubLink}
												      className="badge badge-outline">Github</Link>
												<Link target={"_blank"} to={project.liveLink}
												      className="badge badge-outline">Live</Link>
											</div>
										</div>
									</div>
								))
							}
						</div>

							}
						</div>
					);
				};

			export default Projects;