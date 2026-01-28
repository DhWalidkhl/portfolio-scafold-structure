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
        <div className="container mx-auto px-6">
            <h1 className="text-sky-700 text-center font-semibold text-5xl py-20">My Projects</h1>
            {projects.length === 0 && (
                <div className="grid grid-cols-3 gap-6">
                    {Array.from({length: 6}).map((_, i) => (
                        <div key={i}>
                            <Skeleton height={200}/>
                            <Skeleton width={200}/>
                            <Skeleton count={2}/>
                        </div>
                    ))}
                </div>
            )}

            {projects.length > 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-10">
                    {projectForDisplay.map(project => (
                        <div key={project._id} className="card bg-base-100 shadow-sm">
                            <figure>
                                <img src={project.img} alt={project.title}/>
                            </figure>

                            <div className="card-body">
                                <h2 className="card-title">{project.title}</h2>
                                <p>{project.des}</p>

                                <div className="card-actions justify-end">
                                    <Link
                                        to={`/portfolio/projects/${project._id}`}
                                        className="btn btn-outline btn-info"
                                    >
                                        See Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {projects.length > 4 && (
                <Link
                    className="flex items-center justify-center mt-10 btn btn-outline btn-info w-1/2 lg:w-1/6 mx-auto"
                    to="/portfolio/projects"
                >
                    See All Projects <LiaLongArrowAltRightSolid/>
                </Link>
            )}
        </div>
    );

};

export default ProjectSection;