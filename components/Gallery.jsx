import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getImages, deleteImage } from "../functions/db";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../functions";


export const Gallery = () => {
	const styling = {
		"padding-top": "60px",
	};

	const [Images, setImages] = useState([]);

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
						<div className="admin-section">
							<Link
								className="btn btn-primary admin-button"
								href="/add_gallery"
								role="button"
							>
								Add image
							</Link>
						</div>
					) : (
						<></>
					)}
					<div className="row portfolio-container">
						{Images.map((elem) => {
							return (<div key={elem.image} className="col-lg-4 col-md-6 portfolio-item filter-app">
								<div
									className="portfolio-wrap"
									data-aos="fade-left"
									data-aos-easing="ease-in-sine"
									data-aos-delay="100"
								>
									<img
										fill
										alt=""
										src={
											elem.image
										}
										className="img-fluid"
									/>
									{user?(
										<div className="portfolio-info">
                                    <button className="btn btn-primary" onClick={()=>deleteImage(elem.id)}>Delete</button>
                                </div>
									):<></>}
								</div>
							</div>)
						})}
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
