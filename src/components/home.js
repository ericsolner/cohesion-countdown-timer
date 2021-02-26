import React, { Component } from "react";
import Countdown from './coutdown';


class Home extends Component {

  render() {
    return (
      <section className="home">
        <h2>we're launching soon</h2>
        <Countdown/>
      </section>
    )
  }
}
  
export default Home;