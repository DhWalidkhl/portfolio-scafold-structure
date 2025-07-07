import React from 'react';
import SectionHeading from "../components/SectionHeading.jsx";
import Layout from "../layout/Layout.jsx";

const SignUpPage = () => {
	return (
		<Layout>
			<SectionHeading headingBig="register now" headingSmall="Welcome to the comunity"/>

			<section className="p-6 text-xl text-gray-900">
				<form noValidate="" action="" className="container text-xl flex flex-col mx-auto space-y-12">
					<fieldset className="grid text-xl grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
						<div className="space-y-2 col-span-full lg:col-span-1">
							<p className="text-2xl font-semibold">Hi,</p>
							<p className="text-dm">After Signing up you will able
								to write blog, comment on blog !! Enjoy it now!</p>
						</div>
						<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
							<div className="col-span-full sm:col-span-3">
								<label htmlFor="firstname">First name</label>
								<input id="firstname" type="text" placeholder="First name"
								       className="w-full rounded-md input input-info"/>
							</div>
							<div className="col-span-full sm:col-span-3">
								<label htmlFor="lastname">Last name</label>
								<input id="lastname" type="text" placeholder="Last name"
								       className="w-full input input-info"/>
							</div>
							<div className="col-span-full sm:col-span-3">
								<label htmlFor="email">Email</label>
								<input id="email" type="email" placeholder="Email"
								       className="w-full rounded-md input input-info" data-temp-mail-org="0"/>
							</div>
							<div className="col-span-full sm:col-span-3">
								<label htmlFor="password">Password</label>
								<input id="email" type="password" placeholder="Password"
								       className="w-full rounded-md input input-info" data-temp-mail-org="0"/>
							</div>
							<div className="w-full col-span-full">
								<legend className="fieldset-legend text-sm">Pick a file</legend>
								<input type="file" className="file-input w-full"/>
								<label className="label text-sm">Max size 2MB</label>
							</div>

							<div className="col-span-full">
								<label htmlFor="address">Address</label>
								<input id="address" type="text" placeholder=""
								       className="w-full rounded-md input input-info"/>
							</div>
							<div className="col-span-full sm:col-span-2">
								<label htmlFor="city">City</label>
								<input id="city" type="text" placeholder=""
								       className="w-full rounded-md input input-info"/>
							</div>
							<div className="col-span-full sm:col-span-2">
								<label htmlFor="state">State / Province</label>
								<input id="state" type="text" placeholder=""
								       className="w-full rounded-md input input-info"/>
							</div>
							<div className="col-span-full sm:col-span-2">
								<label htmlFor="zip">ZIP / Postal</label>
								<input id="zip" type="text" placeholder=""
								       className="w-full rounded-md input input-info"/>
							</div>
						</div>
					</fieldset>

				</form>
			</section>
		</Layout>
	);
};

export default SignUpPage;