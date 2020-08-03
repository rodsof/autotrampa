import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
import axios from "axios";
import { Redirect } from "react-router-dom";
import loadScript from "../scripts.js";

export default class MainFind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
      fullName: "",
      redirect: null,
    };
  }
  componentDidMount() {}

  render() {
    return (
      <div class="section-area bg-light">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="b-find">
                <ul class="b-find-nav nav nav-tabs" id="findTab" role="tablist">
                  <li class="b-find-nav__item nav-item">
                    <a
                      class="b-find-nav__link nav-link active"
                      id="tab-allCar"
                      data-toggle="tab"
                      href="#content-allCar"
                      role="tab"
                      aria-controls="content-allCar"
                      aria-selected="true"
                    >
                      All Car Types
                    </a>
                  </li>
                  <li class="b-find-nav__item nav-item">
                    <a
                      class="b-find-nav__link nav-link"
                      id="tab-newCars"
                      data-toggle="tab"
                      href="#content-newCars"
                      role="tab"
                      aria-controls="content-newCars"
                      aria-selected="false"
                    >
                      New Cars
                    </a>
                  </li>
                  <li class="b-find-nav__item nav-item">
                    <a
                      class="b-find-nav__link nav-link"
                      id="tab-usedCars"
                      data-toggle="tab"
                      href="#content-usedCars"
                      role="tab"
                      aria-controls="content-usedCars"
                      aria-selected="false"
                    >
                      Used Cars
                    </a>
                  </li>
                </ul>
                <div class="b-find-content tab-content" id="findTabContent">
                  <div class="tab-pane fade show active" id="content-allCar">
                    <form class="b-find__form">
                      <div class="b-find__row">
                        <div class="b-find__main">
                          <div class="b-find__inner">
                            <div class="b-find__item">
                              <div class="b-find__label">
                                <span class="b-find__number">01</span> Select
                                Make
                              </div>
                              <div class="b-find__selector">
                                <select
                                  class="selectpicker"
                                  data-width="100%"
                                  data-style="ui-select"
                                >
                                  <option>Audi</option>
                                  <option>BMV</option>
                                  <option>Opel</option>
                                </select>
                              </div>
                            </div>
                            <div class="b-find__item">
                              <div class="b-find__label">
                                <span class="b-find__number">02</span> Select a
                                Model
                              </div>
                              <div class="b-find__selector">
                                <select
                                  class="selectpicker"
                                  data-width="100%"
                                  data-style="ui-select"
                                >
                                  <option>Model 1</option>
                                  <option>Model 2</option>
                                  <option>Model 3</option>
                                </select>
                              </div>
                            </div>
                            <div class="b-find__item">
                              <div class="b-find__label">
                                <span class="b-find__number">03</span> Price
                                Range
                              </div>
                              <div class="b-find__selector">
                                <select
                                  class="selectpicker"
                                  data-width="100%"
                                  data-style="ui-select"
                                >
                                  <option>Max $5000</option>
                                  <option>Max $15000</option>
                                  <option>Max $25000</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button class="b-find__btn btn btn-primary">
                          Search
                        </button>
                      </div>
                      <div class="b-find__checkbox-group">
                        <span class="b-find__checkbox-item">
                          <input
                            class="forms__check"
                            id="newCars"
                            type="checkbox"
                            checked="checked"
                          />
                          <label
                            class="forms__label forms__label-check"
                            for="newCars"
                          >
                            New Cars
                          </label>
                        </span>
                        <span class="b-find__checkbox-item">
                          <input
                            class="forms__check"
                            id="usedCars"
                            type="checkbox"
                          />
                          <label
                            class="forms__label forms__label-check"
                            for="usedCars"
                          >
                            Used Cars
                          </label>
                        </span>
                      </div>
                    </form>
                  </div>
                  <div class="tab-pane fade" id="content-newCars">
                    <form class="b-find__form">
                      <div class="b-find__row">
                        <div class="b-find__main">
                          <div class="b-find__inner">
                            <div class="b-find__item">
                              <div class="b-find__label">
                                <span class="b-find__number">01</span> Select
                                Make
                              </div>
                              <div class="b-find__selector">
                                <select
                                  class="selectpicker"
                                  data-width="100%"
                                  data-style="ui-select"
                                >
                                  <option>Audi</option>
                                  <option>BMV</option>
                                  <option>Opel</option>
                                </select>
                              </div>
                            </div>
                            <div class="b-find__item">
                              <div class="b-find__label">
                                <span class="b-find__number">02</span> Select a
                                Model
                              </div>
                              <div class="b-find__selector">
                                <select
                                  class="selectpicker"
                                  data-width="100%"
                                  data-style="ui-select"
                                >
                                  <option>Model 1</option>
                                  <option>Model 2</option>
                                  <option>Model 3</option>
                                </select>
                              </div>
                            </div>
                            <div class="b-find__item">
                              <div class="b-find__label">
                                <span class="b-find__number">03</span> Price
                                Range
                              </div>
                              <div class="b-find__selector">
                                <select
                                  class="selectpicker"
                                  data-width="100%"
                                  data-style="ui-select"
                                >
                                  <option>Max $5000</option>
                                  <option>Max $15000</option>
                                  <option>Max $25000</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button class="b-find__btn btn btn-primary">
                          Search
                        </button>
                      </div>
                      <div class="b-find__checkbox-group">
                        <span class="b-find__checkbox-item">
                          <input
                            class="forms__check"
                            id="newCars2"
                            type="checkbox"
                            checked="checked"
                          />
                          <label
                            class="forms__label forms__label-check"
                            for="newCars2"
                          >
                            New Cars
                          </label>
                        </span>
                        <span class="b-find__checkbox-item">
                          <input
                            class="forms__check"
                            id="usedCars2"
                            type="checkbox"
                          />
                          <label
                            class="forms__label forms__label-check"
                            for="usedCars2"
                          >
                            Used Cars
                          </label>
                        </span>
                      </div>
                    </form>
                  </div>
                  <div class="tab-pane fade" id="content-usedCars">
                    <form class="b-find__form">
                      <div class="b-find__row">
                        <div class="b-find__main">
                          <div class="b-find__inner">
                            <div class="b-find__item">
                              <div class="b-find__label">
                                <span class="b-find__number">01</span> Select
                                Make
                              </div>
                              <div class="b-find__selector">
                                <select
                                  class="selectpicker"
                                  data-width="100%"
                                  data-style="ui-select"
                                >
                                  <option>Audi</option>
                                  <option>BMV</option>
                                  <option>Opel</option>
                                </select>
                              </div>
                            </div>
                            <div class="b-find__item">
                              <div class="b-find__label">
                                <span class="b-find__number">02</span> Select a
                                Model
                              </div>
                              <div class="b-find__selector">
                                <select
                                  class="selectpicker"
                                  data-width="100%"
                                  data-style="ui-select"
                                >
                                  <option>Model 1</option>
                                  <option>Model 2</option>
                                  <option>Model 3</option>
                                </select>
                              </div>
                            </div>
                            <div class="b-find__item">
                              <div class="b-find__label">
                                <span class="b-find__number">03</span> Price
                                Range
                              </div>
                              <div class="b-find__selector">
                                <select
                                  class="selectpicker"
                                  data-width="100%"
                                  data-style="ui-select"
                                >
                                  <option>Max $5000</option>
                                  <option>Max $15000</option>
                                  <option>Max $25000</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button class="b-find__btn btn btn-primary">
                          Search
                        </button>
                      </div>
                      <div class="b-find__checkbox-group">
                        <span class="b-find__checkbox-item">
                          <input
                            class="forms__check"
                            id="newCars3"
                            type="checkbox"
                            checked="checked"
                          />
                          <label
                            class="forms__label forms__label-check"
                            for="newCars3"
                          >
                            New Cars
                          </label>
                        </span>
                        <span class="b-find__checkbox-item">
                          <input
                            class="forms__check"
                            id="usedCars3"
                            type="checkbox"
                          />
                          <label
                            class="forms__label forms__label-check"
                            for="usedCars3"
                          >
                            Used Cars
                          </label>
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
