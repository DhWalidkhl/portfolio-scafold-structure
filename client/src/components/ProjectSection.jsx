import React, {useEffect, useState} from 'react';
import {projectList} from "../APIRequest/APIRequest.js";
import Skeleton from "react-loading-skeleton";
import {Link} from "react-router-dom";
import {LiaLongArrowAltRightSolid} from "react-icons/lia";

const ProjectSection = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        ( async () => {
            let res = await  projectList()
            setProjects(res.data)
        })()
    }, []);

    const projectForDisplay = projects.slice(0, 4);

    return (
        <div className="container mx-auto px-4 py-16 lg:py-20 max-w-6xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 text-center mb-12">My Projects</h2>
            {projects.length === 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                            <Skeleton height={200} />
                            <div className="p-4">
                                <Skeleton width="70%" height={24} />
                                <Skeleton count={2} className="mt-2" />
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {projects.length > 0 && (
                <>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {projectForDisplay.map((project) => (
                            <article key={project._id} className="card bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                <figure className="overflow-hidden">
                                    <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
                                </figure>
                                <div className="card-body p-5">
                                    <h3 className="card-title text-slate-900 dark:text-slate-100 text-lg font-semibold">{project.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2">{project.des}</p>
                                    <div className="card-actions justify-end mt-3">
                                        <Link
                                            to={`/portfolio/projects/${project._id}`}
                                            className="btn btn-sm bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white border-0 rounded-lg"
                                        >
                                            See Details
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                    {projects.length > 4 && (
                        <div className="flex justify-center mt-10">
                            <Link
                                to="/portfolio/projects"
                                className="btn btn-outline border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg gap-2"
                            >
                                See All Projects <LiaLongArrowAltRightSolid className="text-lg" />
                            </Link>
                        </div>
                    )}
                </>
            )}
        </div>
    );

};

export default ProjectSection;