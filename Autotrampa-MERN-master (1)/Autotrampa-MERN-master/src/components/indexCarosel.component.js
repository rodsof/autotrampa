import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class IndexCarosel extends Component {
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
      <section class="section-carousel">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="ui-title-slogan">
                Helps you to find your next car easily
              </div>
              <h2 class="ui-title">
                Featured<span class="text-primary"> Vehicles</span>
              </h2>
            </div>
          </div>
        </div>
        <div class="section-carousel__inner bg-dark">
          <div
            class="js-slider"
            data-slick='{"slidesToShow": 5,  "slidesToScroll": 5, "infinite": true, "responsive": [{"breakpoint": 1800, "settings": {"slidesToShow": 4, "slidesToScroll": 4}}, {"breakpoint": 1400, "settings": {"slidesToShow": 3, "slidesToScroll": 1}}, {"breakpoint": 1040, "settings": {"slidesToShow": 2, "slidesToScroll": 1}}, {"breakpoint": 767, "settings": {"slidesToShow": 1, "slidesToScroll": 1}}]}'
          >
            <div class="b-goods-f b-goods-f_mod-a">
              <div class="b-goods-f__media">
                <a href="#">
                  <img
                    class="b-goods-f__img img-scale"
                    src="assets/media/content/b-goods/375x300/1.jpg"
                    alt="foto"
                  />
                </a>
              </div>
              <div class="b-goods-f__main">
                <div class="b-goods-f__descrip">
                  <div class="b-goods-f__title">
                    <span>Audi Q2 L35 Quattro</span>
                  </div>
                  <div class="b-goods-f__info">
                    Magna aliqua enim aduas veniam quis nostrud exercitation
                    ullam laboris aliquip.
                  </div>
                  <ul class="b-goods-f__list list-unstyled">
                    <li class="b-goods-f__list-item">
                      <i class="ic flaticon-speedometer"></i> 35,000km
                    </li>
                    <li class="b-goods-f__list-item">
                      <i class="ic flaticon-car-1"></i>Model: 2017
                    </li>
                    <li class="b-goods-f__list-item">
                      <i class="ic flaticon-gearshift"></i> Auto - Petrol
                    </li>
                  </ul>
                </div>
                <div class="b-goods-f__sidebar">
                  <span class="b-goods-f__price-group">
                    <span class="b-goods-f__price bg-primary">
                      <span class="b-goods-f__price-numb">$45,800</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            {/*end .b-goods*/}
            <div class="b-goods-f b-goods-f_mod-a">
              <div class="b-goods-f__media">
                <a href="#">
                  <img
                    class="b-goods-f__img img-scale"
                    src="assets/media/content/b-goods/375x300/2.jpg"
                    alt="foto"
                  />
                </a>
              </div>
              <div class="b-goods-f__main">
                <div class="b-goods-f__descrip">
                  <div class="b-goods-f__title">
                    <span>Ford Mustang SZ3</span>
                  </div>
                  <div class="b-goods-f__info">
                    Magna aliqua enim aduas veniam quis nostrud exercitation
                    ullam laboris aliquip.
                  </div>
                  <ul class="b-goods-f__list list-unstyled">
                    <li class="b-goods-f__list-item">
                      <i class="ic flaticon-speedometer"></i> 35,000km
                    </li>
                    <li class="b-goods-f__list-item">
                      <i class="ic flaticon-car-1"></i>Model: 2017
                    </li>
                    <li class="b-goods-f__list-item">
                      <i class="ic flaticon-gearshift"></i> Auto - Petrol
                    </li>
                  </ul>
                </div>
                <div class="b-goods-f__sidebar">
                  <span class="b-goods-f__price-group">
                    <span class="b-goods-f__price bg-primary">
                      <span class="b-goods-f__price-numb">$30,480</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            {/*end .b-goods*/}
            <div class="b-goods-f b-goods-f_mod-a">
              <div class="b-goods-f__media">
                <a href="#">
                  <img
                    class="b-goods-f__img img-scale"
                    src="assets/media/content/b-goods/375x300/3.jpg"
                    alt="foto"
                  />
                </a>
              </div>
              <div class="b-goods-f__main">
                <div class="b-goods-f__descrip">
                  <div class="b-goods-f__title">
                    <span>Mercedes Benz C Class</span>
                  </div>
                  <div class="b-goods-f__info">
                    Magna aliqua enim aduas veniam quis nostrud exercitation
                    ullam laboris aliquip.
                  </div>
                  <ul class="b-goods-f__list list-unstyled">
                    <li class="b-goods-f__list-item">
                      <i class="ic flaticon-speedometer"></i> 35,000km
                    </li>
                    <li class="b-goods-f__list-item">
                      <i class="ic flaticon-car-1"></i>Model: 2017
                    </li>
                    <li class="b-goods-f__list-item">
                      <i class="ic flaticon-gearshift"></i> Auto - Petrol
                    </li>
                  </ul>
                </div>
                <div class="b-goods-f__sidebar">
                  <span class="b-goods-f__price-group">
                    <span class="b-goods-f__price bg-primary">
                      <span class="b-goods-f__price-numb">$30,480</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            {/*end .b-goods*/}
            <div class="b-goods-f b-goods-f_mod-a">
              <div class="b-goods-f__media">
                <a href="#">
                  <img
                    class="b-goods-f__img img-scale"
                    src="assets/media/content/b-goods/375x300/4.jpg"
                    alt="foto"
                  />
                </a>
              </div>
              <div class="b-goods-f__main">
                <div class="b-goods-f__descrip">
                  <div class="b-goods-f__title">
                    <span>Skoda KodiaQ 2019</span>
                  </div>
                  <div class="b-goods-f__info">
                    Magna aliqua enim aduas veniam quis nostrud exercitation
                    ullam laboris aliquip.
                  </div>
                  <ul class="b-goods-f__list list-unstyled">
                    <li class="b-goods-f__list-item">
                      <i class="ic flaticon-speedometer"></i> 35,000km
                    </li>
                    <li class="b-goods-f__list-item">
                      <i class="ic flaticon-car-1"></i>Model: 2017
                    </li>
                    <li class="b-goods-f__list-item">
                      <i class="ic flaticon-gearshift"></i> Auto - Petrol
                    </li>
                  </ul>
                </div>
                <div class="b-goods-f__sidebar">
                  <span class="b-goods-f__price-group">
                    <span class="b-goods-f__price bg-primary">
                      <span class="b-goods-f__price-numb">$30,480</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            {/*end .b-goods*/}
            <div class="b-goods-f b-goods-f_mod-a">
              <div class="b-goods-f__media">
                <a href="#">
                  <img
                    class="b-goods-f__img img-scale"
                    src="assets/media/content/b-goods/375x300/1.jpg"
                    alt="foto"
                  />
                </a>
              </div>
              <div class="b-goods-f__main">
                <div class="b-goods-f__descrip">
                  <div class="b-goods-f__title">
                    <span>Audi Q2 L35 Quattro</span>
                  </div>
                  <div class="b-goods-f__info">
                    Magna aliqua enim aduas veniam quis nostrud exercitation
                    ullam laboris aliquip.
                  </div>
                  <ul class="b-goods-f__list list-unstyled">
                    <li class="b-goods-f__list-item">
                      <i class="ic flaticon-speedometer"></i> 35,000km
                    </li>
                    <li class="b-goods-f__list-item">
                      <i class="ic flaticon-car-1"></i>Model: 2017
                    </li>
                    <li class="b-goods-f__list-item">
                      <i class="ic flaticon-gearshift"></i> Auto - Petrol
                    </li>
                  </ul>
                </div>
                <div class="b-goods-f__sidebar">
                  <span class="b-goods-f__price-group">
                    <span class="b-goods-f__price bg-primary">
                      <span class="b-goods-f__price-numb">$45,800</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            {/*end .b-goods*/}
            <div class="b-goods-f b-goods-f_mod-a">
              <div class="b-goods-f__media">
                <a href="#">
                  <img
                    class="b-goods-f__img img-scale"
                    src="assets/media/content/b-goods/375x300/2.jpg"
                    alt="foto"
                  />
                </a>
              </div>
              <div class="b-goods-f__main">
                <div class="b-goods-f__descrip">
                  <div class="b-goods-f__title">
                    <span>Ford Mustang SZ3</span>
                  </div>
                  <div class="b-goods-f__info">
                    Magna aliqua enim aduas veniam quis nostrud exercitation
                    ullam laboris aliquip.
                  </div>
                  <ul class="b-goods-f__list list-unstyled">
                    <li class="b-goods-f__list-item">
                      <i class="ic flaticon-speedometer"></i> 35,000km
                    </li>
                    <li class="b-goods-f__list-item">
                      <i class="ic flaticon-car-1"></i>Model: 2017
                    </li>
                    <li class="b-goods-f__list-item">
                      <i class="ic flaticon-gearshift"></i> Auto - Petrol
                    </li>
                  </ul>
                </div>
                <div class="b-goods-f__sidebar">
                  <span class="b-goods-f__price-group">
                    <span class="b-goods-f__price bg-primary">
                      <span class="b-goods-f__price-numb">$30,480</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            {/*end .b-goods*/}
            <div class="b-goods-f b-goods-f_mod-a">
              <div class="b-goods-f__media">
                <a href="#">
                  <img
                    class="b-goods-f__img img-scale"
                    src="assets/media/content/b-goods/375x300/3.jpg"
                    alt="foto"
                  />
                </a>
              </div>
              <div class="b-goods-f__main">
                <div class="b-goods-f__descrip">
                  <div class="b-goods-f__title">
                    <span>Mercedes Benz C Class</span>
                  </div>
                  <div class="b-goods-f__info">
                    Magna aliqua enim aduas veniam quis nostrud exercitation
                    ullam laboris aliquip.
                  </div>
                  <ul class="b-goods-f__list list-unstyled">
                    <li class="b-goods-f__list-item">
                      <i class="ic flaticon-speedometer"></i> 35,000km
                    </li>
                    <li class="b-goods-f__list-item">
                      <i class="ic flaticon-car-1"></i>Model: 2017
                    </li>
                    <li class="b-goods-f__list-item">
                      <i class="ic flaticon-gearshift"></i> Auto - Petrol
                    </li>
                  </ul>
                </div>
                <div class="b-goods-f__sidebar">
                  <span class="b-goods-f__price-group">
                    <span class="b-goods-f__price bg-primary">
                      <span class="b-goods-f__price-numb">$30,480</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            {/*end .b-goods*/}
            <div class="b-goods-f b-goods-f_mod-a">
              <div class="b-goods-f__media">
                <a href="#">
                  <img
                    class="b-goods-f__img img-scale"
                    src="assets/media/content/b-goods/375x300/4.jpg"
                    alt="foto"
                  />
                </a>
              </div>
              <div class="b-goods-f__main">
                <div class="b-goods-f__descrip">
                  <div class="b-goods-f__title">
                    <span>Skoda KodiaQ 2019</span>
                  </div>
                  <div class="b-goods-f__info">
                    Magna aliqua enim aduas veniam quis nostrud exercitation
                    ullam laboris aliquip.
                  </div>
                  <ul class="b-goods-f__list list-unstyled">
                    <li class="b-goods-f__list-item">
                      <i class="ic flaticon-speedometer"></i> 35,000km
                    </li>
                    <li class="b-goods-f__list-item">
                      <i class="ic flaticon-car-1"></i>Model: 2017
                    </li>
                    <li class="b-goods-f__list-item">
                      <i class="ic flaticon-gearshift"></i> Auto - Petrol
                    </li>
                  </ul>
                </div>
                <div class="b-goods-f__sidebar">
                  <span class="b-goods-f__price-group">
                    <span class="b-goods-f__price bg-primary">
                      <span class="b-goods-f__price-numb">$30,480</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            {/*end .b-goods*/}
          </div>
          <div class="container">
            <div class="row">
              <div class="col-12">
                <a class="section-carousel__btn btn btn-primary" href="#">
                  <i class="ic icon-list"></i> View All Cars Listings
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
