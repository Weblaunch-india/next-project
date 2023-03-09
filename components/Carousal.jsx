import Image from "next/image";
import image1 from "../bootstrap/images/home_images/1-1.jpeg";
// import Carousel from "react-bootstrap/Carousel";
import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useState } from "react";
import css from "../bootstrap/css/carousal.module.css";

function Carousal() {
	const links = [
		"https://firebasestorage.googleapis.com/v0/b/spoorthy-6b2ed.appspot.com/o/carousal%2FWhatsApp%20Image%202023-03-09%20at%2021.11.46%20(1).jpeg?alt=media&token=a047a331-3416-4a87-a899-8c93a1971da7",
		"https://firebasestorage.googleapis.com/v0/b/spoorthy-6b2ed.appspot.com/o/carousal%2FWhatsApp%20Image%202023-03-09%20at%2021.11.46%20(2).jpeg?alt=media&token=38a98d32-1d89-4e14-aa3a-002842680cef",
		"https://firebasestorage.googleapis.com/v0/b/spoorthy-6b2ed.appspot.com/o/carousal%2FWhatsApp%20Image%202023-03-09%20at%2021.11.46.jpeg?alt=media&token=ce6c635c-93ba-43e7-b7d7-326f85892d33",
		"https://firebasestorage.googleapis.com/v0/b/spoorthy-6b2ed.appspot.com/o/carousal%2FWhatsApp%20Image%202023-03-09%20at%2021.11.47%20(1).jpeg?alt=media&token=69c8bcdd-7945-44c1-82cc-06b6d19a2449",
		"https://firebasestorage.googleapis.com/v0/b/spoorthy-6b2ed.appspot.com/o/carousal%2FWhatsApp%20Image%202023-03-09%20at%2021.11.47%20(2).jpeg?alt=media&token=24cf68ff-3b04-45e6-84df-6dd12f4ccf8e",
		"https://firebasestorage.googleapis.com/v0/b/spoorthy-6b2ed.appspot.com/o/carousal%2FWhatsApp%20Image%202023-03-09%20at%2021.11.47%20(3).jpeg?alt=media&token=5713fab3-ac28-4952-8d19-4b1f45b6effb",
		"https://firebasestorage.googleapis.com/v0/b/spoorthy-6b2ed.appspot.com/o/carousal%2FWhatsApp%20Image%202023-03-09%20at%2021.11.48%20(1).jpeg?alt=media&token=c9354a8d-5853-4955-90df-5926fd92dd94",
		"https://firebasestorage.googleapis.com/v0/b/spoorthy-6b2ed.appspot.com/o/carousal%2FWhatsApp%20Image%202023-03-09%20at%2021.11.48.jpeg?alt=media&token=733ab2ee-db73-4398-b9f8-93ffe4ccb1d8",
	];
	const [Active, setActive] = useState(0);

	return (
		<div className={css.carousalContainer}>
			<button
				onClick={(e) => {
					const newActive = Active - 1;
					setActive(
						newActive < 0 ? 7 : newActive
					);
				}}
				className={css.left}
			>
				&lt;
			</button>
			<div className={css.element}>
				{links.map((elem) => {
					return (
						<div
							className={
								links[Active] ==
								elem
									? css.show
									: css.hide
							}
							key={elem}
						>
							<img
								className={
									elem ==
									links[0]
										? css.image1
										: css.image
								}
								src={elem}
							/>
							{elem === links[0] ? (
								<p
									className={
										css.overlayText
									}
								>
									Spoorthy
									Organisation
								</p>
							) : (
								<></>
							)}
						</div>
					);
				})}
			</div>
			<button
				onClick={(e) => {
					const newActive = Active + 1;
					setActive(
						newActive >= 7 ? 0 : newActive
					);
				}}
				className={css.right}
			>
				&gt;
			</button>
		</div>
	);
}

export default Carousal;
