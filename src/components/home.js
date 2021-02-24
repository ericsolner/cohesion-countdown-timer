import React, { Component } from "react";
import { ReactSVG } from 'react-svg'


class Home extends Component {

  render() {
    return (
      <section className="home">
      <p>home</p>
      <div>
        <ReactSVG src="assets/svg/bg-stars.svg" />
      </div>
      </section>
    )
  }
}
  
export default Home;