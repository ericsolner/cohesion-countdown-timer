import React, { Component } from "react";
import moment from 'moment';
import 'moment-timezone';


class Countdown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            months: 0,
            minutes: 0,
            seconds: 0,
        }

        this.setTime = this.setTime.bind(this);

    }
    
    
    setTime(){
        var now = moment(); //todays date and time
        var end = moment.tz("2021-03-09 07:04", "America/Chicago"); //Timer ends 14 days from when it was created. 7:04pm on 02/28/2021. Uses Central Standard time. 
        var duration = moment.duration(now.diff(end)); //time remaining until end date. 
    
        
    
        this.setState({
            days: Math.abs(duration._data.days),
            hours: Math.abs(duration._data.hours),
            minutes: Math.abs(duration._data.minutes),
            seconds: Math.abs(duration._data.seconds)
        });
    }
    
    
    
    componentDidMount() {
        var self = this;
        this.setState({updated: window.setInterval(function(){
            self.setTime();
        }, 0)})
    }

  render() {
    return (
      <section className="couter">
            <div className="card">
                <div className="counter-container">
                    <p className="counter">{this.state.days}</p>
                </div>
                <p className="copy">DAYS</p>
            </div>
            <div className="card">
                <div className="counter-container">
                    <p className="counter">{this.state.hours}</p>
                </div>
                <p className="copy">HOURS</p>
            </div>
            <div className="card">
                <div className="counter-container">
                    <p className="counter">{this.state.minutes}</p> 
                </div>
                <p className="copy">MINUTES</p>
            </div>
            <div className="card">
                <div className="counter-container">
                    <p className="counter">{this.state.seconds}</p>
                </div>
                <p className="copy">SECONDS</p>
            </div>
      </section>
    )
  }
}
  
export default Countdown;