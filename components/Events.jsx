import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import event1 from "../bootstrap/images/gallery/7.jpg";
import { deleteEvent, getEvents } from "../functions/db";
import { app, auth } from "../functions";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";

export const Events = () => {
	const [Events, setEvents] = useState([]);
	let firstCoat = useRef(true);

	useEffect(() => {
		setEvents((prev) => [...prev, getEvents(setEvents)]);
		return () => {
			setEvents([]);
		};
	}, []);

	const [user, loading] = useAuthState(auth);

	return (
		<section>
			<div className="container-fluid py-4 my-4 bg-light">
				<div className="about text-center">
					<h2 className="mb-5">
						EVENTS
						<hr className="green-hr" />
					</h2>
				</div>
			</div>
			<hr />

			{loading ? (
				<div>Loading...</div>
			) : user ? (
				<div>
					<div class="admin-section">
						<Link
							class="btn btn-primary admin-button"
							href="/events-edit"
							role="button"
						>
							Add Events
						</Link>
					</div>
				</div>
			) : (
				<></>
			)}

			{/* <!--##################### EVENTS ####################-->

    <!-- Event 1 --> */}
			<div className="row justify-content-start">
				<div
					className="col-md-5"
					data-aos="fade-up"
					data-aos-anchor-placement="center-bottom"
				>
					<Image
						fill
						src={event1}
						className="img-fluid"
						alt="EVENT IMAGE"
					/>
				</div>
				<div
					className="col-md-7 pt-4"
					data-aos="fade-left"
				>
					<h2>Career Guidance for Children</h2>
					<h4>
						<b>
							<Link href="#">
								Spoorthy inspire
								program
							</Link>
						</b>
					</h4>
					<p className="font-italic">
						Career guidance is a formal way
						for people to receive advice on
						their career at different
						stages. Along with this advice,
						this process often involves
						formal programs that help people
						both plan and execute any
						decisions they make
						in their career.
					</p>
				</div>
			</div>
			<hr />

			{/* <!-- Event 2 --> */}

			{(Events.length > 1) ? (
				<div>
					{Events.map((elem) => {
						return (
							<>
								<div className="row justify-content-start">
									<div
										className="col-md-5"
										data-aos="fade-up"
										data-aos-anchor-placement="center-bottom"
									>
										<img
											src={
												elem.image
											}
											className="img-fluid"
											alt="EVENT IMAGE"
										/>
									</div>
									<div
										className="col-md-7 pt-4"
										data-aos="fade-left"
									>
										<h2>
											{
												elem.title
											}
										</h2>
										<h4>
											<b>
												<a href="#">
													{
														elem.subtitle
													}
												</a>
											</b>
										</h4>
										<p className="font-italic">
											{
												elem.description
											}
										</p>
										{user ? (
											<div>
												{" "}
												<Link
													class="btn btn-primary"
													// href={
													// 	"update-events/" +
													// 	elem.id
													// }
													href={{
														pathname: "/update-event",
														query: {
															id: elem.id,
														},
													}}
													role="button"
												>
													Update
												</Link>
												<button
													class="btn btn-primary"
													onClick={(
														e
													) =>
														deleteEvent(
															elem.id
														)
													}
													role="button"
												>
													Delete
												</button>
											</div>
										) : (
											<>

											</>
										)}
									</div>
								</div>
								<hr />
							</>
						);
					})}
				</div>
			) : (
				<></>
			)}
		</section>
	);
};
