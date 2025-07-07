import React from 'react';
import SectionHeading from "../components/SectionHeading.jsx";
import Login from "../components/Login.jsx";

const SignUpPage = () => {
	return (
		<>
			<SectionHeading headingBig="register now" headingSmall="Welcome to the comunity"/>
			<h1 className="container mx-auto text-center text-sm md:text-3xl p-6 md:py-8">After Signing up you will able to write blog, comment on blog !! Enjoy it now!</h1>
			<div className="container mx-auto">
				<div className="w-full p-8 md:py-8 md:px-36 space-y-3 rounded-xl text-gray-900">
					<form noValidate="" action="" className="space-y-6">
						<div className="space-y-1 text-sm">
							<label htmlFor="username" className="block text-gray-900">Username</label>
							<input type="text" name="username" id="username" placeholder="Username"
							       className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-gray-900 focus:border-violet-400"/>
						</div>
						<div className="space-y-1 text-sm">
							<label htmlFor="password" className="block text-gray-900">Password</label>
							<input type="password" name="password" id="password" placeholder="Password"
							       className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-gray-900 focus:border-violet-400"/>
							<div className="flex justify-end text-xs text-gray-400">
								<a rel="noopener noreferrer" href="#">Forgot Password?</a>
							</div>
						</div>
						<button
							className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">Sign
							Up
						</button>
					</form>
					<div className="flex itmes-center justify-center">
						<p className="text-center sm:px-6 text-gray-400">Already have an account?</p>
						<Login></Login>
					</div>
				</div>
			</div>
		</>
	);
};

export default SignUpPage;