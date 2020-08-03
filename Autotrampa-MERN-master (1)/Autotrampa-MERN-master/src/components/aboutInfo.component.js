import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class AboutInfo extends Component {
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
      <div class="section-default bg-light">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="b-advantages">
                <i class="b-advantages__ic flaticon-car-repair-check-list"></i>
                <div class="b-advantages__title">Easy Financing</div>
                <div class="b-advantages__info">
                  Edipisicing elit sed eiusmodsul sed tempor enim min veniam
                  aute nostrud xercitation comsec nsequat duis sintaute irure.
                </div>
              </div>
              {/*<!-- end .b-advantages-->*/}
            </div>
            <div class="col-lg-4">
              <div class="b-advantages active">
                <i class="b-advantages__ic flaticon-speedometer"></i>
                <div class="b-advantages__title">All Brands Cars</div>
                <div class="b-advantages__info">
                  Edipisicing elit sed eiusmodsul sed tempor enim min veniam
                  aute nostrud xercitation comsec nsequat duis sintaute irure.
                </div>
              </div>
              {/*<!-- end .b-advantages-->*/}
            </div>
            <div class="col-lg-4">
              <div class="b-advantages">
                <i class="b-advantages__ic flaticon-car-repair"></i>
                <div class="b-advantages__title">Quality Services</div>
                <div class="b-advantages__info">
                  Edipisicing elit sed eiusmodsul sed tempor enim min veniam
                  aute nostrud xercitation comsec nsequat duis sintaute irure.
                </div>
              </div>
              {/*<!-- end .b-advantages-->*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
