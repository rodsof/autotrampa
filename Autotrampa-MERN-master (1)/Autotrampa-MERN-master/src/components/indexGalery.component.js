import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class IndexGalery extends Component {
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
      <div
        class="b-gallery js-slider"
        data-slick='{"slidesToShow": 8, "arrows": false, "autoplay": true,  "slidesToScroll": 1, "responsive": [{"breakpoint": 1400, "settings": {"slidesToShow": 6, "slidesToScroll": 3}}, {"breakpoint": 768, "settings": {"slidesToShow": 3, "slidesToScroll": 1}}]}'
      >
        <div class="b-gallery__item">
          <img
            class="img-fluid"
            src="assets/media/content/b-gallery/240x200/1.jpg"
            alt="foto"
          />
        </div>
        <div class="b-gallery__item">
          <img
            class="img-fluid"
            src="assets/media/content/b-gallery/240x200/2.jpg"
            alt="foto"
          />
        </div>
        <div class="b-gallery__item">
          <img
            class="img-fluid"
            src="assets/media/content/b-gallery/240x200/3.jpg"
            alt="foto"
          />
        </div>
        <div class="b-gallery__item">
          <img
            class="img-fluid"
            src="assets/media/content/b-gallery/240x200/4.jpg"
            alt="foto"
          />
        </div>
        <div class="b-gallery__item">
          <img
            class="img-fluid"
            src="assets/media/content/b-gallery/240x200/5.jpg"
            alt="foto"
          />
        </div>
        <div class="b-gallery__item">
          <img
            class="img-fluid"
            src="assets/media/content/b-gallery/240x200/6.jpg"
            alt="foto"
          />
        </div>
        <div class="b-gallery__item">
          <img
            class="img-fluid"
            src="assets/media/content/b-gallery/240x200/7.jpg"
            alt="foto"
          />
        </div>
        <div class="b-gallery__item">
          <img
            class="img-fluid"
            src="assets/media/content/b-gallery/240x200/8.jpg"
            alt="foto"
          />
        </div>
        <div class="b-gallery__item">
          <img
            class="img-fluid"
            src="assets/media/content/b-gallery/240x200/1.jpg"
            alt="foto"
          />
        </div>
        <div class="b-gallery__item">
          <img
            class="img-fluid"
            src="assets/media/content/b-gallery/240x200/2.jpg"
            alt="foto"
          />
        </div>
        <div class="b-gallery__item">
          <img
            class="img-fluid"
            src="assets/media/content/b-gallery/240x200/3.jpg"
            alt="foto"
          />
        </div>
        <div class="b-gallery__item">
          <img
            class="img-fluid"
            src="assets/media/content/b-gallery/240x200/4.jpg"
            alt="foto"
          />
        </div>
        <div class="b-gallery__item">
          <img
            class="img-fluid"
            src="assets/media/content/b-gallery/240x200/5.jpg"
            alt="foto"
          />
        </div>
        <div class="b-gallery__item">
          <img
            class="img-fluid"
            src="assets/media/content/b-gallery/240x200/6.jpg"
            alt="foto"
          />
        </div>
        <div class="b-gallery__item">
          <img
            class="img-fluid"
            src="assets/media/content/b-gallery/240x200/7.jpg"
            alt="foto"
          />
        </div>
        <div class="b-gallery__item">
          <img
            class="img-fluid"
            src="assets/media/content/b-gallery/240x200/8.jpg"
            alt="foto"
          />
        </div>
      </div>
    );
  }
}
