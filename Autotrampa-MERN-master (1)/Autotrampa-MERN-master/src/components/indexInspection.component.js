import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class IndexInspection extends Component {
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
      <section class="b-bnr bg-dark">
        <div class="container">
          <div class="row">
            <div class="col-xl-6">
              <div class="b-bnr__main">
                <h2 class="b-bnr__title">Book your Free Car Inspection</h2>
                <div class="b-bnr__info">
                  Labore dolore magna aliqua minim ipsum veniam quis nostrud
                  exercitation
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="b-bnr__second">
                <a class="btn btn-primary" href="#">
                  get rigistered
                </a>
                <div class="b-bnr-contacts">
                  <div class="b-bnr-contacts__info">
                    Call Us For Booking Vehicle
                  </div>
                  <a class="b-bnr-contacts__phone" href="tel:+17553028549">
                    <i class="ic icon-call-end text-primary"></i> +1 (755)
                    302-8549
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
