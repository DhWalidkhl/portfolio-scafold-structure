import React from 'react';
import {Link} from "react-router-dom";
import UserStore from "../store/userStore.js";


const Login = () => {
	let {LoginFormOnChange, LoginFormData, UserLoginRequest} = UserStore()
	const handleLogin = async (e) => {
		e.preventDefault()
		try {
			await UserLoginRequest(LoginFormData)
			e.target.reset()
			document.getElementById('my_modal_3').close()
			window.location.reload()
		}catch (e) {
			console.log(e)
		}
	}

	return (
		<div>
			{/* You can open the modal using document.getElementById('ID').showModal() method */}
			<button className="btn text-lg" onClick={() => document.getElementById('my_modal_3').showModal()}>Login
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
									className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">Sign
									in
								</button>
							</form>
							<p className="text-xs text-center sm:px-6 text-gray-400">Don't have an account?
								<Link to={"/signup"} rel="noopener noreferrer" className="underline text-gray-900">Sign
									up</Link>
							</p>
						</div>
					</div>
				</div>
			</dialog>
		</div>
	);
};

export default Login;