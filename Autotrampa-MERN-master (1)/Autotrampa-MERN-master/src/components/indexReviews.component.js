import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class IndexReviews extends Component {
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
      <section class="section-reviews section-default parallax area-bg area-bg_dark">
        <div class="area-bg__inner">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="text-center">
                  <div class="ui-title-slogan">
                    Helps you to find perfect car
                  </div>
                  <h2 class="ui-title">Customer Reviews</h2>
                  <span class="section-reviews__decor">“</span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div
                  class="b-reviews-slider js-slider"
                  data-slick='{"slidesToShow": 3,  "slidesToScroll": 3, "centerMode": true, "arrows": false, "dots": true, "responsive": [{"breakpoint": 1400, "settings": {"slidesToShow": 2, "slidesToScroll": 2, "centerMode": false}}, {"breakpoint": 768, "settings": {"slidesToShow": 1, "slidesToScroll": 1, "centerMode": false}}]}'
                >
                  <div class="b-reviews">
                    <blockquote class="b-reviews__blockquote">
                      <div class="b-reviews__wrap">
                        <p>
                          Norem ipsum dolor sit amet consectetur adipisicing
                          elit aliqua. Ut enim ad minim veniam, quis nostrud
                          exercita Duis aute irure dolor reprehenderit.
                        </p>
                      </div>
                      <cite class="b-reviews__cite" title="Blockquote Title">
                        <span class="b-reviews__inner">
                          <span class="b-reviews__name">Alexa Cathy</span>
                          <span class="b-reviews__category">Customer</span>
                        </span>
                        <span class="b-reviews__author">
                          <img
                            class="img-fluid"
                            src="assets/media/content/b-reviews/face-1.jpg"
                            alt="foto"
                          />
                        </span>
                      </cite>
                    </blockquote>
                  </div>
                  <div class="b-reviews">
                    <blockquote class="b-reviews__blockquote">
                      <div class="b-reviews__wrap">
                        <p>
                          Norem ipsum dolor sit amet consectetur adipisicing
                          elit aliqua uat enim ad minim veniam, quis nostrud
                          exercita Duis aute irure dolor reprehenderit. Slyly
                          babbled much partook this much in in thus the sauc.
                        </p>
                      </div>
                      <cite class="b-reviews__cite" title="Blockquote Title">
                        <span class="b-reviews__inner">
                          <span class="b-reviews__name">Tina Olivia</span>
                          <span class="b-reviews__category">Customer</span>
                        </span>
                        <span class="b-reviews__author">
                          <img
                            class="img-fluid"
                            src="assets/media/content/b-reviews/face-2.jpg"
                            alt="foto"
                          />
                        </span>
                      </cite>
                    </blockquote>
                  </div>
                  <div class="b-reviews">
                    <blockquote class="b-reviews__blockquote">
                      <div class="b-reviews__wrap">
                        <p>
                          Norem ipsum dolor sit amet consectetur adipisicing
                          elit aliqua. Ut enim ad minim veniam, quis nostrud
                          exercita Duis aute irure dolor reprehenderit.
                        </p>
                      </div>
                      <cite class="b-reviews__cite" title="Blockquote Title">
                        <span class="b-reviews__inner">
                          <span class="b-reviews__name">Alexa Cathy</span>
                          <span class="b-reviews__category">Customer</span>
                        </span>
                        <span class="b-reviews__author">
                          <img
                            class="img-fluid"
                            src="assets/media/content/b-reviews/face-3.jpg"
                            alt="foto"
                          />
                        </span>
                      </cite>
                    </blockquote>
                  </div>
                  <div class="b-reviews">
                    <blockquote class="b-reviews__blockquote">
                      <div class="b-reviews__wrap">
                        <p>
                          Norem ipsum dolor sit amet consectetur adipisicing
                          elit aliqua. Ut enim ad minim veniam, quis nostrud
                          exercita Duis aute irure dolor reprehenderit.
                        </p>
                      </div>
                      <cite class="b-reviews__cite" title="Blockquote Title">
                        <span class="b-reviews__inner">
                          <span class="b-reviews__name">Alexa Cathy</span>
                          <span class="b-reviews__category">Customer</span>
                        </span>
                        <span class="b-reviews__author">
                          <img
                            class="img-fluid"
                            src="assets/media/content/b-reviews/face-1.jpg"
                            alt="foto"
                          />
                        </span>
                      </cite>
                    </blockquote>
                  </div>
                  <div class="b-reviews">
                    <blockquote class="b-reviews__blockquote">
                      <div class="b-reviews__wrap">
                        <p>
                          Norem ipsum dolor sit amet consectetur adipisicing
                          elit aliqua uat enim ad minim veniam, quis nostrud
                          exercita Duis aute irure dolor reprehenderit. Slyly
                          babbled much partook this much in in thus the sauc.
                        </p>
                      </div>
                      <cite class="b-reviews__cite" title="Blockquote Title">
                        <span class="b-reviews__inner">
                          <span class="b-reviews__name">Tina Olivia</span>
                          <span class="b-reviews__category">Customer</span>
                        </span>
                        <span class="b-reviews__author">
                          <img
                            class="img-fluid"
                            src="assets/media/content/b-reviews/face-2.jpg"
                            alt="foto"
                          />
                        </span>
                      </cite>
                    </blockquote>
                  </div>
                  <div class="b-reviews">
                    <blockquote class="b-reviews__blockquote">
                      <div class="b-reviews__wrap">
                        <p>
                          Norem ipsum dolor sit amet consectetur adipisicing
                          elit aliqua. Ut enim ad minim veniam, quis nostrud
                          exercita Duis aute irure dolor reprehenderit.
                        </p>
                      </div>
                      <cite class="b-reviews__cite" title="Blockquote Title">
                        <span class="b-reviews__inner">
                          <span class="b-reviews__name">Alexa Cathy</span>
                          <span class="b-reviews__category">Customer</span>
                        </span>
                        <span class="b-reviews__author">
                          <img
                            class="img-fluid"
                            src="assets/media/content/b-reviews/face-3.jpg"
                            alt="foto"
                          />
                        </span>
                      </cite>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
