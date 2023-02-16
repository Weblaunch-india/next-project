import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from "../bootstrap/images/PNG.png"
import Script from 'next/script'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import $ from 'jquery';

const Footer = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div>
        <footer id="footer">
  <div className="footer-top pb-4">
      <div className="container">
          <div className="row">

              <div className="col-lg-4 col-md-6 footer-contact" style={{"height":"200px"}}>
                   <Image alt='' width='200' height='200' style={{"width": "auto"}} src={logo} />
            </div>
                   <div className="col-lg-4 col-md-6 footer-contact" style={{"height": "200px"}}>
                  <h3 style={{"color": "#009970"}}><b>Spoorthy Organization</b></h3>
                     <p><Link href="https://goo.gl/maps/KEe52NBZfcnS2Nce6 " target="_blank" style={{"color": "#777777"}}>
                      H-NO 11-1/A, EDULABAD ROAD,<br />
                      GHATKESAR MUNICAPAL,<br />
                      MEDCHAL-MALKAJGIRI DISTRICT,<br />
                      TELANGANA 501301<br />
                      </Link>
                      
                      <strong>Phone:</strong> <Link href="tel:+919848205894" style={{"color": "#777777"}}>+91 9848205894</Link><br />
                      
                      <strong>Email:</strong> <Link href="mailto:spoortyorganization1@gmail.com" style={{"color": "#777777"}}>spoortyorganization1@gmail.com</Link><br />
                  </p>
              </div>
          <div className="col-lg-4 pt-4 mt-2">
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
              <Link href="#" className="twitter" target="_blank"><i
                      className="bx bxl-twitter"></i></Link>
              <Link href="https://m.facebook.com/spoorthyorg" className="facebook" target="_blank"><i
                      className="bx bxl-facebook"></i></Link>
              <Link href="https://www.instagram.com/spoorthyorg/" className="instagram" target="_blank"><i
                      className="bx bxl-instagram"></i></Link>
              <Link href="#" className="google-plus"
                  target="_blank"><i className="bx bxl-youtube"></i></Link>
          </div>
      </div>
  </div>
          </div>
      </div>
      <hr />
      <p className="copyright">All Rights Reserved by <strong>Spoorthy Organization © 2023</strong>. Designed and developed by Weblaunch. <Link href="https://weblaunch.in/" target="_blank">Weblaunch</Link></p>
</footer>

<Script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
  integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
  crossOrigin="anonymous" async></Script>
<Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
  integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
  crossOrigin="anonymous" async></Script>
<Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
  integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
  crossOrigin="anonymous" async></Script>


{/* <!--aos js link--> */}
<Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" async></Script>    
{/* <script>AOS.init();</script>
 */}
    </div>
  )
}

export default Footer;