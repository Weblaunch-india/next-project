import Image from "next/image";
import image1 from "../bootstrap/images/home_images/1-1.jpeg";
// import Carousel from "react-bootstrap/Carousel";
import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useState } from "react";
import css from "../bootstrap/css/carousal.module.css";

function Carousal() {
	const links = [
		"https://raw.githubusercontent.com/Weblaunch-india/next-project/main/bootstrap/images/home_images/1-1.jpeg",
		"https://raw.githubusercontent.com/Weblaunch-india/next-project/main/bootstrap/images/home_images/1-2.jpeg",
		"https://raw.githubusercontent.com/Weblaunch-india/next-project/main/bootstrap/images/home_images/1-3.jpg",
	];
	const [Active, setActive] = useState(0);

	return (
		<div className={css.carousalContainer}>
			<button
				onClick={(e) => {
					if (Active == 0) {
						setActive(2);
					} else if (Active == 1) {
						setActive(0);
					} else {
						setActive(1);
					}
					console.log(Active);
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
							<img className={elem == links[0] ? css.image1 : css.image} src={elem} />
							{elem === links[0] ? <p className={css.overlayText}>Spoorthy Organisation</p> : <></>}
						</div>
					);
				})}
			</div>
			<button
				onClick={(e) => {
					if (Active == 0) {
						setActive(1);
					} else if (Active == 1) {
						setActive(2);
					} else {
						setActive(0);
					}
					console.log(Active);
				}}
				className={css.right}
			>
				&gt;
			</button>
		</div>
	);
}

export default Carousal;
