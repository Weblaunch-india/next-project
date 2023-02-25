import React from 'react'
import Image from "next/image";
import Link from "next/link";
// import styles from "../styles/Home.module.css";
import education1 from '../bootstrap/images/home_images/1-1.jpeg'
import education2 from '../bootstrap/images/home_images/1-2.jpeg'
import education3 from '../bootstrap/images/home_images/1-3.jpg'
import gallery1 from '../bootstrap/images/home_images/2-1.jpg'
import gallery2 from '../bootstrap/images/home_images/2-2.jpeg'
import gallery3 from '../bootstrap/images/home_images/2-3.jpg'
import gallery4 from '../bootstrap/images/home_images/2-4.jpg'
import gallery5 from '../bootstrap/images/home_images/2-5.jpg'
import gallery6 from '../bootstrap/images/home_images/2-6.jpg'
import news1 from '../bootstrap/images/News/1.jpeg'
import news2 from '../bootstrap/images/News/2.jpeg'
import news3 from '../bootstrap/images/News/3.jpeg'
import news4 from '../bootstrap/images/News/4.jpeg'
import news5 from '../bootstrap/images/News/5.jpeg'
import news6 from '../bootstrap/images/News/6.jpeg'
import girl from '../bootstrap/images/testimonial-images/girl.png'
import boy from '../bootstrap/images/testimonial-images/boy.jpg'
import team_mem_1 from '../bootstrap/images/team/Yadaiah.jpg'
import team_mem_2 from '../bootstrap/images/team/padmarao.jpg'
import team_mem_3 from '../bootstrap/images/team/K.Sathyanarayana.jpg'
import team_mem_4 from '../bootstrap/images/team/K.Saroja.jpg'
import team_mem_5 from '../bootstrap/images/team/B.venkatesham.jpg'
import car2 from '../bootstrap/images/home_images/2-1.jpg'
import car3 from '../bootstrap/images/home_images/1-3.jpg'


export const Home = () => {
  const headingStyle = {
    "font-size": "15px",
  }
  return (
    <div className="">
			
			{/* <div id="header">
	  <div className="container text-center">
		<div className="header-box">
			<h1><span>S</span>poorthy <span>O</span>rganization</h1>
		</div>
	 </div>
</div> */}
<div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel" data-aos="fade-up">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active caption-cor"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1" className="caption-cor"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2" className="caption-cor"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active cor-animation">
      <div className="cor-block-1" style={{"backgroundImage":"../bootstrap/images/main.jpeg"}} >
        <div className="header-box">
          <h1><span>S</span>poorthy <span>O</span>rganization</h1>
        </div>
      </div>
    </div>
    <div className="carousel-item cor-animation">
      <div className="cor-block-2">
       <Image src={car2} fill alt=''/>
      </div>
    </div>
    <div className="carousel-item cor-animation">
      <div className="cor-block-3">   
      <Image src={car3} fill alt=''/>           
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

{/* <!---------------------------------------- jumbotron ----------------------------------------> */}
<div className="container-fluid" >
<div className="row jumbotron" style={{"margin": 0}}>
    <div className="col-xs-20 col-sm-12 col-md-20 col-lg-20 col-xl-100" >
        <h1 className="text-center" data-aos="zoom-in-up" data-aos-easing="ease-in-sine" data-aos-delay="100">WHO WE ARE AND WHAT DO WE DO?</h1>
		<div className="border1 "></div>
        <p className="text-center px-md-5">Welcome to the website of Spoorty organisation, a non-profit organization dedicated to Educate , Empower, Teach. We are committed to making a difference in the world by Believing everything by scientifically proving, Educating, empowering Students and helping the needy people.
        </p>
    </div>
    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2 text-center">
        <Link href="/about"><button type="button" className="btn btn-lg border border-secondary read-more">Know More</button></Link>
    </div>
</div>
</div>
{/* <!---------------------------------- welcome section -------------------------------------> */}
<div className="container-fluid padding" style={{"margin": 0}}>
  <div className="row welcome text-center">
      <div className="col-12">
          <h1 data-aos="zoom-in-up" data-aos-easing="ease-in-sine" data-aos-delay="100">About our team!</h1>
      <div className="border1"></div>
      </div>
      <div className="col-12">
          <p>Our team is composed of passionate individuals who strive to make a positive impact on the lives of those we serve. We are committed to providing quality services and programs that are tailored to meet the needs of our community.
          </p>
      </div>
  </div>
</div>
{/* <!-------------------------------------- Three column section ---------------------------------> */}
<section className="services section-bg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-md-4 d-flex align-items-stretch" data-aos="zoom-in-up" data-aos-easing="ease-in-sine" data-aos-delay="100">
                <div className="icon-box" >
                  <div className="icon"><i className="fa fa-hands-helping fa-3x"></i></div>
                  <h4><Link href="">Join us!</Link></h4>
                  <p>We believe in the power of collaboration and strive to create meaningful partnerships with other organizations and individuals who share our vision. Our goal is to create lasting change through education, advocacy, and service.
                </p>
                <p>
                  We invite you to join us in making a difference. Together, we can make a real difference in the lives of those we serve. Thank you for your support!
                </p>
                </div>
              </div>

              <div className="col-md-4 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="100">
                <div className="icon-box" >
                  <div className="icon"><i className="fa fa-university fa-3x"></i></div>
                  <h4><Link href="">Teaching</Link></h4>
                  <p>In todays world, everyone needs to be educated. To survive in this world, More literacy is not enough. Our kids are taught alphabets to alpha beta gama. We make sure that at the end of the day, the child does not only have fun but learn somthing of value.
                  </p>
                </div>
              </div>

              <div className="col-md-4 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in-up" data-aos-easing="ease-in-sine" data-aos-delay="100">
                <div className="icon-box" >
                  <div className="icon"><i className="fa fa-box fa-3x"></i></div>
                  <h4><Link href="">Donate us</Link></h4>
                  <p>The simplest and quickest way to make a donation, so you can support people in need. Start donating for our campaigns to support poor people and children returning to school.</p>
                </div>
              </div>
             
			 </div>
          </div>
        </div>
	 </div>
 </section>


{/* About US */}
<section className="bg-light" style={{"padding-bottom": "3px","padding-top": "1px"}}>
  <div className="about text-center">
      <h2 className="mb-5">Our Team<hr className="green-hr" /></h2>
  </div>
  <div className="container-fluid row team-row" style={{"text-align": "center"}} id="team" data-flickity='{ "wrapAround": true ,"autoPlay": 1500 }'>
      {/* <!--Kuwarjeet singh card--> */}
      <div className="carousel-cell about-carousel-cell" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="100">
          <div className="container-fluid">
              <div className="">
                <div className="">
                  <Image src={team_mem_1} alt="Kuwarjeet Singh" className="img-fluid team-pic" width="300" height="350" />
                  <h4 className="about-name">K.Yadaiah</h4>
                  <h6 style={headingStyle}>President</h6>
                </div>
             </div>
          </div>
      </div>
      {/* <!--Harman arora card--> */}
      <div className="carousel-cell about-carousel-cell" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="100">
          <div className="container-fluid">
              <div className="">
                <div className="">
                  <Image src={team_mem_2} className="img-fluid team-pic" alt="Harman arora" width="300" height="350" />
                  <h4 className="about-name">Padma Rao Mekala</h4>
                  <h6  style={headingStyle}>Vice President</h6>
                </div>
              </div>
            </div>
      </div>

      {/* <!--Avleen kaur card--> */}
      <div className="carousel-cell about-carousel-cell" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="100">
        <div className="container-fluid">
            <div className="">
              <div className="">
                <Image src={team_mem_3} className="img-fluid team-pic" alt="Avleen Kaur" width="300" height="350" />
                <h4 className="about-name">Sathyanarayana Kandi</h4>
                <h6  style={headingStyle}>General Secretary</h6>
              </div>
            </div>
          </div>
    </div>

      {/* <!--Yashvi parvani card--> */}
      <div className="carousel-cell about-carousel-cell" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="100">
          <div className="container-fluid">
              <div className="">
                <div className="">
                  <Image src={team_mem_4} className="img-fluid team-pic" alt="Yashvi parwani" width="300" height="350" />
                  <h4 className="about-name">Sarojana Kuntolla</h4>
                  <h6  style={headingStyle}>Treasurer</h6>
                </div>
              </div>
            </div>
      </div>
      
      {/* <!--Bineet singh card--> */}
      <div className="carousel-cell about-carousel-cell" data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-delay="100">
          <div className="container-fluid">
              <div className="">
                <div className="">
                  <Image src={team_mem_5} className="img-fluid team-pic" alt="Bineet Singh" width="300" height="350" />
                  <h4 className="about-name">Venkatesham Battula</h4>
                  <h6  style={headingStyle}>Joint Secretary</h6>
                </div>
              </div>
            </div>
      </div>
    </div>
</section>









{/* <!------------------- EDUCATION @TRPWS SECTION ---------------------------> */}
<section id="portfolio" className="portfolio">
      <div className="container" >
         <div className="section-title">
          <h2>EDUCATION</h2>
         </div>

        <div className="row portfolio-container">
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap" data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-delay="100">
              <Image height={400} width={400} src={education1} alt="" className="img-fluid" />
              <div className="portfolio-info">
                <h4>WE LOVE</h4>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="100">
              <Image height={400} width={400} src={education2} alt="" className="img-fluid" />
              <div className="portfolio-info">
                <h4>WE CARE</h4>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="100">
              <Image height={400} width={400} src={education3} alt="" className="img-fluid" />
              <div className="portfolio-info">
                <h4>WE TEACH</h4>
              </div>
            </div>
          </div>
			
       </div>
   </div>
</section>
{/* <!----------------------------- Portfolio Section ------------------------------> */}
<section id="portfolio" className="portfolio">
      <div className="container" >
         <div className="section-title">
          <h2>Our Gallery</h2>
          <p>We reach out to children and make them interact with young people from universities and teach them in a friendly way so as to provide them with a family environment for learning, make them understand our culture and hardships they need to overcome in the journey of their life.</p>
         </div>

        <div className="row portfolio-container">
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap" data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-delay="100">
              <Image alt="" height={400} width={400} src={gallery1} className="img-fluid" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="100">
              <Image alt="" height={400} width={400} src={gallery2} className="img-fluid" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="100">
              <Image alt="" height={400} width={400} src={gallery3} className="img-fluid" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap" data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-delay="100">
              <Image alt="" height={400} width={400} src={gallery4} className="img-fluid" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="100">
              <Image alt="" height={400} width={400} src={gallery5} className="img-fluid" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="100">
              <Image alt="" height={400} width={400} src={gallery6} className="img-fluid" />
            </div>
          </div>
       </div>
   </div>
</section>

<section id="portfolio" className="portfolio">
  <div className="container" >
     <div className="section-title">
      <h2>News</h2>
     </div>

    <div className="row portfolio-container">
      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <div className="portfolio-wrap" data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-delay="100">
          <Image alt="" height={400} width={400} src={news1} className="img-fluid" />
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-web">
        <div className="portfolio-wrap" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="100">
          <Image alt="" height={400} width={400} src={news2} className="img-fluid" />
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <div className="portfolio-wrap" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="100">
          <Image alt="" height={400} width={400} src={news3} className="img-fluid" />
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-card">
        <div className="portfolio-wrap" data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-delay="100">
          <Image alt="" height={400} width={400} src={news4} className="img-fluid" />
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-web">
        <div className="portfolio-wrap" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="100">
          <Image alt="" height={400} width={400} src={news5} className="img-fluid" />
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <div className="portfolio-wrap" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="100">
          <Image alt="" height={400} width={400} src={news6} className="img-fluid" />
        </div>
      </div>
   </div>
</div>
</section>
{/* <!--------------------------------- Testinomials --------------------------------------> */}
<div className="testimonials">
	   <div className="inner ">
		    <h1>TESTIMONIALS</h1>
		     <div className="border1"></div>
		       
		     <div className="row1">
		        <div className="col" data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-delay="100">
				   <div className="testimonial" style={{"padding-bottom": "32px"}}>
					 <Image alt="" height={400} width={400} src={girl} />
					 <div className="name">Shilpi Gupta</div>
					   <div className="stars">
					     <i className="fas fa-star"></i>
						 <i className="fas fa-star"></i>
						 <i className="fas fa-star"></i>
						 <i className="fas fa-star"></i>
						 <i className="fas fa-star"></i>
					   </div>
					   <p>It is a great place for people who want to do social work. Environment is good very friendly. Spoorthy Organization is doing great by helping the poor children to achieve their dreams .</p>
				   </div>
			    </div>
				 
				 <div className="col" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="100">
				   <div className="testimonial">
            <Image alt="" height={400} width={400} src={girl} />
					 <div className="name">Akshita Babutta</div>
					   <div className="stars">
					     <i className="fas fa-star"></i>
						 <i className="fas fa-star"></i>
						 <i className="fas fa-star"></i>
						 <i className="fas fa-star"></i>
						 <i className="fas fa-star"></i>
					   </div>
					   <p>I have been working with Spoorthy Organization from past 3 weeks and it feels great to be part of this organisation. Each and every team member is extremely supportive and enthusiastic towards their work.</p>
				   </div>
			    </div>
				 
				 <div className="col" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="100">
				   <div className="testimonial">
            <Image alt="" height={400} width={400} src={boy} />
					 <div className="name">Bineet Singh</div>
					   <div className="stars">
					     <i className="fas fa-star"></i>
						 <i className="fas fa-star"></i>
						 <i className="fas fa-star"></i>
						 <i className="fas fa-star"></i>
						 <i className="fas fa-star"></i>
					   </div>
					   <p>Spoorthy Organization is doing an absolute exemplary work by giving these little kids a beautiful life not only by the means of education but also through their overall development.</p>
				   </div>
			    </div>
				 
				 <div className="col" data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-delay="100">
				   <div className="testimonial">
            <Image alt="" height={400} width={400} src={girl} />
					 <div className="name">Khushi Atolia</div>
					   <div className="stars">
					     <i className="fas fa-star"></i>
						 <i className="fas fa-star"></i>
						 <i className="fas fa-star"></i>
						 <i className="fas fa-star"></i>
						 <i className="fas fa-star"></i>
					   </div>
					   <p>This NGO is doing amazing work by helping for upliftment of the children from slum so they have a good career and a brighter future.The things they do without any help from the government or any other organization is just remarkable and worth mentioning.</p>
				   </div>
			    </div>
				 
				 <div className="col" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="100">
				   <div className="testimonial">
            <Image alt="" height={400} width={400} src={boy} />
					 <div className="name">Devesh Mittal</div>
					   <div className="stars">
						 <i className="fas fa-star"></i>
						 <i className="fas fa-star"></i>
						 <i className="fas fa-star"></i>
						 <i className="fas fa-star"></i>
						 <i className="fas fa-star"></i>
					   </div>
					   <p>Spoorthy Organization is working for a noble and selfless cause... Providing education to children who do not have access to it is highly appreciated... and I feel pleased to be a part of this group...</p>
				   </div>
			    </div>

          <div className="col" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="100">
            <div className="testimonial">
              <Image alt="" height={400} width={400} src={boy} />
            <div className="name">Naryan Jain</div>
              <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              </div>
              <p>I had a great experience while working with Spoorthy Organization as a volunteer meanwhile learnt a lot of things through this organization. Spoorthy team members have the heart filled with kindness and love.</p>
            </div>
           </div>
				 
		      </div>
		</div>
</div>

</div>
  )
}
