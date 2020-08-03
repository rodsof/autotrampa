import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class IndexAdvert extends Component {
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
      <section class="b-bnr-3 bg-dark">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2 class="b-bnr-3__title ui-tilte">
                Buy Sell Your Car Quickly & Easily with Revus
              </h2>
              <div class="b-bnr-3__info">
                Labore dolore magna aliqua minim ipsum sed ipsumveniam quis
                nostrud exercitation
              </div>
              <a class="b-bnr-3__btn btn btn-primary" href="#">
                get rigistered
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
