import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import team_mem_1 from '../bootstrap/images/team/Yadaiah.jpg'
import team_mem_2 from '../bootstrap/images/team/padmarao.jpg'
import team_mem_3 from '../bootstrap/images/team/K.Sathyanarayana.jpg'
import team_mem_4 from '../bootstrap/images/team/K.Saroja.jpg'
import team_mem_5 from '../bootstrap/images/team/B.venkatesham.jpg'

const About = () => {
  return (
    <>
        <div className="about-cover-img">
</div>
{/* <!--cover image end--> */}


{/* <!--About us heading text-->     */}
<section className="text-center" style={{"padding-bottom": 0}}>
        <div className="about">
            <h2>ABOUT US<hr className="green-hr" /></h2>
        </div>
</section>
{/* <!--About us heading text end-->

<style>

  @media screen and (min-width: 768px) {
    .icon-box {
      height: 300px !important;
    }
  }

</style> */}

{/* <!--green CARDS--> */}
<section className="about section-bg">
    <div className="container">

      <div className="row ">

        <div className="col-md-4 col-sm-6 col-xs-12 about-green"  >
            <div className="about-wrap text-center" >
              <div className="icon-box" data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-delay="100">
                <h4><Link href=''>Mission<hr className="white-hr" /></Link></h4>
                <p style={{'margin-bottom': '58px'}}>To reach out as many people as possible and make a difference in their life. Our mission is to make their inner self happy. We want to bring a change in society by trying to eliminate the discrimination based on privilege by birth and not hard work and talent.</p>
              </div>
            </div>
        </div>

        <div className="col-md-4 col-sm-6 col-xs-12 about-green">
            <div className="about-wrap">
              <div className="icon-box" data-aos="zoom-in"  data-aos-easing="ease-in-sine" data-aos-delay="100">
                <h4><Link href=''>Values<hr className="white-hr" /></Link></h4>
                <p style={{'text-align': 'left','padding-left': '10px'}}>
                  • Transparency<br />
                  • Respect for human rights<br />
                  • No Discriminatory<br />
                  • Commitment<br />
                  • Integrity<br />
                  • No personal benefit<br />
                  • Secular, Non-Political and Non-Religious<br />
                  • See potential in every poor child<br />
                  </p>
              </div>
            </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12 about-green">
            <div className="about-wrap text-center">
              <div className="icon-box" data-aos="fade-left"  data-aos-easing="ease-in-sine" data-aos-delay="100">
                <h4><Link href=''>Vision<hr className="white-hr" /></Link></h4>
                <p>To make this world a better place for unprivileged people by providing them whatever required to our full potential. We believe that talent and skills are product of hard work and not birth. To fill the society with individuals   who has the power of differentiating between what is good and bad for them as well as the society.</p>
              </div>
            </div>
        </div>
          </div>
        </div>
</section>
{/* <!--green CARDS  end-->

<style>
  .services {
    padding-bottom: 2rem;
    padding-top: 3rem;
  }
  @media screen and (max-width:768px) {
    .services {
      padding-top: 1rem;
    }
  }
</style> */}

<section className="services">
  <div className="container">
    <div className="row">
      <div className="col-lg-4">
        <div className="section-title" data-aos="fade-right"  data-aos-easing="ease-in-sine" data-aos-delay="100">
          <h2>About Us</h2>
        </div>
      </div>
      <div className="col-lg-8 justify-content-center" data-aos="fade-left"  data-aos-easing="ease-in-sine" data-aos-delay="100">
        <p>A voluntary organization named Grand Mother Educational and Philosophical Development Society was established in the year 2006 with some friends with the determination to contribute to the welfare of society and to contribute to those who are facing various kinds of difficulties in society without backing down at a time when the time is passing by with poverty.</p>
      </div>
    </div>
  </div>
</section>


{/* <!--Our approach (our story) section--> */}
<section className="services">
  <div className="container">
    <div className="row">
      <div className="col-lg-4">
        <div className="section-title" data-aos="fade-right"  data-aos-easing="ease-in-sine" data-aos-delay="100">
          <h2>Our approach</h2>
        </div>
      </div>
      <div className="col-lg-8 justify-content-center" data-aos="fade-left"  data-aos-easing="ease-in-sine" data-aos-delay="100">
        <p>We reach out to children and make them interact with young people from universities and teach them in a friendly way so as to provide them with a family environment for learning, make them understand our culture and hardships they need to overcome in the journey of their life.Our main motives are making children aware of the current scenario in which the world exists and train them to overcome the taboos of society. We also make them aware of the social issues they are in and how to make it a betterplace for them to survive and grow.A well defined smile is what we care for and try to achieve with our constant approach.</p>
      </div>
    </div>
  </div>
</section>
{/* <!--Our approach (our story) section end-->

<style>
  h6{
    font-size: 15px;
  }
  @media screen and (min-width:768px) {
    .img-fluid {
      border-radius: 50%;
    }
    .row {
      text-align: center !important;
    }
  }
  @media screen and (max-width:768px) {
    .carousel-cell {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
</style> */}


{/* <!--Spoorthy Team Section--> */}
<section className="bg-light" style={{"padding-bottom": "3px","padding-top": "1px"}}>
  <div className="about text-center">
      <h2 className="mb-5">Our Team<hr className="green-hr" /></h2>
  </div>
  <div className="container-fluid row" id="team" data-flickity='{ "wrapAround": true ,"autoPlay": 1500 }'>
      {/* <!--Kuwarjeet singh card--> */}
      <div className="carousel-cell " data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="100">
          <div className=" container-fluid">
              <div className="">
                <div className="">
                  <Image src={team_mem_1} alt="Kuwarjeet Singh" className='img-fluid' width="300" height="350" />
                  <h4 className="about-name">K.Yadaiah</h4>
                  <h6>President</h6>
                </div>
              </div>
            </div>
      </div>
      {/* <!--Harman arora card--> */}
      <div className="carousel-cell" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="100">
          <div className=" container-fluid">
              <div className="">
                <div className="">
                  <Image src={team_mem_2} className='img-fluid' alt="Harman arora" width="300" height="350" />
                  <h4 className="about-name">Padma Rao Mekala</h4>
                  <h6>Vice President</h6>
                </div>
              </div>
            </div>
      </div>

      {/* <!--Avleen kaur card--> */}
      <div className="carousel-cell" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="100">
        <div className=" container-fluid">
            <div className="">
              <div className="">
                <Image src={team_mem_3} className='img-fluid' alt="Avleen Kaur" width="300" height="350" />
                <h4 className="about-name">Sathyanarayana Kandi</h4>
                <h6>General Secretary</h6>
              </div>
            </div>
          </div>
    </div>

      {/* <!--Yashvi parvani card--> */}
      <div className="carousel-cell" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="100">
          <div className=" container-fluid">
              <div className="">
                <div className="">
                  <Image src={team_mem_4} className='img-fluid' alt="Yashvi parwani" width="300" height="350" />
                  <h4 className="about-name">Sarojana Kuntolla</h4>
                  <h6>Treasurer</h6>
                </div>
              </div>
            </div>
      </div>
      
      {/* <!--Bineet singh card--> */}
      <div className="carousel-cell" data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-delay="100">
          <div className=" container-fluid">
              <div className="">
                <div className="">
                  <Image src={team_mem_5} className='img-fluid'alt="Bineet Singh" width="300" height="350" />
                  <h4 className="about-name">Venkatesham Battula</h4>
                  <h6>Joint Secretary</h6>
                </div>
              </div>
            </div>
      </div>
    </div>
</section>
</>
  )
}

export default About;