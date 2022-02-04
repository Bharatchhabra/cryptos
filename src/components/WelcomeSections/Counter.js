import React from "react";
import { Container } from "react-bootstrap";
import Slide from "react-reveal/Slide";

import "./welcomepage.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "Dec, 12, 2021",
      days: "0",
      hours: "0",
      minutes: "0",
      seconds: "0",
    };
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    // console.log(time);
    if (time < 0) {
      console.log("Date passed");
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));

      this.setState({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
  }

  render() {
    return (
      <div>
        <Slide center delay={1000}>
          <div className="countdown_wrapper text-center mt-5">
            <div className="countdown_top sec-subheading">Countdown</div>

            <div className="countdown_bottom d-flex justify-content-center">
              <div className="counter_item">
                <div className="countdown_time">
                  <div className="countdown_days numbers">
                    {this.state.days}
                  </div>
                  <div className="countdown_tag">Days</div>
                </div>
              </div>

              <div className="counter_item">
                <div className="countdown_time">
                  <div className="countdown_hours numbers">
                    {this.state.hours}
                  </div>
                  <div className="countdown_tag">Hours</div>
                </div>
              </div>

              <div className="counter_item">
                <div className="countdown_time">
                  <div className="countdown_hours numbers">
                    {this.state.minutes}
                  </div>
                  <div className="countdown_tag">Minutes</div>
                </div>
              </div>

              <div className="counter_item">
                <div className="countdown_time numbers">
                  {this.state.seconds}
                </div>
                <div className="countdown_tag">Sec</div>               
              </div>
              
            </div>
          </div>
        </Slide>
      </div>
    );
  }
}

export default Counter;
