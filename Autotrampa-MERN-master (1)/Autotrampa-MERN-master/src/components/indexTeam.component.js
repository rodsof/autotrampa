import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class IndexTeam extends Component {
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
      <section class="section-team section-default">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="text-center">
                <div class="ui-title-slogan">Helps you to find perfect car</div>
                <h2 class="ui-title">
                  Our Sales<span class="text-primary"> Team</span>
                </h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="b-team">
                <div class="b-team__media">
                  <div class="b-team__img">
                    <img
                      class="img-fluid"
                      src="assets/media/content/b-team/1.jpg"
                      alt="Foto"
                    />
                  </div>
                  <ul class="b-team__soc list-unstyled">
                    <li class="b-team__soc-item">
                      <a class="b-team__soc-link" href="#">
                        <i class="ic fab fa-facebook"></i>
                      </a>
                    </li>
                    <li class="b-team__soc-item">
                      <a class="b-team__soc-link" href="#">
                        <i class="ic fab fa-twitter"></i>
                      </a>
                    </li>
                    <li class="b-team__soc-item">
                      <a class="b-team__soc-link" href="#">
                        <i class="ic fab fa-google-plus-g"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="b-team__inner bg-dark">
                  <div class="b-team__name">Alex Leeman</div>
                  <div class="b-team__category">Director</div>
                </div>
                <div class="b-team__footer">
                  <a class="b-team__phone" href="tel:+17553028549">
                    <i class="ic text-primary icon-call-end"></i> +1 755 302
                    8549
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="b-team">
                <div class="b-team__media">
                  <div class="b-team__img">
                    <img
                      class="img-fluid"
                      src="assets/media/content/b-team/2.jpg"
                      alt="Foto"
                    />
                  </div>
                  <ul class="b-team__soc list-unstyled">
                    <li class="b-team__soc-item">
                      <a class="b-team__soc-link" href="#">
                        <i class="ic fab fa-facebook"></i>
                      </a>
                    </li>
                    <li class="b-team__soc-item">
                      <a class="b-team__soc-link" href="#">
                        <i class="ic fab fa-twitter"></i>
                      </a>
                    </li>
                    <li class="b-team__soc-item">
                      <a class="b-team__soc-link" href="#">
                        <i class="ic fab fa-google-plus-g"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="b-team__inner bg-dark">
                  <div class="b-team__name">Diago Johnson</div>
                  <div class="b-team__category">Sales Manager</div>
                </div>
                <div class="b-team__footer">
                  <a class="b-team__phone" href="tel:+17553028549">
                    <i class="ic text-primary icon-call-end"></i> +1 755 302
                    8549
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="b-team">
                <div class="b-team__media">
                  <div class="b-team__img">
                    <img
                      class="img-fluid"
                      src="assets/media/content/b-team/3.jpg"
                      alt="Foto"
                    />
                  </div>
                  <ul class="b-team__soc list-unstyled">
                    <li class="b-team__soc-item">
                      <a class="b-team__soc-link" href="#">
                        <i class="ic fab fa-facebook"></i>
                      </a>
                    </li>
                    <li class="b-team__soc-item">
                      <a class="b-team__soc-link" href="#">
                        <i class="ic fab fa-twitter"></i>
                      </a>
                    </li>
                    <li class="b-team__soc-item">
                      <a class="b-team__soc-link" href="#">
                        <i class="ic fab fa-google-plus-g"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="b-team__inner bg-dark">
                  <div class="b-team__name">Sophia Lauren</div>
                  <div class="b-team__category">Co-Founder</div>
                </div>
                <div class="b-team__footer">
                  <a class="b-team__phone" href="tel:+17553028549">
                    <i class="ic text-primary icon-call-end"></i> +1 755 302
                    8549
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="b-team">
                <div class="b-team__media">
                  <div class="b-team__img">
                    <img
                      class="img-fluid"
                      src="assets/media/content/b-team/4.jpg"
                      alt="Foto"
                    />
                  </div>
                  <ul class="b-team__soc list-unstyled">
                    <li class="b-team__soc-item">
                      <a class="b-team__soc-link" href="#">
                        <i class="ic fab fa-facebook"></i>
                      </a>
                    </li>
                    <li class="b-team__soc-item">
                      <a class="b-team__soc-link" href="#">
                        <i class="ic fab fa-twitter"></i>
                      </a>
                    </li>
                    <li class="b-team__soc-item">
                      <a class="b-team__soc-link" href="#">
                        <i class="ic fab fa-google-plus-g"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="b-team__inner bg-dark">
                  <div class="b-team__name">William Henry</div>
                  <div class="b-team__category">Marketing</div>
                </div>
                <div class="b-team__footer">
                  <a class="b-team__phone" href="tel:+17553028549">
                    <i class="ic text-primary icon-call-end"></i> +1 755 302
                    8549
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
