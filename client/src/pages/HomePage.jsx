import React from 'react';
import Layout from "../layout/Layout.jsx";
import GetintouchButton from "../components/GetintouchButton/GetintouchButton.jsx";
import OwnerImg from "../assets/owner_img.jpeg"
import WhatIdoSection from "../components/WhatIdoSection.jsx";
import {Link} from "react-router-dom";
import TestimonialSection from "../components/TestimonialSection.jsx";
import SkillProficiencySection from "../components/SkillProficiencySection.jsx";
import ContactForm from "../components/ContactForm.jsx";
import UserStore from "../store/userStore.js";
import ContactInfo from "../components/ContactInfo.jsx";
import { SiMongodb, SiExpress, SiReact   } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import BlogSection from "../components/BlogSection.jsx";

const HomePage = () => {
	let {isLogin} = UserStore()
	return (
		<Layout>
			<div className="flex flex-col lg:flex-row gap-16 items-center py-5">
				<div className="space-y-5 px-5">
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
						<Link to="/contact" className="btn btn-outline btn-primary text-lg p-7 rounded-full">Hire Me
						</Link>
						<Link to="/portfolio/education"><GetintouchButton title={"Know me"}></GetintouchButton></Link>
					</div>
				</div>
				<div>
					<img
						alt="Owner image"
						src={OwnerImg}
						className="max-h-screen lg:min-w-lg md:min-w-md shadow-3xl rounded-3xl"
					/>
				</div>
			</div>
			<div className="py-6">
				<WhatIdoSection></WhatIdoSection>
			</div>
			<div>
				<SkillProficiencySection></SkillProficiencySection>
			</div>

			<div>
				<BlogSection></BlogSection>
			</div>

			<div className="py-10">
				<TestimonialSection></TestimonialSection>
			</div>

			<div className="my-10">
				<div className="bg-sky-50 rounded-2xl py-12">
					{
						isLogin() ? (<ContactForm></ContactForm>) : (
							<ContactInfo></ContactInfo>
						)
					}
				</div>
			</div>

		</Layout>
	);
};

export default HomePage;