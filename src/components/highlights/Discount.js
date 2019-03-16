import React, { Component } from 'react';
import { Fade, Slide } from 'react-reveal';

import MyButton from '../utils/MyButton';

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30,
  };

  displayDiscount = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({ discountStart: this.state.discountStart + 1 });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.displayDiscount();
    }, 30);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade delay={250} onReveal={() => this.displayDiscount()}>
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Lorem ipsum dolor sit.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
                similique facere quasi temporibus tempore quisquam saepe
                debitis, atque quae assumenda.
              </p>
              <MyButton
                text="click here"
                bg="#ffa800"
                color="#fff"
                link="http://google.com"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
