import React from 'react';
import Layout from "../layout/Layout.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ContactForm from "../components/ContactForm.jsx";
import UserStore from "../store/userStore.js";
import ContactInfo from "../components/ContactInfo.jsx";


const ContactPage = () => {
	let {isLogin} = UserStore()
	return (
		<Layout>
<div className="pt-16">
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

export default ContactPage;