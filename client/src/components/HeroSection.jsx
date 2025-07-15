import React from 'react';
import bgImg from "../assets/owner_img.png";
import {SiExpress, SiMongodb, SiReact} from "react-icons/si";
import {FaNodeJs} from "react-icons/fa";
import {Link} from "react-router-dom";
import OwnerImg from "../assets/owner_img.svg";

const HeroSection = () => {
	return (
		<div>
			<div style={{backgroundImage: `url(${bgImg})`}} className="pt-15 bg-cover bg-center">
				<div
					className="flex container px-5 mx-auto flex-col lg:flex-row gap-16 items-center justify-center py-5 min-h-screen ">
					<div className="space-y-5">
						<h1 className="text-xl font-semibold uppercase">hello</h1>
						<div><h1 className="text-4xl font-bold">I'm Delowar Hossain Walid</h1>
							<h1 className="text-3xl font-bold">A <span
								className="text-sky-600">MERN Stack Web Developer</span>
							</h1></div>
						<div className="flex lg:gap-16 gap-6 py-3">
							<div className="flex flex-col items-center">
								<SiMongodb className="lg:text-6xl text-5xl" style={{color: "#13AA52"}}/>
								<p className="text-xs">MongoDB</p>
							</div>
							<div className="flex flex-col items-center">
								<SiExpress className="lg:text-6xl text-5xl"/>
								<p className="text-xs">MongoDB</p>
							</div>
							<div className="flex flex-col items-center">
								<SiReact className="lg:text-6xl text-5xl" style={{color: "#61DAFB"}}/>
								<p className="text-xs">MongoDB</p>
							</div>
							<div className="flex flex-col items-center">
								<FaNodeJs className="lg:text-6xl text-5xl" style={{color: "#339933"}}/>
								<p className="text-xs">MongoDB</p>
							</div>
						</div>
						<p className="pb-3">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
							exercitationem
							quasi. In deleniti eaque aut repudiandae et a id nisi.
						</p>
						<div className="flex gap-4 items-center">
							<Link to="/contact" className="btn btn-primary text-lg p-7 rounded-full">Hire Me
							</Link>
							<Link className="btn btn-outline btn-info text-lg p-7 rounded-full"
							      to="/portfolio/education">Know me</Link>
						</div>
					</div>
					<div className="min-h-screen">
						<img
							alt="Owner image"
							src={OwnerImg}
							className="max-h-screen lg:min-w-lg md:min-w-md rounded-3xl"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;