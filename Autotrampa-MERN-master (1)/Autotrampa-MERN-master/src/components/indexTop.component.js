import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class IndexTop extends Component {
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
      <section class="b-isotope section-default">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <div class="ui-title-slogan">Helps you to find perfect car</div>
              <h2 class="ui-title">
                Our Vehicles<span class="text-primary"> Listing</span>
              </h2>
              <ul class="b-isotope-filter list-unstyled">
                <li class="current">
                  <a href="" data-filter="*">
                    Show All
                  </a>
                </li>
                <li>
                  <a href="" data-filter=".bmw">
                    BMW
                  </a>
                </li>
                <li>
                  <a href="" data-filter=".honda">
                    Honda
                  </a>
                </li>
                <li>
                  <a href="" data-filter=".mercedes">
                    Mercedes
                  </a>
                </li>
                <li>
                  <a href="" data-filter=".rover">
                    Range Rover
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <ul class="b-isotope-grid grid list-unstyled row">
            <li class="grid-sizer col-lg-4 col-md-6"></li>
            <li class="b-isotope-grid__item grid-item col-lg-4 col-md-6 web honda">
              <div class="b-goods-f b-goods-f_dark">
                <div class="b-goods-f__media">
                  <a href="#">
                    <img
                      class="b-goods-f__img img-scale"
                      src="assets/media/content/b-goods/360x260/1.jpg"
                      alt="foto"
                    />
                  </a>
                </div>
                <div class="b-goods-f__main">
                  <div class="b-goods-f__descrip">
                    <div class="b-goods-f__title">
                      <span>Jaguar GX 490i</span>
                    </div>
                    <div class="b-goods-f__info">
                      Magna aliqua enim aduas veniam quis nostrud exercitation
                      ullam laboris aliquip.
                    </div>
                    <ul class="b-goods-f__list list-unstyled">
                      <li class="b-goods-f__list-item">
                        <span class="b-goods-f__list-info">35,000km</span>
                      </li>
                      <li class="b-goods-f__list-item">
                        <span class="b-goods-f__list-info">2019</span>
                      </li>
                      <li class="b-goods-f__list-item">
                        <span class="b-goods-f__list-info">Manual</span>
                      </li>
                      <li class="b-goods-f__list-item">
                        <span class="b-goods-f__list-info">Petrol</span>
                      </li>
                      <li class="b-goods-f__list-item">
                        <span class="b-goods-f__list-info">160 hp</span>
                      </li>
                    </ul>
                  </div>
                  <div class="b-goods-f__sidebar">
                    <span class="b-goods-f__price-group">
                      <span class="b-goods-f__price">
                        <span class="b-goods-f__price-numb">$30,480</span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              {/*end .b-goods*/}
            </li>
            <li class="b-isotope-grid__item grid-item col-lg-4 col-md-6 web bmw">
              <div class="b-goods-f b-goods-f_dark">
                <div class="b-goods-f__media">
                  <a href="#">
                    <img
                      class="b-goods-f__img img-scale"
                      src="assets/media/content/b-goods/360x260/2.jpg"
                      alt="foto"
                    />
                  </a>
                </div>
                <div class="b-goods-f__main">
                  <div class="b-goods-f__descrip">
                    <div class="b-goods-f__title">
                      <span class="b-goods-f__label bg-primary">NEW</span>
                      <span>Volkswagen Tiguan</span>
                    </div>
                    <div class="b-goods-f__info">
                      Magna aliqua enim aduas veniam quis nostrud exercitation
                      ullam laboris aliquip.
                    </div>
                    <ul class="b-goods-f__list list-unstyled">
                      <li class="b-goods-f__list-item">
                        <span class="b-goods-f__list-info">35,000km</span>
                      </li>
                      <li class="b-goods-f__list-item">
                        <span class="b-goods-f__list-info">2019</span>
                      </li>
                      <li class="b-goods-f__list-item">
                        <span class="b-goods-f__list-info">Manual</span>
                      </li>
                      <li class="b-goods-f__list-item">
                        <span class="b-goods-f__list-info">Petrol</span>
                      </li>
                      <li class="b-goods-f__list-item">
                        <span class="b-goods-f__list-info">160 hp</span>
                      </li>
                    </ul>
                  </div>
                  <div class="b-goods-f__sidebar">
                    <span class="b-goods-f__price-group">
                      <span class="b-goods-f__price">
                        <span class="b-goods-f__price-numb">$45,800</span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              {/*end .b-goods*/}
            </li>
            <li class="b-isotope-grid__item grid-item col-lg-4 col-md-6 web honda">
              <div class="b-goods-f b-goods-f_dark">
                <div class="b-goods-f__media">
                  <a href="#">
                    <img
                      class="b-goods-f__img img-scale"
                      src="assets/media/content/b-goods/360x260/3.jpg"
                      alt="foto"
                    />
                  </a>
                </div>
                <div class="b-goods-f__main">
                  <div class="b-goods-f__descrip">
                    <div class="b-goods-f__title">
                      <span>Tesla Model RX3</span>
                    </div>
                    <div class="b-goods-f__info">
                      Magna aliqua enim aduas veniam quis nostrud exercitation
                      ullam laboris aliquip.
                    </div>
                    <ul class="b-goods-f__list list-unstyled">
                      <li class="b-goods-f__list-item">
                        <span class="b-goods-f__list-info">35,000km</span>
                      </li>
                      <li class="b-goods-f__list-item">
                        <span class="b-goods-f__list-info">2019</span>
                      </li>
                      <li class="b-goods-f__list-item">
                        <span class="b-goods-f__list-info">Manual</span>
                      </li>
                      <li class="b-goods-f__list-item">
                        <span class="b-goods-f__list-info">Petrol</span>
                      </li>
                      <li class="b-goods-f__list-item">
                        <span class="b-goods-f__list-info">160 hp</span>
                      </li>
                    </ul>
                  </div>
                  <div class="b-goods-f__sidebar">
                    <span class="b-goods-f__price-group">
                      <span class="b-goods-f__price">
                        <span class="b-goods-f__price-numb">$18,250</span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              {/*end .b-goods*/}
            </li>
            <li class="b-isotope-grid__item grid-item col-lg-4 col-md-6 web rover">
              <div class="b-goods-f b-goods-f_dark">
                <div class="b-goods-f__media">
                  <a href="#">
                    <img
                      class="b-goods-f__img img-scale"
                      src="assets/media/content/b-goods/360x260/4.jpg"
                      alt="foto"
                    />
                  </a>
                </div>
                <div class="b-goods-f__main">
                  <div class="b-goods-f__descrip">
                    <div class="b-goods-f__title">
                      <span>Lexus RC 3500</span>
                    </div>
                    <div class="b-goods-f__info">
                      Magna aliqua enim aduas veniam quis nostrud exercitation
                      ullam laboris aliquip.
                    </div>
                    <ul class="b-goods-f__list list-unstyled">
                      <li class="b-goods-f__list-item">
                        <span class="b-goods-f__list-info">35,000km</span>
                      </li>
                      <li class="b-goods-f__list-item">
                        <span class="b-goods-f__list-info">2019</span>
                      </li>
                      <li class="b-goods-f__list-item">
                        <span class="b-goods-f__list-info">Manual</span>
                      </li>
                      <li class="b-goods-f__list-item">
                        <span class="b-goods-f__list-info">Petrol</span>
                      </li>
                      <li class="b-goods-f__list-item">
                        <span class="b-goods-f__list-info">160 hp</span>
                      </li>
                    </ul>
                  </div>
                  <div class="b-goods-f__sidebar">
                    <span class="b-goods-f__price-group">
                      <span class="b-goods-f__price">
                        <span class="b-goods-f__price-numb">$26,080</span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              {/*end .b-goods*/}
            </li>
            <li class="b-isotope-grid__item grid-item col-lg-4 col-md-6 web mercedes">
              <div class="b-goods-f b-goods-f_dark">
                <div class="b-goods-f__media">
                  <a href="#">
                    <img
                      class="b-goods-f__img img-scale"
                      src="assets/media/content/b-goods/360x260/5.jpg"
                      alt="foto"
                    />
                  </a>
                </div>
                <div class="b-goods-f__main">
                  <div class="b-goods-f__descrip">
                    <div class="b-goods-f__title">
                      <span>Mercedes SX</span>
                    </div>
                    <div class="b-goods-f__info">
                      Magna aliqua enim aduas veniam quis nostrud exercitation
                      ullam laboris aliquip.
                    </div>
                    <ul class="b-goods-f__list list-unstyled">
                      <li class="b-goods-f__list-item">
                        <span class="b-goods-f__list-info">35,000km</span>
                      </li>
                      <li class="b-goods-f__list-item">
                        <span class="b-goods-f__list-info">2019</span>
                      </li>
                      <li class="b-goods-f__list-item">
                        <span class="b-goods-f__list-info">Manual</span>
                      </li>
                      <li class="b-goods-f__list-item">
                        <span class="b-goods-f__list-info">Petrol</span>
                      </li>
                      <li class="b-goods-f__list-item">
                        <span class="b-goods-f__list-info">160 hp</span>
                      </li>
                    </ul>
                  </div>
                  <div class="b-goods-f__sidebar">
                    <span class="b-goods-f__price-group">
                      <span class="b-goods-f__price">
                        <span class="b-goods-f__price-numb">$66,500</span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              {/*end .b-goods*/}
            </li>
            <li class="b-isotope-grid__item grid-item col-lg-4 col-md-6 web bmw">
              <div class="b-goods-f b-goods-f_dark">
                <div class="b-goods-f__media">
                  <a href="#">
                    <img
                      class="b-goods-f__img img-scale"
                      src="assets/media/content/b-goods/360x260/6.jpg"
                      alt="foto"
                    />
                  </a>
                </div>
                <div class="b-goods-f__main">
                  <div class="b-goods-f__descrip">
                    <div class="b-goods-f__title">
                      <span>Porsche 911 Targa</span>
                    </div>
                    <div class="b-goods-f__info">
                      Magna aliqua enim aduas veniam quis nostrud exercitation
                      ullam laboris aliquip.
                    </div>
                    <ul class="b-goods-f__list list-unstyled">
                      <li class="b-goods-f__list-item">
                        <span class="b-goods-f__list-info">35,000km</span>
                      </li>
                      <li class="b-goods-f__list-item">
                        <span class="b-goods-f__list-info">2019</span>
                      </li>
                      <li class="b-goods-f__list-item">
                        <span class="b-goods-f__list-info">Manual</span>
                      </li>
                      <li class="b-goods-f__list-item">
                        <span class="b-goods-f__list-info">Petrol</span>
                      </li>
                      <li class="b-goods-f__list-item">
                        <span class="b-goods-f__list-info">160 hp</span>
                      </li>
                    </ul>
                  </div>
                  <div class="b-goods-f__sidebar">
                    <span class="b-goods-f__price-group">
                      <span class="b-goods-f__price">
                        <span class="b-goods-f__price-numb">$35,700</span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              {/*end .b-goods*/}
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
