import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class IndexProgress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
      fullName: "",
      redirect: null,
    };
  }

  render() {
    return (
      <div class="section-progress">
        <div class="container">
          <ul class="b-progress-list row list-unstyled">
            <li class="b-progress-list__item col-md-3">
              <div class="b-progress-list__wrap bg-light">
                <span class="b-progress-list__name">Vehicles Stock</span>
                <span
                  class="b-progress-list__percent js-chart"
                  data-percent="3874"
                >
                  <span class="js-percent"></span>
                </span>
              </div>
            </li>
            <li class="b-progress-list__item col-md-3">
              <div class="b-progress-list__wrap bg-light">
                <span class="b-progress-list__name">dealers served</span>
                <span
                  class="b-progress-list__percent js-chart"
                  data-percent="299"
                >
                  <span class="js-percent"></span>
                  <span>+</span>
                </span>
              </div>
            </li>
            <li class="b-progress-list__item col-md-3">
              <div class="b-progress-list__wrap bg-light">
                <span class="b-progress-list__name">Happy Customers</span>
                <span
                  class="b-progress-list__percent js-chart"
                  data-percent="6403"
                >
                  <span class="js-percent"></span>
                </span>
              </div>
            </li>
            <li class="b-progress-list__item col-md-3">
              <div class="b-progress-list__wrap bg-light">
                <span class="b-progress-list__name">vehicles on sale</span>
                <span
                  class="b-progress-list__percent js-chart"
                  data-percent="1450"
                >
                  <span class="js-percent"></span>
                  <span>+</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
