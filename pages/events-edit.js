import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { createEvent, uploadImage } from "../functions/db";

const EventsEdit = () => {
	const firebaseConfig = {
		apiKey: "AIzaSyAHR67C4H_51mUc1QdAztY1uLBzRlh4Pcs",
		authDomain: "spoorthy-6b2ed.firebaseapp.com",
		databaseURL:
			"https://spoorthy-6b2ed-default-rtdb.asia-southeast1.firebasedatabase.app",
		projectId: "spoorthy-6b2ed",
		storageBucket: "spoorthy-6b2ed.appspot.com",
		messagingSenderId: "979856160395",
		appId: "1:979856160395:web:15adf3ca62249740d6868e",
		measurementId: "G-06RM8H1B7S",
	};

	// Initialize Firebase
	const app = initializeApp(firebaseConfig);

	const auth = getAuth(app);

	const [user, loading] = useAuthState(auth);

	const [Title, setTitle] = useState("");
	const [SubTitle, setSubTitle] = useState("");
	const [Description, setDescription] = useState("");
	const [URL, setURL] = useState("");

	if (loading) {
		return (
			<div>
				<h1>Loading...</h1>
			</div>
		);
	}

	if (user) {
		return (
			//     <style>
			//     p {
			//       text-align: center;
			//       font-size: 1rem;
			//       font-weight: bold;
			//       color: #009970;
			//     }
			//   </style>

			<section class="section-bg services">
				<div class="form-section">
					<div class="section-title">
						<h2>Event details</h2>
					</div>
					<div
						action="{{ url_for('add_event') }}"
						method="post"
						enctype="multipart/form-data"
					>
						<div class="form-group">
							<label for="title">
								Title
							</label>
							<input
								type="text"
								class="form-control"
								id="title"
								name="title"
								onChange={(e) =>
									setTitle(
										e
											.target
											.value
									)
								}
							/>
						</div>
						<div class="form-group">
							<label for="subtitle">
								Subtitle
							</label>
							<input
								type="text"
								class="form-control"
								id="subtitle"
								name="subtitle"
								onChange={(e) =>
									setSubTitle(
										e
											.target
											.value
									)
								}
							/>
						</div>
						<div class="form-group">
							<label for="description">
								Description
							</label>
							<textarea
								rows="3"
								class="form-control"
								id="description"
								name="description"
								onChange={(e) =>
									setDescription(
										e
											.target
											.value
									)
								}
							></textarea>
						</div>
						<div class="form-group">
							<label for="image">
								Image
							</label>
							<input
								type="file"
								class="form-control"
								id="image"
								name="image"
								accept="image/x-png,image/gif,image/jpeg,image/jpg,image/png"
							/>
							<button
								onClick={(
									e
								) => {
									uploadImage(
										document.getElementById(
											"image"
										)
											.files[0],
										Title,
										setURL
									);
								}}
							>
								Upload Image
							</button>
						</div>
						<button
							class="btn btn-primary"
							onClick={(e) =>
								createEvent(
									e,
									Title,
									SubTitle,
									Description,
									URL
								)
							}
						>
							Submit
						</button>
					</div>
				</div>
			</section>
		);
	} else {
		window.location.href = "login";
	}
};
export default EventsEdit;
