import React from 'react';
import Layout from "../../layout/Layout.jsx";
import ContactForm from "../../components/ContactForm.jsx";
import UserStore from "../../store/userStore.js";
import ContactInfo from "../../components/ContactInfo.jsx";
import PageTitle from "../../components/PageTitle.jsx";


const ContactPage = () => {
	let {isLogin} = UserStore()
	return (
		<Layout>
			<PageTitle title={"Walid | Contact"}/>
			<div className="min-h-screen justify-center flex items-center">
				{
					isLogin() ? (<ContactForm/>) : (
						<ContactInfo/>
					)
				}

			</div>
		</Layout>
	);
};

export default ContactPage;