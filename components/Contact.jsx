import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import contactCartoon from '../bootstrap/images/2.jpg'

export const Contact = () => {
  return (
    <div>
        <section>
    <div class="container mt-5 pt-4 pb-2">
        <div class="d-flex justify-content-center">
            {/* <!--details section--> */}
            <div class="contact " data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="100">
                <h2>Get in touch<hr class="contact-green-hr" /></h2>
                    <div class="col pt-5">
                        <h4 class="contact-h4">Address</h4>
                        <p><Link href="https://goo.gl/maps/VCWbSRy8RZHmmAAe9" target="_blank">H-NO 11-1/A, EDULABAD ROAD, GHATKESAR MUNICAPAL, MEDCHAL-MALKAJGIRI DISTRICT, TELANGANA 501301</Link></p>
                        <hr class="line" />
                    </div>
                    <div class="col pt-2">
                        <h4 class="contact-h4">Phone</h4>
                        <p><a href="tel:+918800100021">+91 8866395858</a></p>
                        <hr class="line" />
                    </div>
                    <div class="col pt-2">
                        <h4 class="contact-h4">Email</h4>
                        <p><a href="mailto:trpws2012@gmail.com">spoortyorganization1@gmail.com</a></p>
                        <hr class="line" />
                    </div>
            </div>
            <div class="col-sm-5  col-md-6 offset-md-0 contact contact-img" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="100">
                <Image width="500" height="500" style={{"margin-top": "12%"}} src={contactCartoon} alt="" />
            </div>
        </div>
    </div>
    <hr style={{"border": "2px solid #000", "background-color": "grey", "width":"70%" , "border-radius": "2px"}} data-aos="flip-left" data-aos-easing="ease-in-sine" data-aos-delay="100" />
</section>
{/* <!--form and details section end--> */}

{/* <!--locate us and contact us section--> */}
<section>
    <div class="container">
        <div class="d-flex justify-content-center">
            <div class="col-sm-5  col-md-6 offset-md-0 contact" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="100">
                <h2>Connect with us<hr class="contact-green-hr" /></h2>
                <div class="row pt-4 px-4 social-icon d-flex justify-content-center ">
                    <Link class="sm-bttn" target='_blank' href="https://m.facebook.com/spoorthyorg"><i class="fab fa-facebook-f"></i></Link>

                    <Link class="sm-bttn" target='_blank' href="https://www.instagram.com/spoorthyorg/"><i class="fab fa-instagram"></i></Link>
                  </div>
            </div>
        </div>
    </div>    
</section>
    </div>
  )
}
