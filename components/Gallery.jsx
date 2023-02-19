import React, { useEffect, useState } from "react";
import Image from "next/image";
import Gallery1 from "../bootstrap/images/gallery/1.jpeg";
import Gallery2 from "../bootstrap/images/gallery/2.jpeg";
import Gallery3 from "../bootstrap/images/gallery/3.jpeg";
import Gallery4 from "../bootstrap/images/gallery/4.jpeg";
import Gallery5 from "../bootstrap/images/gallery/5.jpg";
import Gallery6 from "../bootstrap/images/gallery/6.jpg";
import Gallery7 from "../bootstrap/images/gallery/7.jpg";
import Gallery8 from "../bootstrap/images/gallery/8.jpg";
import $ from "jquery";
import Link from "next/link";
import { getImages } from "../functions/db";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../functions";

export const Gallery = () => {
	const styling = {
		"padding-top": "60px",
	};

	const [setImage, setImages] = useState([]);

	useEffect(() => {
		setImages((prev) => [...prev, getImages(setImages)]);
		return () => {
			setImages([]);
		};
	}, []);

	const [user, loading] = useAuthState(auth);

	return (
		<div>
			{/* <style>
    .portfolio {
        padding-top: 60px;
    }
</style> */}

			<section
				id="portfolio"
				className="portfolio"
				style={styling}
			>
				<div className="container">
					<div className="section-title">
						<h2>Our Gallery</h2>
					</div>
					{loading ? (
						<div>Loading...</div>
					) : user ? (
						<div>
							<div class="admin-section">
								<Link
									class="btn btn-primary admin-button"
									href="/images-edit"
									role="button"
								>
									Add
									Event
								</Link>
							</div>
						</div>
					) : (
						<></>
					)}
					<div className="row portfolio-container">
						<div className="col-lg-4 col-md-6 portfolio-item filter-app">
							<div
								className="portfolio-wrap"
								data-aos="fade-left"
								data-aos-easing="ease-in-sine"
								data-aos-delay="100"
							>
								<Image
									fill
									alt=""
									src={
										Gallery1
									}
									className="img-fluid"
								/>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 portfolio-item filter-app">
							<div
								className="portfolio-wrap"
								data-aos="fade-left"
								data-aos-easing="ease-in-sine"
								data-aos-delay="100"
							>
								<Image
									fill
									alt=""
									src={
										Gallery2
									}
									className="img-fluid"
								/>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 portfolio-item filter-app">
							<div
								className="portfolio-wrap"
								data-aos="fade-left"
								data-aos-easing="ease-in-sine"
								data-aos-delay="100"
							>
								<Image
									fill
									alt=""
									src={
										Gallery3
									}
									className="img-fluid"
								/>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 portfolio-item filter-app">
							<div
								className="portfolio-wrap"
								data-aos="fade-left"
								data-aos-easing="ease-in-sine"
								data-aos-delay="100"
							>
								<Image
									fill
									alt=""
									src={
										Gallery4
									}
									className="img-fluid"
								/>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 portfolio-item filter-app">
							<div
								className="portfolio-wrap"
								data-aos="fade-left"
								data-aos-easing="ease-in-sine"
								data-aos-delay="100"
							>
								<Image
									fill
									alt=""
									src={
										Gallery5
									}
									className="img-fluid"
								/>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 portfolio-item filter-app">
							<div
								className="portfolio-wrap"
								data-aos="fade-left"
								data-aos-easing="ease-in-sine"
								data-aos-delay="100"
							>
								<Image
									fill
									alt=""
									src={
										Gallery6
									}
									className="img-fluid"
								/>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 portfolio-item filter-app">
							<div
								className="portfolio-wrap"
								data-aos="fade-left"
								data-aos-easing="ease-in-sine"
								data-aos-delay="100"
							>
								<Image
									fill
									alt=""
									src={
										Gallery7
									}
									className="img-fluid"
								/>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 portfolio-item filter-app">
							<div
								className="portfolio-wrap"
								data-aos="fade-left"
								data-aos-easing="ease-in-sine"
								data-aos-delay="100"
							>
								<Image
									fill
									alt=""
									src={
										Gallery8
									}
									className="img-fluid"
								/>
							</div>
						</div>

						{/* <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="100">
                    <Image fill alt='' src={Gallery9} className="img-fluid" />
                        </div>
                    </div> */}
					</div>
				</div>
			</section>
		</div>
	);
};
