import React, { Component } from "react";
import { ReactSVG } from 'react-svg'
import Countdown from './coutdown';


class Footer extends Component {

  render() {
    return (
      <section className="footer">
        <div className="social">
            <a href="https://www.facebook.com/" target="_blank">
                <ReactSVG className="icon" src="assets/svg/icon-facebook.svg" />
            </a>
            <a href="https://www.pinterest.com/" target="_blank">
                <ReactSVG className="icon" src="assets/svg/icon-pinterest.svg" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
                <ReactSVG className="icon" src="assets/svg/icon-instagram.svg" />
            </a>
        </div>
      </section>
    )
  }
}
  
export default Footer;