import React, { Component } from "react";
import { ReactSVG } from 'react-svg'
import Countdown from './coutdown';


class Home extends Component {

  render() {
    return (
      <section className="home">
      <p>home</p>
      <Countdown/>
      <div>
        <ReactSVG src="assets/svg/bg-stars.svg" />
      </div>
      </section>
    )
  }
}
  
export default Home;