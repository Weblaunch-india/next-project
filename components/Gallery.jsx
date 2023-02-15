import React from 'react'
import Image from 'next/image'

export const Gallery = () => {
  return (
    <div>
        
{/* <style>
    .portfolio {
        padding-top: 60px;
    }
</style> */}

<section id="portfolio" class="portfolio">

    <div class="container" >
       <div class="section-title">
        <h2>Our Gallery</h2>
       </div>
       <div class="row portfolio-container">
            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="100">
                    <Image fill alt='' src="/../bootstrap/images/gallery/1.jpeg" class="img-fluid" />
                </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="100">
                    <Image fill alt='' src="/../bootstrap/images/gallery/2.jpeg" class="img-fluid" />
                </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="100">
                    <Image fill alt='' src="/../bootstrap/images/gallery/3.jpeg" class="img-fluid" />
                </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="100">
                    <Image fill alt='' src="/../bootstrap/images/gallery/4.jpeg" class="img-fluid" />
                </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="100">
                    <Image fill alt='' src="/../bootstrap/images/gallery/5.jpg" class="img-fluid" />
                </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="100">
                    <Image fill alt='' src="/../bootstrap/images/gallery/6.jpg" class="img-fluid" />
                </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="100">
                    <Image fill alt='' src="/../bootstrap/images/gallery/7.jpg" class="img-fluid" />
                </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="100">
                    <Image fill alt='' src="/../bootstrap/images/gallery/8.jpg" class="img-fluid" />
                </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="100">
                    <Image fill alt='' src="/../bootstrap/images/gallery/9.jpg" class="img-fluid" />
                </div>
            </div>
        </div>
  
     </div>
</section>

    </div>
  )
}
