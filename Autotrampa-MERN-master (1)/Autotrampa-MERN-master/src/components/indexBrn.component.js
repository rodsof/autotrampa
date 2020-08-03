import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class IndexBrn extends Component {
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
      <section class="b-bnr-2 section-default">
        <div class="b-bnr-2__figure">
          <img
            class="b-bnr-2__img img-fluid"
            src="assets/media/content/b-bnr/1.png"
            alt="auto"
          />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="b-bnr-2__section b-bnr-2__section_first bg-dark">
                <h2 class="b-bnr-2__title">
                  Are you looking to
                  <br />
                  buy a new car?
                </h2>
                <a class="b-bnr-2__link" href="#">
                  Start searching our inventory that includes 2000+ cars
                </a>
              </div>
            </div>
            <div class="col-md-6">
              <div class="b-bnr-2__section b-bnr-2__section_second bg-primary">
                <div class="b-bnr-2__title">
                  Are you looking to <br />
                  sell your car?
                </div>
                <a class="b-bnr-2__link" href="#">
                  Add your vehicle to inventory & reach 3k potential buyers
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
