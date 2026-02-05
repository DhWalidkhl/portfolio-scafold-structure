import React, {useEffect} from 'react';
import Layout from "../../layout/Layout.jsx";
import {useParams} from "react-router-dom";
import ProjectStore from "../../store/ProjectStore.js";

const ProjectDetailPage = () => {

	const { ProjectID } = useParams();
	const { SingleProject, ProjectDetailsRequest } = ProjectStore();

	useEffect(() => {
		if (ProjectID) {
			ProjectDetailsRequest(ProjectID);
		}
	}, [ProjectID]);

	if (!SingleProject) {
		return (
			<Layout>
				<div className="mt-20 text-center">Loading Project details...</div>
			</Layout>
		);
	}

	const createdAt = new Date(SingleProject.createdAt).toLocaleDateString();
	const updatedAt = new Date(SingleProject.updatedAt).toLocaleDateString();


	return (
		<Layout>
			<div className="mt-30 container mx-auto px-5">
				<div className="space-y-3 mx-auto">
					<div className="lg:flex lg:justify-between items-start gap-4 flex-wrap">
						<h1 className="text-3xl font-bold">{SingleProject.title}</h1>
						<div>

							<p className="text-xs text-gray-400">Published on {createdAt}</p>
							<p className="text-xs text-gray-400">Updated on {updatedAt}</p>
						</div>
					</div>
					<img src={SingleProject.img} alt={SingleProject.title} className="w-full max-h-screen mt-4 rounded"/>
					<p className="mt-6 leading-relaxed">{SingleProject.des}</p>
					<div className="flex gap-4 mt-6">
						<a href={SingleProject.liveLink} target="_blank" className="btn btn-sm btn-primary">Live</a>
						<a href={SingleProject.githubLink} target="_blank" className="btn btn-sm btn-outline">GitHub</a>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default ProjectDetailPage;