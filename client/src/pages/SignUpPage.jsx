import React from 'react';
import swal from 'sweetalert';
import SectionHeading from "../components/SectionHeading.jsx";
import Layout from "../layout/Layout.jsx";
import userStore from "../store/userStore.js";
import {Link, useNavigate} from "react-router-dom";


const SignUpPage = () => {
	let {FileUploading,LoginFormData, LoginFormOnChange, FileUploadOnChange, FileUploadError, ImageName,imagePublicId, UserSignUpRequest} = userStore()
	const navigate = useNavigate();
	const handleSignUp = async (e) => {
		e.preventDefault();

		const signUpData = { ...LoginFormData, img: ImageName, imagePublicId: imagePublicId };



        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        if (!passwordRegex.test(LoginFormData.password)) {
            swal("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.");
            return;
        }

		try {
			await UserSignUpRequest(signUpData);
			sessionStorage.setItem("email", LoginFormData.email);
			e.target.reset();
			navigate("/otp");
		} catch (error) {
			console.error("Sign up failed:", error);
			window.alert("Something went wrong during sign up. Please try again.");
		}
	};
	return (
		<Layout>
<div className="pt-16 pb-10">
	<SectionHeading headingBig="register now" headingSmall="Welcome to the comunity"/>
	<section className="p-6 text-xl text-gray-900">
		<form onSubmit={handleSignUp} noValidate="" action="" className="container text-xl flex flex-col mx-auto space-y-12">
			<fieldset className="grid text-xl grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
				<div className="space-y-2 col-span-full lg:col-span-1">
					<p className="text-2xl font-semibold">Hi,</p>
					<p className="text-dm">After Signing up you will able
						to write blog, comment on blog !! Enjoy it now!</p>
				</div>
				<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
					<div className="col-span-full sm:col-span-3">
						<label htmlFor="firstname">First name</label>
						<input onChange={(e) => LoginFormOnChange("firstName", e.target.value)} id="firstname"
							   type="text" placeholder="First name"
							   className="w-full rounded-md input input-info" required/>
					</div>
					<div className="col-span-full sm:col-span-3">
						<label htmlFor="lastname">Last name</label>
						<input onChange={(e) => LoginFormOnChange("lastName", e.target.value)} id="lastname"
							   type="text" placeholder="Last name"
							   className="w-full input input-info" required/>
					</div>
					<div className="col-span-full sm:col-span-3">
						<label htmlFor="email">Email</label>
						<input onChange={(e) => LoginFormOnChange("email", e.target.value)} id="email"
							   type="email" placeholder="Email"
							   className="w-full rounded-md input input-info" data-temp-mail-org="0" required/>
					</div>
					<div className="col-span-full sm:col-span-3">
						<label htmlFor="password">Password</label>
						<input onChange={(e) => LoginFormOnChange("password", e.target.value)} id="password"
							   type="password" placeholder="Password"
							   className="w-full rounded-md input input-info" data-temp-mail-org="0" required/>
					</div>
					<div className="col-span-full sm:col-span-3">
						<label htmlFor="mobile">Mobile Number</label>
						<input onChange={(e) => LoginFormOnChange("mobile", e.target.value)} id="mobile"
							   type="number" placeholder="Mobile Number"
							   className="w-full rounded-md input input-info" data-temp-mail-org="0" required/>
					</div>
					<div className="col-span-full sm:col-span-3">
						<legend className="fieldset-legend text-sm">Profile Photo</legend>
						<input onChange={FileUploadOnChange} type="file" className="file-input w-full" required/>
						<div className="flex">

                            {FileUploadError ? (
                                <p className="text-red-500 text-sm mt-1">{FileUploadError}</p>
                            ) : <label className="label text-sm">Max size 2MB (JPG, JPEG or PNG file)</label>}
                        </div>

					</div>
					<div className="col-span-full sm:col-span-3">
                        <button
                            type="submit"
                            disabled={FileUploading}
                            className="btn btn-dash btn-info text-lg w-full"
                        >
                            {FileUploading ? "Uploading..." : "Sign Up"}
                        </button>
					</div>
					<div className=" col-span-full sm:col-span-3">
						<Link disabled={FileUploading} className="btn btn-soft btn-primary w-full text-lg" to="/">Home</Link>
					</div>

				</div>
			</fieldset>

		</form>
	</section>
</div>
		</Layout>
	);

};

export default SignUpPage;