import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class IndexSteps extends Component {
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
      <section class="b-steps section-default parallax">
        <div class="b-steps__inner">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="ui-title-slogan">Helps you to find perfect car</div>
                <h2 class="ui-title">
                  How Revus<span class="text-primary"> Works</span>
                </h2>
                <ul class="b-steps-list list-unstyled row">
                  <li class="b-steps-list__item col-lg">
                    <span class="b-steps-list__number">01</span>
                    <div class="b-steps-list__title">Search Our Inventory</div>
                    <div class="b-steps-list__info">
                      Magna aliqua enim aduas dui veniam quis nostrud
                      exercitation ullam laboris aut aliquip ex consequat.
                    </div>
                  </li>
                  <li class="b-steps-list__item col-lg">
                    <span class="b-steps-list__number">02</span>
                    <div class="b-steps-list__title">
                      Choose The Car You Like
                    </div>
                    <div class="b-steps-list__info">
                      Magna aliqua enim aduas dui veniam quis nostrud
                      exercitation ullam laboris aut aliquip ex consequat.
                    </div>
                  </li>
                  <li class="b-steps-list__item col-lg">
                    <span class="b-steps-list__number">03</span>
                    <div class="b-steps-list__title">
                      Apply For Auto Finance
                    </div>
                    <div class="b-steps-list__info">
                      Magna aliqua enim aduas dui veniam quis nostrud
                      exercitation ullam laboris aut aliquip ex consequat.
                    </div>
                  </li>
                  <li class="b-steps-list__item col-lg">
                    <span class="b-steps-list__number">04</span>
                    <div class="b-steps-list__title">Get Approved & Drive</div>
                    <div class="b-steps-list__info">
                      Magna aliqua enim aduas dui veniam quis nostrud
                      exercitation ullam laboris aut aliquip ex consequat.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
