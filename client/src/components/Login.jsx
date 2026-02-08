import React from 'react';
import {Link} from "react-router-dom";
import UserStore from "../store/userStore.js";
import {useNavigate} from "react-router-dom";
import swal from 'sweetalert';


const Login = () => {
	let {LoginFormOnChange, LoginFormData, UserLoginRequest} = UserStore()
	const navigate = useNavigate();
	const handleLogin = async (e) => {
		e.preventDefault()
		try {
			const loginResult = await UserLoginRequest(LoginFormData)
            console.log(loginResult)
            if (loginResult.status === "fail") {
                swal(loginResult.message);
                return;
            }
			e.target.reset()
			document.getElementById('my_modal_3').close()
			navigate("/dashboard")

		}catch (e) {
			console.log(e)
            document.getElementById('my_modal_3').close()
            swal("Oops!", e?.response?.data?.message, "error");
		}
	}

	return (
		<div>
			{/* You can open the modal using document.getElementById('ID').showModal() method */}
			<button className="btn bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white border-0 font-medium rounded-lg px-5" onClick={() => document.getElementById('my_modal_3').showModal()}>Login / Register</button>
			<dialog id="my_modal_3" className="modal">
				<div className="modal-box bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100">
					<form method="dialog">
						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-slate-600 dark:text-slate-400">✕</button>
					</form>
					<div>
						<div className="w-full max-w-md p-8 space-y-3 rounded-xl">
							<h1 className="lg:text-2xl text-xl lg:font-bold text-center text-slate-900 dark:text-slate-100">Login</h1>
							<form onSubmit={handleLogin} className="space-y-6">
								<div className="space-y-1 text-sm">
									<label htmlFor="email" className="block text-slate-900 dark:text-slate-300">Username</label>
									<input onChange={(e) => {
										LoginFormOnChange("email", e.target.value)
									}} type="text" id="email" placeholder="email"
									       className="w-full px-4 py-3 rounded-md border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-200 focus:border-violet-400 dark:focus:border-violet-500"/>
								</div>
								<div className="space-y-1 text-sm">
									<label htmlFor="password" className="block text-slate-900 dark:text-slate-300">Password</label>
									<input onChange={(e) => {
										LoginFormOnChange("password", e.target.value)
									}} type="password" id="password" placeholder="Password"
									       className="w-full px-4 py-3 rounded-md border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-200 focus:border-violet-400 dark:focus:border-violet-500"/>
									<div className="flex justify-end text-xs text-gray-400 dark:text-slate-500">
										<Link rel="noopener noreferrer" to="/forget-pass" className="dark:text-slate-400">Forgot Password?</Link>
									</div>
								</div>
								<button
									className="w-full p-3 text-white font-bold text-center rounded-sm btn btn-info text-lg">Login
								</button>
							</form>
							<p className="text-md text-center sm:px-6 text-gray-400 dark:text-slate-500">Don't have an account?
								<Link to={"/signup"} rel="noopener noreferrer" className="underline ml-2 text-sky-600 dark:text-sky-400">Register Now</Link>
							</p>
						</div>
					</div>
				</div>
			</dialog>
		</div>
	);
};

export default Login;