import React from 'react';
import bgImg from "../assets/owner_img.png";
import {SiExpress, SiMongodb, SiReact} from "react-icons/si";
import {FaNodeJs} from "react-icons/fa";
import {Link} from "react-router-dom";
import OwnerImg from "../assets/owner_img_2.png";

const HeroSection = () => {
	return (
		<div>
			<div style={{backgroundImage: `url(${bgImg})`}} className="pt-15 bg-cover bg-center">
				<div
					className="flex container px-5 mx-auto flex-col lg:flex-row gap-16 items-center justify-center min-h-screen">

					<img
						alt="Owner image"
						src={OwnerImg}
						className="max-h-screen lg:min-w-lg md:min-w-md rounded-3xl order-first lg:order-last"
					/>

					<div className="space-y-5 lg:pr-22">
						<h1 className="text-xl font-semibold uppercase">hello</h1>
						<div>
							<h1 className="text-4xl font-bold">I'm Delowar Hossain Walid</h1>
							<h1 className="text-3xl font-bold">
								A <span className="text-sky-600">MERN Stack Web Developer</span>
							</h1>
						</div>
						<div className="flex lg:gap-16 gap-6 py-3">
							<div className="flex flex-col items-center">
								<SiMongodb className="lg:text-6xl text-5xl" style={{color: "#13AA52"}}/>
								<p className="text-xs">MongoDB</p>
							</div>
							<div className="flex flex-col items-center">
								<SiExpress className="lg:text-6xl text-5xl"/>
								<p className="text-xs">Express</p>
							</div>
							<div className="flex flex-col items-center">
								<SiReact className="lg:text-6xl text-5xl" style={{color: "#61DAFB"}}/>
								<p className="text-xs">React</p>
							</div>
							<div className="flex flex-col items-center">
								<FaNodeJs className="lg:text-6xl text-5xl" style={{color: "#339933"}}/>
								<p className="text-xs">Node.js</p>
							</div>
						</div>
						<div className="pb-3">
							<p>
								Building dynamic web experiences with MongoDB, Express, React, and Node — from concept
								to code.
							</p>
							<p>
								Let me know your ideas. I will build for you with my expertise.
							</p>
						</div>
						<div className="flex gap-4 items-center pb-5 lg:pb-0">
							<Link to="/contact" className="btn btn-primary text-lg p-7 rounded-full">Hire Me</Link>
							<Link className="btn btn-outline btn-info text-lg p-7 rounded-full"
							      to="/portfolio/education">
								Know me
							</Link>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
};

export default HeroSection;