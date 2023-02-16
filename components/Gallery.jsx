import React from 'react'
import Image from 'next/image'
import Gallery1 from '../bootstrap/images/gallery/1.jpeg'
import Gallery2 from '../bootstrap/images/gallery/2.jpeg'
import Gallery3 from '../bootstrap/images/gallery/3.jpeg'
import Gallery4 from '../bootstrap/images/gallery/4.jpeg'
import Gallery5 from '../bootstrap/images/gallery/5.jpg'
import Gallery6 from '../bootstrap/images/gallery/6.jpg'
import Gallery7 from '../bootstrap/images/gallery/7.jpg'
import Gallery8 from '../bootstrap/images/gallery/8.jpg'
import Gallery9 from '../bootstrap/images/gallery/9.jpg'
import $ from 'jquery'

export const Gallery = () => {
    const styling = {
        "padding-top": "60px"
    }
  return (
    <div>
        
{/* <style>
    .portfolio {
        padding-top: 60px;
    }
</style> */}

<section id="portfolio" class="portfolio" style={styling}>

    <div class="container" >
       <div class="section-title">
        <h2>Our Gallery</h2>
       </div>
       <div class="row portfolio-container">
            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="100">
                    <Image fill alt='' src={Gallery1} class="img-fluid" />
                </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="100">
                    <Image fill alt='' src={Gallery2} class="img-fluid" />
                </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="100">
                    <Image fill alt='' src={Gallery3} class="img-fluid" />
                </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="100">
                    <Image fill alt='' src={Gallery4} class="img-fluid" />
                </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="100">
                    <Image fill alt='' src={Gallery5} class="img-fluid" />
                </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="100">
                    <Image fill alt='' src={Gallery6} class="img-fluid" />
                </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="100">
                    <Image fill alt='' src={Gallery7} class="img-fluid" />
                </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="100">
                    <Image fill alt='' src={Gallery8} class="img-fluid" />
                </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="100">
                    <Image fill alt='' src={Gallery9} class="img-fluid" />
                </div>
            </div>
        </div>
  
     </div>
</section>

    </div>
  )
}
