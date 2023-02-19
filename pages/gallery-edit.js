import { getAuth } from "firebase/auth";
import React from "react";
import { initializeApp } from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";

const GalleryEdit = () => {
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

			<section className="section-bg services">
				<div className="form-section">
					<div className="section-title">
						<h2>Image details</h2>
					</div>
					<form
						action="{{ url_for('add_gallery_image') }}"
						method="post"
						enctype="multipart/form-data"
					>
						<div className="form-group">
							<label for="image">
								Image
							</label>
							<input
								type="file"
								className="form-control"
								id="image"
								name="image"
								accept="image/x-png,image/gif,image/jpeg,image/jpg,image/png"
							/>
						</div>
						<button
							type="submit"
							className="btn btn-primary"
						>
							Submit
						</button>
					</form>
				</div>
			</section>
		);
	} else {
		window.location.href = "/login";
	}
};

export default GalleryEdit;
