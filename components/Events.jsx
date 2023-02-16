import React from 'react'
import Image from 'next/image'
import event1 from '../bootstrap/images/gallery/7.jpg'

export const Events = () => {
  return (
    <section>
    <div className="container-fluid py-4 my-4 bg-light">
      <div className="about text-center">
        <h2 className="mb-5">EVENTS<hr className="green-hr" /></h2>
    </div>
    </div>
    <hr />
    {/* <!--##################### EVENTS ####################-->
    <!-- Event 1 --> */}
        <div className="row justify-content-start">
            <div className="col-md-5" data-aos="fade-up"
            data-aos-anchor-placement="center-bottom">
                <Image fill src={event1} className="img-fluid" alt="EVENT IMAGE" />
            </div>
            <div className="col-md-7 pt-4" data-aos="fade-left">
                <h2>Career Guidance for Children</h2>
                <h4><b><a href="#">Spoorthy inspire program</a></b></h4>
                <p className="font-italic">
                Career guidance is a formal way for people to receive advice on their career at different stages. Along with this advice, this process often involves formal programs that help people both plan and execute any decisions they make in their career.
                </p>
            </div>
        </div>
        <hr />
    {/* <!-- Event 2 -->
        <!-- <div className="row justify-content-start">
          <div className="col-md-5" data-aos="fade-up"
          data-aos-anchor-placement="center-bottom">
              <img src="{{ url_for('event_image', id=event.id) }}" className="img-fluid" alt="EVENT IMAGE">
          </div>
          <div className="col-md-7 pt-4" data-aos="fade-left">
              <h2>EVENT TITLE</h2>
              <h4><b><a href="#">EVENT SUBTITLE</a></b></h4>
              <p className="font-italic">
              EVENT DESCRIPTION
              </p>
          </div>
          </div>
          <hr> --> */}
    {/* <!--covid-19 awareness--> */}
  </section>
  )
}
