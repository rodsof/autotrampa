import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class IndexServices extends Component {
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
      <section class="b-services section-default bg-light">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <ul class="b-services-nav nav" id="servicesTab" role="tablist">
                <li class="b-services-nav__item nav-item col-lg-6 col-md-4">
                  <a
                    class="b-services-nav__link nav-link active"
                    id="repairing-tab"
                    data-toggle="tab"
                    href="#repairing"
                    role="tab"
                    aria-controls="repairing"
                    aria-selected="true"
                  >
                    <span class="b-services-nav__number">01</span>
                    <i class="ic flaticon-car-door"></i>
                    <span class="b-services-nav__info">Parts Repairing</span>
                  </a>
                </li>
                <li class="b-services-nav__item nav-item col-lg-6 col-md-4">
                  <a
                    class="b-services-nav__link nav-link"
                    id="inspection-tab"
                    data-toggle="tab"
                    href="#inspection"
                    role="tab"
                    aria-controls="inspection"
                    aria-selected="false"
                  >
                    <span class="b-services-nav__number">02</span>
                    <i class="ic flaticon-plunger"></i>
                    <span class="b-services-nav__info">Car Inspection</span>
                  </a>
                </li>
                <li class="b-services-nav__item nav-item col-lg-6 col-md-4">
                  <a
                    class="b-services-nav__link nav-link"
                    id="trade-tab"
                    data-toggle="tab"
                    href="#trade"
                    role="tab"
                    aria-controls="trade"
                    aria-selected="false"
                  >
                    <span class="b-services-nav__number">03</span>
                    <i class="ic flaticon-car-2"></i>
                    <span class="b-services-nav__info">Vehicle Trade-In</span>
                  </a>
                </li>
                <li class="b-services-nav__item nav-item col-lg-6 col-md-4">
                  <a
                    class="b-services-nav__link nav-link"
                    id="painting-tab"
                    data-toggle="tab"
                    href="#painting"
                    role="tab"
                    aria-controls="painting"
                    aria-selected="false"
                  >
                    <span class="b-services-nav__number">04</span>
                    <i class="ic flaticon-paint-roller"></i>
                    <span class="b-services-nav__info">Auto Painting</span>
                  </a>
                </li>
                <li class="b-services-nav__item nav-item col-lg-6 col-md-4">
                  <a
                    class="b-services-nav__link nav-link"
                    id="financing-tab"
                    data-toggle="tab"
                    href="#financing"
                    role="tab"
                    aria-controls="financing"
                    aria-selected="false"
                  >
                    <span class="b-services-nav__number">05</span>
                    <i class="ic flaticon-money"></i>
                    <span class="b-services-nav__info">Auto Financing</span>
                  </a>
                </li>
                <li class="b-services-nav__item nav-item col-lg-6 col-md-4">
                  <a
                    class="b-services-nav__link nav-link"
                    id="delivery-tab"
                    data-toggle="tab"
                    href="#delivery"
                    role="tab"
                    aria-controls="delivery"
                    aria-selected="false"
                  >
                    <span class="b-services-nav__number">06</span>
                    <i class="ic flaticon-car-4"></i>
                    <span class="b-services-nav__info">Vehicle Delivery</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-6">
              <div class="b-services__main">
                <div class="ui-title-slogan">
                  Helps you to find your next car easily
                </div>
                <h2 class="ui-title">
                  Services We<span class="text-primary"> Offers</span>
                </h2>
                <div
                  class="b-services-content tab-content"
                  id="servicesTabContent"
                >
                  <div
                    class="b-services-content__item tab-pane fade show active"
                    id="repairing"
                    role="tabpanel"
                    aria-labelledby="repairing-tab"
                  >
                    <img
                      class="img-fluid"
                      src="assets/media/content/b-services/1.jpg"
                      alt="foto"
                    />
                    <h3 class="b-services-content__title ui-title-sm">
                      Parts Repairing
                    </h3>
                    <p>
                      Edipisicing elit sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqa Ut enim ad minim veniam, quis
                      nostrud exercitation ullam co laboris nisi ut aliquip
                      comsecdo consequat duis aute irure dolorin reprehenderits.
                      Non proident sunt in culpa qudesa officia deserunt mollit
                      anim id est laborum.
                    </p>
                  </div>
                  <div
                    class="b-services-content__item tab-pane fade"
                    id="inspection"
                    role="tabpanel"
                    aria-labelledby="inspection-tab"
                  >
                    <img
                      class="img-fluid"
                      src="assets/media/content/b-services/1.jpg"
                      alt="foto"
                    />
                    <h3 class="b-services-content__title ui-title-sm">
                      Car Inspection
                    </h3>
                    <p>
                      Edipisicing elit sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqa Ut enim ad minim veniam, quis
                      nostrud exercitation ullam co laboris nisi ut aliquip
                      comsecdo consequat duis aute irure dolorin reprehenderits.
                      Non proident sunt in culpa qudesa officia deserunt mollit
                      anim id est laborum.
                    </p>
                  </div>
                  <div
                    class="b-services-content__item tab-pane fade"
                    id="trade"
                    role="tabpanel"
                    aria-labelledby="trade-tab"
                  >
                    <img
                      class="img-fluid"
                      src="assets/media/content/b-services/1.jpg"
                      alt="foto"
                    />
                    <h3 class="b-services-content__title ui-title-sm">
                      Vehicle Trade-In
                    </h3>
                    <p>
                      Edipisicing elit sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqa Ut enim ad minim veniam, quis
                      nostrud exercitation ullam co laboris nisi ut aliquip
                      comsecdo consequat duis aute irure dolorin reprehenderits.
                      Non proident sunt in culpa qudesa officia deserunt mollit
                      anim id est laborum.
                    </p>
                  </div>
                  <div
                    class="b-services-content__item tab-pane fade"
                    id="painting"
                    role="tabpanel"
                    aria-labelledby="painting-tab"
                  >
                    <img
                      class="img-fluid"
                      src="assets/media/content/b-services/1.jpg"
                      alt="foto"
                    />
                    <h3 class="b-services-content__title ui-title-sm">
                      Auto Painting
                    </h3>
                    <p>
                      Edipisicing elit sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqa Ut enim ad minim veniam, quis
                      nostrud exercitation ullam co laboris nisi ut aliquip
                      comsecdo consequat duis aute irure dolorin reprehenderits.
                      Non proident sunt in culpa qudesa officia deserunt mollit
                      anim id est laborum.
                    </p>
                  </div>
                  <div
                    class="b-services-content__item tab-pane fade"
                    id="financing"
                    role="tabpanel"
                    aria-labelledby="financing-tab"
                  >
                    <img
                      class="img-fluid"
                      src="assets/media/content/b-services/1.jpg"
                      alt="foto"
                    />
                    <h3 class="b-services-content__title ui-title-sm">
                      Auto Financing
                    </h3>
                    <p>
                      Edipisicing elit sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqa Ut enim ad minim veniam, quis
                      nostrud exercitation ullam co laboris nisi ut aliquip
                      comsecdo consequat duis aute irure dolorin reprehenderits.
                      Non proident sunt in culpa qudesa officia deserunt mollit
                      anim id est laborum.
                    </p>
                  </div>
                  <div
                    class="b-services-content__item tab-pane fade"
                    id="delivery"
                    role="tabpanel"
                    aria-labelledby="delivery-tab"
                  >
                    <img
                      class="img-fluid"
                      src="assets/media/content/b-services/1.jpg"
                      alt="foto"
                    />
                    <h3 class="b-services-content__title ui-title-sm">
                      Vehicle Delivery
                    </h3>
                    <p>
                      Edipisicing elit sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqa Ut enim ad minim veniam, quis
                      nostrud exercitation ullam co laboris nisi ut aliquip
                      comsecdo consequat duis aute irure dolorin reprehenderits.
                      Non proident sunt in culpa qudesa officia deserunt mollit
                      anim id est laborum.
                    </p>
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
