import React from 'react';
import Layout from "../layout/Layout.jsx";
import GetintouchButton from "../components/GetintouchButton/GetintouchButton.jsx";
import OwnerImg from "../assets/owner_img.jpg"
import WhatIdoSection from "../components/WhatIdoSection.jsx";
import {Link} from "react-router-dom";
import TestimonialSection from "../components/TestimonialSection.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ExperienceSection from "../components/ExperienceSection.jsx";
import SkillProficiencySection from "../components/SkillProficiencySection.jsx";
import ContactForm from "../components/ContactForm.jsx";
import UserStore from "../store/userStore.js";
import ContactInfo from "../components/ContactInfo.jsx";

const HomePage = () => {
	let {isLogin} = UserStore()
	return (
		<Layout>
			<div className="flex gap-16 items-center py-5 px-10">
				<div className="space-y-5">
					<h1 className="text-5xl font-bold">I'm Delowar Hossain Walid</h1>
					<h1 className="text-4xl font-bold">A <span className="text-blue-800">MERN Stack Web Developer</span>
					</h1>
					<div className="flex gap-2 py-6">
						<div className="rounded-full bg-green-500 text-lg text-white font-semibold p-6">
							<h1>MongoDB</h1>
						</div>
						<div className="rounded-full bg-gray-200 text-lg font-semibold p-6">
							<h1>ExpressJS</h1>
						</div>
						<div className="rounded-full bg-sky-600  text-lg text-white font-semibold p-6">
							<h1>React</h1>
						</div>
						<div className="rounded-full bg-green-500 text-lg text-white font-semibold p-6">
							<h1>NodeJS</h1>
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
						src= {OwnerImg}
						className="min-w-xl max-h-screen shadow-3xl border-10 border-sky-100"
					/>
				</div>
			</div>
			<div>
				<SectionHeading headingBig="Services" headingSmall="What I Do?"></SectionHeading>
				<WhatIdoSection></WhatIdoSection>
			</div>
			<div className="py-10">
				<SectionHeading headingBig="Testimonials" headingSmall="What my Client says?"></SectionHeading>
				<TestimonialSection></TestimonialSection>
			</div>
			<div>
				<ExperienceSection></ExperienceSection>
			</div>
			<div>
				<SectionHeading headingBig="skills" headingSmall="Proficiency"/>
				<SkillProficiencySection></SkillProficiencySection>
			</div>
			<div>
				<SectionHeading headingBig="contact" headingSmall="Get in Touch"/>
				{
					isLogin() ? (<ContactForm></ContactForm>) : (
						<ContactInfo></ContactInfo>
					)
				}
			</div>

		</Layout>
	);
};

export default HomePage;