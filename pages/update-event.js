import { useRouter } from "next/router";
import React, { useState } from "react";
import { updateEvent } from "../functions/db";

const UpdateEvent = () => {
	const router = useRouter();

	// Get the query parameter from the URL
	const { id } = router.query;
	// const [Title, setTitle] = useState("");
	// const [SubTitle, setSubTitle] = useState("");
	// const [Description, setDescription] = useState("");
	const [Params, setParams] = useState({});

	return (
		<div>
			<section class="section-bg services">
				<div class="form-section">
					<div class="section-title">
						<h2>Event details</h2>
					</div>
					<div enctype="multipart/form-data">
						<div class="form-group">
							<label for="title">
								Title
							</label>
							<input
								type="text"
								class="form-control"
								id="title"
								name="title"
								// value="{{ event.title }}"
								onChange={(
									e
								) => {
									setParams(
										{
											...Params,
											title: e
												.target
												.value,
										}
									);
									console.log(
										Params
									);
								}}
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
								onChange={(
									e
								) => {
									setParams(
										{
											...Params,
											subtitle: e
												.target
												.value,
										}
									);
									console.log(
										Params
									);
								}}
							/>
						</div>
						<div class="form-group">
							<label for="description">
								Description
							</label>
							<input
								type="textarea"
								class="form-control"
								id="description"
								name="description"
								onChange={(
									e
								) => {
									setParams(
										{
											...Params,
											description:
												e
													.target
													.value,
										}
									);
									console.log(
										Params
									);
								}}
								// value="{{ event.description }}"
							/>
						</div>
						<button
							onClick={() =>
								updateEvent(
									id,
									Params
								)
							}
							class="btn btn-primary"
						>
							Submit
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default UpdateEvent;
