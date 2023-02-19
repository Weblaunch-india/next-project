import React, { useState } from "react";
import { createImage, uploadImage } from "../functions/db";
import uniqid from "uniqid";

const AddGallery = () => {
	const [URL, setURL] = useState('');

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
					<h2>Image details</h2>
				</div>
				<div>
					<div class="form-group">
						<label for="image">Image</label>
						<input
							type="file"
							class="form-control"
							id="image"
							name="image"
							accept="image/x-png,image/gif,image/jpeg,image/jpg,image/png"
						/>
					</div>
					<button
						onClick={(e) =>
							uploadImage(
								document.getElementById("image").files[0],
								uniqid(),
								setURL,
								"gallery"
							)
						}
						class="btn btn-primary"
					>
						Upload
					</button>

					<button
						onClick={(e) =>
							createImage(e, URL)
						}
						class="btn btn-primary"
					>
						Submit
					</button>
				</div>
			</div>
		</section>
	);
};

export default AddGallery;
