import React from "react";
import Image from "next/image";
import qrCode from "../bootstrap/images/donation_images/phon.jpg";

const Donate = () => {
	return (
		<div>
			{/* <style>
  @media screen and (max-width:768px) {
    section {
      padding-bottom: 0;
      padding-top: 1.2rem;
    }
  }
</style> */}

			{/* <!-- Donation content --> */}
			<section
				class="services"
				style={{ "padding-top": "60px" }}
			>
				<div class="container">
					<div class="row">
						<div class="col-lg-4">
							<div
								class="section-title"
								data-aos="fade-right"
							>
								<h2>
									Help us!
								</h2>
							</div>
						</div>
						<div
							class="col-lg-8 justify-content-center"
							data-aos="zoom-in"
							data-aos-delay="100"
						>
							<p>
								Donating to a
								charity or
								non-profit
								organization is
								a great way to
								help those in
								need and make a
								difference in
								your community.
								Whether you’re
								looking to
								support a cause
								close to your
								heart or just
								want to do
								something good,
								donating can be
								an incredibly
								rewarding
								experience.
							</p>
							<p>
								Once you’ve
								decided on an
								organization to
								donate to, it’s
								time to make
								your donation.
								Most
								organizations
								have an online
								donation page
								where you can
								enter your
								payment
								information and
								make a secure
								donation. Some
								organizations
								also accept
								donations via
								mail or through
								their website
							</p>
						</div>
					</div>
				</div>
			</section>

			<section class="services">
				<div class="container">
					<div class="row">
						<div class="col-lg-4">
							<div
								class="section-title"
								data-aos="fade-right"
							>
								<h2>
									Ways to
									donate!
								</h2>
							</div>
						</div>
						<div
							class="col-lg-8 justify-content-center"
							data-aos="zoom-in"
							data-aos-delay="100"
						>
							<p>
								When it comes to
								donating, there
								are many options
								available. You
								can donate money
								directly to the
								organization, or
								you can donate
								goods such as
								clothing,
								furniture, and
								other items that
								may be of use.
								You can also
								volunteer your
								time and skills
								to help out with
								various
								projects.
							</p>
							<p>
								No matter what
								type of donation
								you choose, it’s
								important to do
								your research
								beforehand. Make
								sure the
								organization is
								legitimate and
								that they are
								using the
								donations for
								the intended
								purpose. It’s
								also important
								to read up on
								the tax
								implications of
								donating so that
								you can get the
								most out of your
								donation.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section class="services">
				<div class="container">
					<div class="row">
						<div class="col-lg-4">
							<div
								class="section-title"
								data-aos="fade-right"
							>
								<h2>
									Track
									your
									donations!
								</h2>
							</div>
						</div>
						<div
							class="col-lg-8 justify-content-center"
							data-aos="zoom-in"
							data-aos-delay="100"
						>
							<p>
								No matter how
								you choose to
								donate, it’s
								important to
								keep track of
								your donations
								for tax
								purposes. Most
								organizations
								will provide you
								with a receipt
								for your
								donation so that
								you can easily
								document it for
								tax season.
							</p>
							<p>
								Donating is a
								great way to
								give back and
								make a
								difference in
								your community.
								Do your research
								beforehand and
								make sure you’re
								donating to a
								reputable
								organization so
								that your money
								is going
								towards a good cause!
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* <style>
    @media screen and (max-width:768px) {
      h3 {
        font-size: 20px;
      }
    }
  </style> */}

			{/* <!--donation form text-->     */}
			<section class="bg-light donation mx-auto">
				<div class="container my-1 bg-white">
					<h4 class=" text-center pt-4">
						DONATION SECTION
						<hr class="donation-green-hr" />
					</h4>
					<h3 class="text-center my-4 p-4">
						A/c no - 154921010000023
						<br />
						IFSC -UBIN0915491 <br />
						SPOORTHY ORGANIZATION <br />
						UNION BANK <br />
						GHATKESAR
						<br />
						{/* <strong>+91 9177385674</strong> */}
					</h3>
					{/*             
            <div class="col border-right pay-don" data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-delay="200">
                <p style={{"text-decoration": "underline", "font-weight": "bold", "font-size": "larger"}} class="pay-img">Scan this to pay via PhonePe</p>
                <Image src={qrCode} class="pr-5 pay-img" alt="paytm Qr code" width="450" height="300" />
            </div> */}
				</div>
			</section>
		</div>
	);
};

export default Donate;
