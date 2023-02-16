import React, { useState } from "react";
import { InitiateLogin, auth } from "../functions";
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {
	const [Email, setEmail] = useState("");
	const [Password, setPassword] = useState("");
	const [Error, setError] = useState("");

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};

	const handlePassword = (e) => {
		setPassword(e.target.value);
	};

	const [user, loading] = useAuthState(auth);

	if (loading) {
		return (
			<div>
				<h1>
					Please wait while we load your login
					data
				</h1>
			</div>
		);
	}

	if (!user) {
		return (
			//     <style>
			//   p {
			//     text-align: center;
			//     font-size: 1rem;
			//     font-weight: bold;
			//     color: red;
			//   }
			// </style>

			<section class="section-bg services">
				<div class="form-section">
					<div class="section-title">
						<h2>Login(For Admin only)</h2>
					</div>
					<form action="" method="post">
						<div class="form-group">
							<label for="email">
								Email address
							</label>
							<input
								type="email"
								class="form-control"
								id="email"
								name="email"
								aria-describedby="emailHelp"
								onChange={(e) =>
									handleEmail(
										e
									)
								}
							/>
						</div>
						<div class="form-group">
							<label for="password">
								Password
							</label>
							<input
								type="password"
								name="password"
								class="form-control"
								id="password"
								minlength="6"
								onChange={(e) =>
									handlePassword(
										e
									)
								}
							/>
						</div>
						<button
							type="submit"
							class="btn btn-primary"
							onClick={(e) =>
								InitiateLogin(
									e,
									Email,
									Password
								)
							}
						>
							Login
						</button>
					</form>
					{Error == "" ? "" : <h1>{Error}</h1>}
				</div>
			</section>
		);
	} else {
		window.location.href = "/upload";
	}
};

export default Login;

