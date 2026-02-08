import React from 'react';
import Layout from "../../layout/Layout.jsx";
import middleBanner from "../../assets/middleBanner.svg"
import WhatIdoSection from "../../components/WhatIdoSection.jsx";
import TestimonialSection from "../../components/TestimonialSection.jsx";
import SkillProficiencySection from "../../components/SkillProficiencySection.jsx";
import ContactForm from "../../components/ContactForm.jsx";
import UserStore from "../../store/userStore.js";
import ContactInfo from "../../components/ContactInfo.jsx";
import BlogSection from "../../components/BlogSection.jsx";
import HeroSection from "../../components/HeroSection.jsx";
import FAQSection from "../../components/FAQSection.jsx";
import ProjectSection from "../../components/ProjectSection.jsx";

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

			<div className="my-12 lg:my-16 px-4 lg:px-8 max-w-6xl mx-auto">
				<div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl py-12 lg:py-14">
					{isLogin() ? <ContactForm /> : <ContactInfo />}
				</div>
			</div>

		</Layout>
	);
};

export default HomePage;