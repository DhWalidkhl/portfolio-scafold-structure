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

const HomePage = () => {
	let {isLogin} = UserStore()
	return (
		<Layout>
			<div className="flex flex-col lg:flex-row gap-16 items-center py-5">
				<div className="space-y-5 px-5">
					<h1 className="text-2xl font-semibold uppercase">hello</h1>
					<div><h1 className="text-4xl font-bold">I'm Delowar Hossain Walid</h1>
						<h1 className="text-3xl font-bold">A <span
							className="text-sky-600">MERN Stack Web Developer</span>
						</h1></div>
					<div className="flex gap-2 py-3">
						<div className="rounded-full bg-green-500">
							<h1 className="text-white font-bold py-6 px-1">MongoDB</h1>
						</div>
						<div className="rounded-full bg-gray-200">
							<h1 className="text-black font-bold py-6 px-1">ExpressJS</h1>
						</div>
						<div className="rounded-full bg-sky-600">
							<h1 className="text-white font-bold py-6 px-5">React</h1>
						</div>
						<div className="rounded-full bg-green-500">
							<h1 className="text-white font-bold py-6 px-2">NodeJS</h1>
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
			<div className="py-10">
				<TestimonialSection></TestimonialSection>
			</div>
			<div>
				<SkillProficiencySection></SkillProficiencySection>
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