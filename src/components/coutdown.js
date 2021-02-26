import React, { Component } from "react";
import moment from 'moment';
import 'moment-timezone';


class Countdown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
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
      <section className="countdown-clock">
            <div className="card">
                <div className="counter-container">
                    <p className="number">{this.state.days}</p>
                    <div className="divit-left"></div>
                    <div className="divit-right"></div>
                </div>
                <p className="copy">DAYS</p>
            </div>
            <div className="card">
                <div className="counter-container">
                    <p className="number">{this.state.hours}</p>
                    <div className="divit-left"></div>
                    <div className="divit-right"></div>
                </div>
                <p className="copy">HOURS</p>
            </div>
            <div className="card">
                <div className="counter-container">
                    <p className="number">{this.state.minutes}</p>
                    <div className="divit-left"></div>
                    <div className="divit-right"></div> 
                </div>
                <p className="copy">MINUTES</p>
            </div>
            <div className="card">
                <div className="counter-container flip">
                    <p className="number reverse-flip">{this.state.seconds}</p>
                    <div className="divit-left"></div>
                    <div className="divit-right"></div>
                </div>
                <p className="copy">SECONDS</p>
            </div>
      </section>
    )
  }
}
  
export default Countdown;