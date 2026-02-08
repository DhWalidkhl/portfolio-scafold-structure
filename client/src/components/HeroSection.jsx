import React from 'react';
import bgImg from '../assets/owner_img.png';
import { SiExpress, SiMongodb, SiReact } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import OwnerImg from '../assets/owner_img_2.png';

const HeroSection = () => {
	return (
		<div>
			<div
				style={{ backgroundImage: `url(${bgImg})` }}
				className="pt-28 lg:pt-20 md:pt-24 bg-cover bg-center bg-slate-100 dark:bg-slate-800/90"
			>
				<div className="flex container px-4 mx-auto flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-center min-h-screen max-w-6xl">
					<img
						src={OwnerImg}
						alt="Portrait of Delowar Hossain Walid"
						className="aspect-[3/4] max-h-[70vh] lg:max-w-md rounded-2xl object-cover shadow-xl order-first lg:order-last border border-slate-200/50 dark:border-slate-600/50"
					/>
					<div className="space-y-6 lg:pr-4 text-center lg:text-left">
						<div className="inline-flex items-center gap-2 bg-slate-800 dark:bg-slate-700 text-white px-4 py-2 rounded-full text-sm font-medium tracking-wide shadow-sm">
							<span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
							Welcome to my portfolio
						</div>
						<p className="text-2xl sm:text-3xl font-semibold text-slate-700 dark:text-slate-300 tracking-tight">Hello, I'm</p>
						<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
							Delowar Hossain Walid
						</h1>
						<h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-700 dark:text-slate-300">
							A{' '}
							<span className="text-blue-600 dark:text-blue-400">
								MERN Stack Web Developer
							</span>
						</h2>
						<div className="flex justify-center lg:justify-start gap-8 py-4">
							<div className="flex flex-col items-center gap-1">
								<SiMongodb className="text-4xl lg:text-5xl text-[#13AA52]" />
								<span className="text-xs font-medium text-slate-600 dark:text-slate-400">MongoDB</span>
							</div>
							<div className="flex flex-col items-center gap-1">
								<SiExpress className="text-4xl lg:text-5xl text-slate-700 dark:text-slate-400" />
								<span className="text-xs font-medium text-slate-600 dark:text-slate-400">Express</span>
							</div>
							<div className="flex flex-col items-center gap-1">
								<SiReact className="text-4xl lg:text-5xl text-[#61DAFB]" />
								<span className="text-xs font-medium text-slate-600 dark:text-slate-400">React</span>
							</div>
							<div className="flex flex-col items-center gap-1">
								<FaNodeJs className="text-4xl lg:text-5xl text-[#339933]" />
								<span className="text-xs font-medium text-slate-600 dark:text-slate-400">Node.js</span>
							</div>
						</div>
						<div className="space-y-2 max-w-lg mx-auto lg:mx-0">
							<p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
								Building dynamic web experiences with MongoDB, Express, React, and Node — from concept to code.
							</p>
							<p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
								Share your ideas; I'll build them with care and expertise.
							</p>
						</div>
						<div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2">
							<Link
								to="/contact"
								className="btn bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white border-0 rounded-lg px-6 font-medium shadow-sm"
							>
								Hire Me
							</Link>
							<Link
								to="/portfolio/projects"
								className="btn btn-outline border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg px-6 font-medium"
							>
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