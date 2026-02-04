import React from 'react';
import Layout from "../layout/Layout.jsx";
import middleBanner from "../assets/middleBanner.svg"
import WhatIdoSection from "../components/WhatIdoSection.jsx";
import TestimonialSection from "../components/TestimonialSection.jsx";
import SkillProficiencySection from "../components/SkillProficiencySection.jsx";
import ContactForm from "../components/ContactForm.jsx";
import UserStore from "../store/userStore.js";
import ContactInfo from "../components/ContactInfo.jsx";
import BlogSection from "../components/BlogSection.jsx";
import HeroSection from "../components/HeroSection.jsx";
import FAQSection from "../components/FAQSection.jsx";
import ProjectSection from "../components/ProjectSection.jsx";

const HomePage = () => {
	let {isLogin} = UserStore()
	return (
		<Layout>

			<HeroSection></HeroSection>
			<WhatIdoSection></WhatIdoSection>
			<SkillProficiencySection></SkillProficiencySection>
			<img className="w-full" alt="Banner Image" src={middleBanner}/>
			<ProjectSection></ProjectSection>
			<FAQSection></FAQSection>
            <BlogSection></BlogSection>
			<TestimonialSection></TestimonialSection>

			<div className="my-10 lg:px-30 px-10">
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