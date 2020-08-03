import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class IndexVips extends Component {
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
      <div class="section-goods-vip">
        <a class="b-goods-vip b-goods-vip_1" href="#">
          <div class="b-goods-vip__main">
            <span class="b-goods-vip__label b-goods-vip__label-1 bg-primary">
              NEW
            </span>
            <div class="b-goods-vip__title">AUDI Q2L (2019)</div>
            <div class="b-goods-vip__subtitle">
              LUXURTY APART -<span class="b-goods-vip__price"> $499/M</span>
            </div>
            <ul class="b-goods-vip__list list-unstyled">
              <li class="b-goods-vip__list-item">2019</li>
              <li class="b-goods-vip__list-item">Manual</li>
              <li class="b-goods-vip__list-item">Petrol</li>
              <li class="b-goods-vip__list-item">661 hp</li>
            </ul>
          </div>
        </a>
        <a class="b-goods-vip b-goods-vip_2" href="#">
          <div class="b-goods-vip__main">
            <span class="b-goods-vip__label b-goods-vip__label-2 bg-primary">
              As Low As<strong class="b-goods-vip__label_b">1.5% APR</strong>
            </span>
            <div class="b-goods-vip__subtitle">Off-Road King</div>
            <div class="b-goods-vip__title">JAGUAR I PACE</div>
            <div class="b-goods-vip__slogan">Limited Time Offer</div>
          </div>
        </a>
        <a class="b-goods-vip b-goods-vip_3" href="#">
          <div class="b-goods-vip__main">
            <div class="b-goods-vip__subtitle">2019 Models</div>
            <div class="b-goods-vip__title">
              All Brands Cars
              <span class="b-goods-vip__label b-goods-vip__label-3 bg-primary">
                MORE POWER
              </span>
            </div>
            <div class="b-goods-vip__slogan">PREMIUM LUXURY</div>
          </div>
        </a>
      </div>
    );
  }
}
