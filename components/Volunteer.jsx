import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import vol from '../bootstrap/images/1.png'

export const Volunteer = () => {
  return (
    <div>
        {/* <!-- Carousel --> */}
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                    <div className="carousel-item active cover-img">
                    </div>
            </div>
        </div>

  {/* <style>
    @media screen and (max-width:768px) {
      .services{
        padding-bottom: 0;
      }
      .services-cards {
        margin-top: 0;
        padding-top: 0;
      }
    }
  </style> */}

  {/* <!-- body text --> */}
  <section className="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="section-title" data-aos="fade-right">
            <h2>Opportunities at Spoorthy Organization</h2>
          </div>
        </div>
        <div className="col-lg-8 justify-content-center" data-aos="zoom-in" data-aos-delay="100">
          <p>Our NGO provides opportunities for young minds to get involved in social work, explore the cause of social
            backwardness and learn skills in the field of HR, PR, content writing, social media marketing and teaching.
            It is for a minimum period of six weeks, and if you wish you can continue working for more, and incentive
            will be provided based on that. It’s a unique opportunity provided to young people to do social service as
            well as learn new skills. This is an NGO where young minds are involved and everyone is given equal
            opportunity to put forth their ideas and are appreciated for that.</p>
          <p>We offer you a wide variety of work that skilled or unskilled interns can do.</p>
          <p>This is a Recognised NGO and provides work experience which involves acquiring skills described before and
            some unseen skills which get embedded in you as you work with the NGO.</p>
        </div>
      </div>
    </div>
  </section>

  

  {/* <!-- cards --> */}
  <section className="services services-cards section-bg">
    <div className="container">

      <div className="row">
        <div className="col-lg-12 col-md-6" >
          <div className="section-title-new"  style={{"text-align": "center"}}  data-aos="fade-right">
            <h2>Fields</h2>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="row">
            <div className="col-md-4 d-flex align-items-stretch">
              <div className="icon-box" data-aos="zoom-in" data-aos-delay="100">
                <div className="icon"><i className="fas fa-desktop fa-lg"></i></div>
                <h4><Link href="">Web Development</Link></h4>
                <p>Develop and update our website on a regular basis, with coordination. Coordinating with content
                  writers and graphic designers. Making things more appealing for the visitors of the site by making it
                  easily accessible and interesting.</p>
              </div>
            </div>

            <div className="col-md-4 d-flex align-items-stretch mt-4 mt-lg-0">
              <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
                <div className="icon"><i className="fas fa-paint-brush fa-lg"></i></div>
                <h4><Link href="">Graphic Designing</Link></h4>
                <p>Design graphics such as carousel, images and infographics for the website and for event marketing.
                  Designing graphics which can be published in social media sites.</p>
              </div>
            </div>

            <div className="col-md-4 d-flex align-items-stretch mt-4 mt-lg-0">
              <div className="icon-box"  data-aos="zoom-in" data-aos-delay="300">
                <div className="icon "><i className="fas fa-pencil-alt fa-lg "></i></div>
                <h4><Link href="">Content Writing</Link></h4>
                <p>To write content for the website in accordance with the web developer and graphic designer. Providing
                  captions for different posters that are posted in various social media platforms.</p>
              </div>
            </div>

            <div className="col-md-4 d-flex align-items-stretch mt-4 ">
              <div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
                <div className="icon"><i className="fas fa-lightbulb fa-lg "></i></div>
                <h4><Link href="">Creative Department</Link></h4>
                <p>This is the department which helps making things more appealing to the audience by reading the
                  thought process of the viewers and the reaction they receive. This department requires creative and
                  predictive thinking. This improvises the way people work and see things around. Making something out
                  of nothing with a worth.</p>
              </div>
            </div>

            <div className="col-md-4 d-flex align-items-stretch mt-4">
              <div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
                <div className="icon"><i className="fas fa-book fa-lg"></i></div>
                <h4><Link href="">Teaching</Link></h4>
                <p>Our NGO lends opportunity for people who want to teach children and give them experience that is
                  required to get them into the crowd. It is a great opportunity as people teach children who cannot
                  afford to study in schools with high fees. With this we are helping the next generation of youth to be
                  more experienced than the current generation in experience and knowledge wise.</p>
              </div>
            </div>

            <div className="col-md-4 d-flex align-items-stretch mt-4">
              <div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
                <div className="icon"><i className="fas fa-handshake fa-lg"></i></div>
                <h4><Link href="">Public Relation</Link></h4>
                <p>Managing the relation between the NGO and the public. Making the relationship as thin transparent as
                  possible by good communication. and using Convincing public people to donate and sponsor for the NGO.
                </p>
              </div>
            </div>

            <div className="col-md-4 d-flex align-items-stretch mt-4">
              <div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
                <div className="icon"><i className="fas fa-users fa-lg"></i></div>
                <h4><Link href="">Human Resource</Link></h4>
                <p>Making the workforce of the NGO. Managing the intake of children and interns. Providing resources to
                  the NGO for various activities that it undertakes. Managing and controlling the workforce, economy and
                  activities of the NGO.</p>
              </div>
            </div>

            <div className="col-md-4 d-flex align-items-stretch mt-4">
              <div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
                <div className="icon"><i className="fas fa-mobile-alt fa-lg"></i></div>
                <h4><Link href="">Social Media Marketing</Link></h4>
                <p>Marketing of the events organised by the NGO in various social media platforms where the NGO is
                  active. Providing captions for the photos to be uploaded in the sites.</p>
              </div>
            </div>

            <div className="col-md-4 d-flex align-items-stretch mt-4">
              <div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
                <div className="icon"><i className="fas fa-camera fa-lg"></i></div>
                <h4><Link href="">Photography</Link></h4>
                <p>Photography is one of the creative department which captures memories and frames them to everyone’s
                  life the NGO has touched. This department requires photography skills and a different unique way of
                  thinking and imagining. This helps increase your thinking capacity and helps you explore the new realm
                  of ideas that can make the world around you beautiful.</p>
              </div>
            </div>


          </div>
        </div>
      </div>

    </div>
  </section>

  {/* <style>
    .img-fluid{
      width: 200px;
      height: 200px;
    }
    @media (max-width: 768px) {
      .register{
        text-align: center;
      }
      .register .section-title{
        text-align: left;
      }
    }
  </style> */}

  <section className="services register">
    <div className="container">
      <div className="row ">
        <div className="col-lg-4">
          <div className="section-title" data-aos="fade-right">
            <h2>Registration</h2>
          </div>
        </div>
        <div className="col-lg-4 justify-content-center" data-aos="zoom-in" data-aos-delay="100">
          <p><strong> To join us <Link href="https://forms.gle/rwVwqFbY5VwLb1Zi8" className="btn btn-primary">Click here!</Link></strong></p>
        </div>
        <div className="col-lg-4 " data-aos="fade-up" >
          <Image width={200} height={200} src={vol} className="img-fluid" alt="joinUs" />
      </div>
      </div>
    </div>
  </section>
    </div>
  )
}
