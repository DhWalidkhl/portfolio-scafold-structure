import React from 'react';
import {Link} from "react-router-dom";
import UserStore from "../store/userStore.js";
import {useNavigate} from "react-router-dom";


const Login = () => {
	let {LoginFormOnChange, LoginFormData, UserLoginRequest} = UserStore()
	const navigate = useNavigate();
	const handleLogin = async (e) => {
		e.preventDefault()
		try {
			await UserLoginRequest(LoginFormData)
			e.target.reset()
			document.getElementById('my_modal_3').close()
			window.location.reload()
			navigate("/")

		}catch (e) {
			console.log(e)
		}
	}

	return (
		<div>
			{/* You can open the modal using document.getElementById('ID').showModal() method */}
			<button className="btn btn-info text-orange-700 font-semibold rounded-full" onClick={() => document.getElementById('my_modal_3').showModal()}>Login/Register
			</button>
			<dialog id="my_modal_3" className="modal">
				<div className="modal-box">
					<form method="dialog">
						{/* if there is a button in form, it will close the modal */}
						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
					</form>
					<div>
						<div className="w-full max-w-md p-8 space-y-3 rounded-xl text-gray-900">
							<h1 className="text-2xl font-bold text-center">Login</h1>
							<form onSubmit={handleLogin} className="space-y-6">
								<div className="space-y-1 text-sm">
									<label htmlFor="email" className="block text-gray-900">Username</label>
									<input onChange={(e) => {
										LoginFormOnChange("email", e.target.value)
									}} type="text" id="email" placeholder="email"
									       className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-gray-900 focus:border-violet-400"/>
								</div>
								<div className="space-y-1 text-sm">
									<label htmlFor="password" className="block text-gray-900">Password</label>
									<input onChange={(e) => {
										LoginFormOnChange("password", e.target.value)
									}} type="password" id="password" placeholder="Password"
									       className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-gray-900 focus:border-violet-400"/>
									<div className="flex justify-end text-xs text-gray-400">
										<a rel="noopener noreferrer" href="#">Forgot Password?</a>
									</div>
								</div>
								<button
									className="w-full p-3 text-white font-bold text-center rounded-sm btn btn-info text-lg">Login
								</button>
							</form>
							<p className="text-md text-center sm:px-6 text-gray-400">Don't have an account?
								<Link to={"/signup"} rel="noopener noreferrer" className="underline ml-2 text-sky-600">Register Now</Link>
							</p>
						</div>
					</div>
				</div>
			</dialog>
		</div>
	);
};

export default Login;