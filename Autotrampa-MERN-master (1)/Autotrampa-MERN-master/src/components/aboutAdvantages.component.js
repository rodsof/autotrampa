import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class AboutAdvantages extends Component {
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
      <div class="container">
        <div class="section-default-sm">
          <div class="row">
            <div class="col-lg-6">
              <section class="section-area">
                <h2 class="ui-title-inner">
                  Our<span class="text-primary"> Advantages</span>
                </h2>
                <div class="accordion" id="accordion-1">
                  <div class="card">
                    <div class="card-header" id="headingOne">
                      <button
                        class="accordion-trigger ui-subtitle"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <i class="ic fas fa-share"></i>We offer eco-petrol
                        technology cars
                      </button>
                    </div>
                    <div
                      class="collapse show"
                      id="collapseOne"
                      aria-labelledby="headingOne"
                      data-parent="#accordion-1"
                    >
                      <div class="card-body">
                        Edipisicing elit sed do eiusmod tempor incididunt ut
                        labore sed dolore magna Ut enim ad minim veniam, quis
                        nostrud exercitation ullam ipsum laboris nisi ut
                        comsecdo consequat duis aute irure dolorin.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingTwo">
                      <button
                        class="accordion-trigger ui-subtitle collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <i class="ic fas fa-share"></i>How Revus can help you
                        buy a new car?
                      </button>
                    </div>
                    <div
                      class="collapse"
                      id="collapseTwo"
                      aria-labelledby="headingTwo"
                      data-parent="#accordion-1"
                    >
                      <div class="card-body">
                        Edipisicing elit sed do eiusmod tempor incididunt ut
                        labore sed dolore magna Ut enim ad minim veniam, quis
                        nostrud exercitation ullam ipsum laboris nisi ut
                        comsecdo consequat duis aute irure dolorin.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingThree">
                      <button
                        class="accordion-trigger ui-subtitle collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <i class="ic fas fa-share"></i>We help to increase auto
                        sales
                      </button>
                    </div>
                    <div
                      class="collapse"
                      id="collapseThree"
                      aria-labelledby="headingThree"
                      data-parent="#accordion-1"
                    >
                      <div class="card-body">
                        Edipisicing elit sed do eiusmod tempor incididunt ut
                        labore sed dolore magna Ut enim ad minim veniam, quis
                        nostrud exercitation ullam ipsum laboris nisi ut
                        comsecdo consequat duis aute irure dolorin.
                      </div>
                    </div>
                  </div>
                </div>
                {/*<!-- end .b-reviews-->*/}
              </section>
            </div>
            <div class="col-lg-6">
              <section class="section-reviews-2">
                <h2 class="ui-title-inner">
                  What Customers<span class="text-primary"> Say</span>
                </h2>
                <div
                  class="b-reviews-slider-2 js-slider"
                  data-slick='{"arrows": false, "dots": true}'
                >
                  <div class="b-reviews-2">
                    <blockquote class="b-reviews-2__blockquote">
                      <div class="b-reviews-2__wrap bg-light">
                        <p>
                          Norem ipsum dolor sit amet consectetur adipisicing
                          elit aliqu uat enim ad minim veniam, quis nostrud
                          exercita Duis aute irure dolor reprehenderit babbled
                          much partook this much sed ipsum in thus the saucy.
                        </p>
                      </div>
                      <cite class="b-reviews-2__cite" title="Blockquote Title">
                        <span class="b-reviews-2__name">Tina Olivia</span>
                        <span class="b-reviews-2__category">
                          BMW 7 Series owner
                        </span>
                      </cite>
                    </blockquote>
                  </div>
                  <div class="b-reviews-2">
                    <blockquote class="b-reviews-2__blockquote">
                      <div class="b-reviews-2__wrap bg-light">
                        <p>
                          Norem ipsum dolor sit amet consectetur adipisicing
                          elit aliqu uat enim ad minim veniam, quis nostrud
                          exercita Duis aute irure dolor reprehenderit babbled
                          much partook this much sed ipsum in thus the saucy.
                        </p>
                      </div>
                      <cite class="b-reviews-2__cite" title="Blockquote Title">
                        <span class="b-reviews-2__name">Tina Olivia</span>
                        <span class="b-reviews-2__category">
                          BMW 7 Series owner
                        </span>
                      </cite>
                    </blockquote>
                  </div>
                  <div class="b-reviews-2">
                    <blockquote class="b-reviews-2__blockquote">
                      <div class="b-reviews-2__wrap bg-light">
                        <p>
                          Norem ipsum dolor sit amet consectetur adipisicing
                          elit aliqu uat enim ad minim veniam, quis nostrud
                          exercita Duis aute irure dolor reprehenderit babbled
                          much partook this much sed ipsum in thus the saucy.
                        </p>
                      </div>
                      <cite class="b-reviews-2__cite" title="Blockquote Title">
                        <span class="b-reviews-2__name">Tina Olivia</span>
                        <span class="b-reviews-2__category">
                          BMW 7 Series owner
                        </span>
                      </cite>
                    </blockquote>
                  </div>
                  <div class="b-reviews-2">
                    <blockquote class="b-reviews-2__blockquote">
                      <div class="b-reviews-2__wrap bg-light">
                        <p>
                          Norem ipsum dolor sit amet consectetur adipisicing
                          elit aliqu uat enim ad minim veniam, quis nostrud
                          exercita Duis aute irure dolor reprehenderit babbled
                          much partook this much sed ipsum in thus the saucy.
                        </p>
                      </div>
                      <cite class="b-reviews-2__cite" title="Blockquote Title">
                        <span class="b-reviews-2__name">Tina Olivia</span>
                        <span class="b-reviews-2__category">
                          BMW 7 Series owner
                        </span>
                      </cite>
                    </blockquote>
                  </div>
                </div>
              </section>
              {/*<!-- end .b-reviews-->*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
