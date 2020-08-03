import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
import axios from "axios";
import { Redirect } from "react-router-dom";
import loadScript from "../scripts.js";

export default class NewsMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
      fullName: "",
      redirect: null,
    };
  }

  componentDidMount() {
    /* const links = [
      "./assets/libs/bootstrap-select.min.js",
      "./assets/plugins/magnific-popup/jquery.magnific-popup.min.js",
      "./assets/plugins/headers/slidebar.js",
      "./assets/plugins/headers/header.js",
      "./assets/plugins/jqBootstrapValidation.js",
      "./assets/plugins/contact_me.js",
      "./assets/plugins/flowplayer/flowplayer.min.js",
      "./assets/plugins/isotope/isotope.pkgd.min.js",
      "./assets/plugins/isotope/imagesLoaded.js",
      "./assets/plugins/rendro-easy-pie-chart/jquery.easypiechart.min.js",
      "./assets/plugins/rendro-easy-pie-chart/jquery.waypoints.min.js",
      "./assets/plugins/scrollreveal/scrollreveal.min.js",
      "./assets/plugins/ofi.min.js",
      "./assets/plugins/slider-pro/jquery.sliderPro.min.js",
      "./assets/plugins/slick/slick.js",
      "./assets/js/custom.js",
      ,
    ];
    for (var i = 0; i < 15; i++) {
      loadScript(links[i]).then((script) => {
        // Grab the script object in case it is ever needed.
        this.mapScript = script;
        this.setState({ apiLoaded: true });
      });
    }*/
  }

  render() {
    return (
      <div className="l-main-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <main className="b-post-group">
                <section className="b-post b-post-full clearfix">
                  <div className="entry-media">
                    <a
                      className="js-zoom-images"
                      href="assets/media/content/b-posts/830x400/1.jpg"
                    >
                      <img
                        className="img-fluid"
                        src="assets/media/content/b-posts/830x400/1.jpg"
                        alt="Foto"
                      />
                    </a>
                  </div>
                  <div className="entry-main">
                    <div className="entry-meta">
                      <div className="entry-date bg-primary">
                        <span className="entry-date__number">25</span>
                        <span className="entry-date__month">dec</span>
                      </div>
                      <span className="entry-meta__item">
                        <a className="entry-meta__link" href="blog-main.html">
                          <i className="ic icon-user"></i>by Admin
                        </a>
                      </span>
                      <span className="entry-meta__item">
                        <a className="entry-meta__link" href="blog-main.html">
                          <i className="ic icon-speech"></i>53
                        </a>
                      </span>
                      <span className="entry-meta__item">
                        <a className="entry-meta__link" href="blog-main.html">
                          <i className="ic icon-action-redo"></i>Share
                        </a>
                      </span>
                    </div>
                    <div className="entry-header">
                      <h1 className="entry-title">
                        Top 10 Most Fuel-Efficient Cars On The Road
                      </h1>
                    </div>
                    <div className="entry-content">
                      <p>
                        Magna aliqua enim aduas veniam quis nostrud exercitation
                        ullam laboris aliquip. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip duis aute irure dolor in reprehenderit.
                      </p>
                    </div>
                    <div className="entry-footer">
                      <a className="entry-link btn-link" href="#">
                        READ article
                      </a>
                    </div>
                  </div>
                </section>
                {/*<!-- <!-- end .post-->-->*/}
                <section className="b-post b-post-full clearfix">
                  <div className="entry-media">
                    <div className="b-video-2 player fixed-controls play-button">
                      <video poster="assets/media/content/b-posts/830x400/2.jpg">
                        <source
                          src="assets/media/content/video/1.mp4"
                          type="video/mp4"
                        />
                      </video>
                      <i className="ic-play icon-control-play"></i>
                    </div>
                  </div>
                  <div className="entry-main">
                    <div className="entry-meta">
                      <div className="entry-date bg-primary">
                        <span className="entry-date__number">25</span>
                        <span className="entry-date__month">dec</span>
                      </div>
                      <span className="entry-meta__item">
                        <a className="entry-meta__link" href="blog-main.html">
                          <i className="ic icon-user"></i>by Admin
                        </a>
                      </span>
                      <span className="entry-meta__item">
                        <a className="entry-meta__link" href="blog-main.html">
                          <i className="ic icon-speech"></i>53
                        </a>
                      </span>
                      <span className="entry-meta__item">
                        <a className="entry-meta__link" href="blog-main.html">
                          <i className="ic icon-action-redo"></i>Share
                        </a>
                      </span>
                    </div>
                    <div className="entry-header">
                      <h1 className="entry-title">
                        How To Increase Auto Sales: A Dealer’s Guide
                      </h1>
                    </div>
                    <div className="entry-content">
                      <p>
                        Magna aliqua enim aduas veniam quis nostrud exercitation
                        ullam laboris aliquip. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip duis aute irure dolor in reprehenderit.
                      </p>
                    </div>
                    <div className="entry-footer">
                      <a className="entry-link btn-link" href="#">
                        READ article
                      </a>
                    </div>
                  </div>
                </section>
                {/*<!-- <!-- end .post-->-->*/}
                <section className="b-post b-post-full clearfix">
                  <div className="entry-media">
                    <div className="entry-carousel js-slider" data-slick="{}">
                      <img
                        className="img-fluid"
                        src="assets/media/content/b-posts/830x400/3.jpg"
                        alt="Foto"
                      />
                      <img
                        className="img-fluid"
                        src="assets/media/content/b-posts/830x400/1.jpg"
                        alt="Foto"
                      />
                      <img
                        className="img-fluid"
                        src="assets/media/content/b-posts/830x400/2.jpg"
                        alt="Foto"
                      />
                    </div>
                  </div>
                  <div className="entry-main">
                    <div className="entry-meta">
                      <div className="entry-date bg-primary">
                        <span className="entry-date__number">25</span>
                        <span className="entry-date__month">dec</span>
                      </div>
                      <span className="entry-meta__item">
                        <a className="entry-meta__link" href="blog-main.html">
                          <i className="ic icon-user"></i>by Admin
                        </a>
                      </span>
                      <span className="entry-meta__item">
                        <a className="entry-meta__link" href="blog-main.html">
                          <i className="ic icon-speech"></i>53
                        </a>
                      </span>
                      <span className="entry-meta__item">
                        <a className="entry-meta__link" href="blog-main.html">
                          <i className="ic icon-action-redo"></i>Share
                        </a>
                      </span>
                    </div>
                    <div className="entry-header">
                      <h1 className="entry-title">
                        We Sell Licensed Cars With All Safety Checks
                      </h1>
                    </div>
                    <div className="entry-content">
                      <p>
                        Magna aliqua enim aduas veniam quis nostrud exercitation
                        ullam laboris aliquip. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip duis aute irure dolor in reprehenderit.
                      </p>
                    </div>
                    <div className="entry-footer">
                      <a className="entry-link btn-link" href="#">
                        READ article
                      </a>
                    </div>
                  </div>
                </section>
                {/*<!-- <!-- end .post-->-->*/}
                <section className="b-post b-post-full clearfix">
                  <div className="entry-media">
                    <img
                      className="img-fluid"
                      src="assets/media/content/b-posts/830x400/4.jpg"
                      alt="Foto"
                    />
                    <div className="entry-media__inner">
                      <a className="entry-media__link" href="#">
                        <i className="ic icon-link"></i>
                        <span className="entry-media__info">
                          www.themeforest.net
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="entry-main">
                    <div className="entry-meta">
                      <div className="entry-date bg-primary">
                        <span className="entry-date__number">25</span>
                        <span className="entry-date__month">dec</span>
                      </div>
                      <span className="entry-meta__item">
                        <a className="entry-meta__link" href="blog-main.html">
                          <i className="ic icon-user"></i>by Admin
                        </a>
                      </span>
                      <span className="entry-meta__item">
                        <a className="entry-meta__link" href="blog-main.html">
                          <i className="ic icon-speech"></i>53
                        </a>
                      </span>
                      <span className="entry-meta__item">
                        <a className="entry-meta__link" href="blog-main.html">
                          <i className="ic icon-action-redo"></i>Share
                        </a>
                      </span>
                    </div>
                    <div className="entry-header">
                      <h1 className="entry-title">
                        Elit Sed Tempor Incididunt Labore Ipsum
                      </h1>
                    </div>
                    <div className="entry-content">
                      <p>
                        Magna aliqua enim aduas veniam quis nostrud exercitation
                        ullam laboris aliquip. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip duis aute irure dolor in reprehenderit.
                      </p>
                    </div>
                    <div className="entry-footer">
                      <a className="entry-link btn-link" href="#">
                        READ article
                      </a>
                    </div>
                  </div>
                </section>
                {/*<!-- <!-- end .post-->-->*/}
              </main>
              <nav aria-label="Page navigation">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item active" aria-current="page">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      5
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span
                        className="ic fas fa-angle-double-right"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <aside className="l-sidebar l-sidebar_last">
                <div className="widget widget-search section-sidebar bg-light">
                  <div className="widget-title bg-dark">search</div>
                  <div className="widget-inner">
                    <form className="form-sidebar" id="search-global-form">
                      <input
                        className="form-sidebar__input form-control"
                        type="search"
                        placeholder="keyword"
                      />
                      <button className="form-sidebar__btn">
                        <i className="ic icon-magnifier"></i>
                      </button>
                    </form>
                  </div>
                </div>
                {/*<!-- <!-- end .widget-->-->*/}
                <section className="widget section-sidebar bg-light">
                  <h3 className="widget-title bg-dark">categories</h3>
                  <div className="widget-content">
                    <div className="widget-inner">
                      <ul className="widget-list list list-mark-4">
                        <li className="widget-list__item">
                          <a
                            className="widget-list__link"
                            href="blog-post.html"
                          >
                            BMW
                          </a>
                        </li>
                        <li className="widget-list__item">
                          <a
                            className="widget-list__link"
                            href="blog-post.html"
                          >
                            Aston Martin
                          </a>
                        </li>
                        <li className="widget-list__item">
                          <a
                            className="widget-list__link"
                            href="blog-post.html"
                          >
                            New Car Models
                          </a>
                        </li>
                        <li className="widget-list__item">
                          <a
                            className="widget-list__link"
                            href="blog-post.html"
                          >
                            Buy Used Cars
                          </a>
                        </li>
                        <li className="widget-list__item">
                          <a
                            className="widget-list__link"
                            href="blog-post.html"
                          >
                            Photo Gallery
                          </a>
                        </li>
                        <li className="widget-list__item">
                          <a
                            className="widget-list__link"
                            href="blog-post.html"
                          >
                            Mercedes
                          </a>
                        </li>
                        <li className="widget-list__item">
                          <a
                            className="widget-list__link"
                            href="blog-post.html"
                          >
                            Economical cars
                          </a>
                        </li>
                        <li className="widget-list__item">
                          <a
                            className="widget-list__link"
                            href="blog-post.html"
                          >
                            Auto Financing
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
                {/*<!-- <!-- end .widget-->-->*/}
                <section className="widget section-sidebar bg-light">
                  <h3 className="widget-title bg-dark">recent posts</h3>
                  <div className="widget-content">
                    <div className="widget-inner">
                      <section className="post-widget clearfix">
                        <div className="post-widget__media">
                          <a href="blog-post.html">
                            <img
                              className="img-fluid"
                              src="assets/media/content/b-posts/80x80/1.jpg"
                              alt="foto"
                            />
                          </a>
                        </div>
                        <div className="post-widget__inner">
                          <h2 className="post-widget__title">
                            <a href="blog-post.html">Telsa Model RX3 Specs</a>
                          </h2>
                          <div className="post-widget__date">
                            <time datetime="2019-10-27 15:20">
                              Dec 15, 2018
                            </time>
                          </div>
                        </div>
                        {/*<!-- <!-- end .widget-post->-->*/}
                      </section>
                      <section className="post-widget clearfix">
                        <div className="post-widget__media">
                          <a href="blog-post.html">
                            <img
                              className="img-fluid"
                              src="assets/media/content/b-posts/80x80/2.jpg"
                              alt="foto"
                            />
                          </a>
                        </div>
                        <div className="post-widget__inner">
                          <h2 className="post-widget__title">
                            <a href="blog-post.html">
                              Renault Sport Vision Debut’.{" "}
                            </a>
                          </h2>
                          <div className="post-widget__date">
                            <time datetime="2019-10-27 15:20">
                              Jan 20, 2019
                            </time>
                          </div>
                        </div>
                        {/*<!-- <!-- end .widget-post->-->*/}
                      </section>
                      <section className="post-widget clearfix">
                        <div className="post-widget__media">
                          <a href="blog-post.html">
                            <img
                              className="img-fluid"
                              src="assets/media/content/b-posts/80x80/3.jpg"
                              alt="foto"
                            />
                          </a>
                        </div>
                        <div className="post-widget__inner">
                          <h2 className="post-widget__title">
                            <a href="blog-post.html">
                              Jaguar Offer Eco-Petrol Technology
                            </a>
                          </h2>
                          <div className="post-widget__date">
                            <time datetime="2019-10-27 15:20">
                              Feb 30, 2019
                            </time>
                          </div>
                        </div>
                        {/*<!-- <!-- end .widget-post->-->*/}
                      </section>
                      <section className="post-widget clearfix">
                        <div className="post-widget__media">
                          <a href="blog-post.html">
                            <img
                              className="img-fluid"
                              src="assets/media/content/b-posts/80x80/4.jpg"
                              alt="foto"
                            />
                          </a>
                        </div>
                        <div className="post-widget__inner">
                          <h2 className="post-widget__title">
                            <a href="blog-post.html">Lexus: King Of the Road</a>
                          </h2>
                          <div className="post-widget__date">
                            <time datetime="2019-10-27 15:20">Mar 5, 2019</time>
                          </div>
                        </div>
                        {/*<!-- <!-- end .widget-post->-->*/}
                      </section>
                    </div>
                  </div>
                </section>
                {/*<!-- <!-- end .widget-->-->*/}
                <section className="widget b-brands section-sidebar">
                  <h3 className="widget-title bg-dark">Popular brands</h3>
                  <div className="widget-content">
                    <div className="b-brands__main d-flex flex-wrap">
                      <a className="b-brands__item" href="home.html">
                        <img
                          className="b-brands__img img-fluid"
                          src="assets/media/content/b-brands/1.png"
                          alt="foto"
                        />
                      </a>
                      <a className="b-brands__item" href="home.html">
                        <img
                          className="b-brands__img img-fluid"
                          src="assets/media/content/b-brands/2.png"
                          alt="foto"
                        />
                      </a>
                      <a className="b-brands__item" href="home.html">
                        <img
                          className="b-brands__img img-fluid"
                          src="assets/media/content/b-brands/3.png"
                          alt="foto"
                        />
                      </a>
                      <a className="b-brands__item" href="home.html">
                        <img
                          className="b-brands__img img-fluid"
                          src="assets/media/content/b-brands/4.png"
                          alt="foto"
                        />
                      </a>
                      <a className="b-brands__item" href="home.html">
                        <img
                          className="b-brands__img img-fluid"
                          src="assets/media/content/b-brands/5.png"
                          alt="foto"
                        />
                      </a>
                      <a className="b-brands__item" href="home.html">
                        <img
                          className="b-brands__img img-fluid"
                          src="assets/media/content/b-brands/6.png"
                          alt="foto"
                        />
                      </a>
                    </div>
                  </div>
                </section>
                {/*<!-- end .b-brands-->*/}
                <section className="widget section-sidebar bg-light">
                  <h3 className="widget-title bg-dark">tags cloud</h3>
                  <div className="widget-content">
                    <div className="widget-inner">
                      <ul className="list-tags list-unstyled">
                        <li className="list-tags__item">
                          <a className="list-tags__link" href="blog-post.html">
                            Car Dealer
                          </a>
                        </li>
                        <li className="list-tags__item">
                          <a className="list-tags__link" href="blog-post.html">
                            Ferrari
                          </a>
                        </li>
                        <li className="list-tags__item">
                          <a className="list-tags__link" href="blog-post.html">
                            Sell Car
                          </a>
                        </li>
                        <li className="list-tags__item">
                          <a className="list-tags__link" href="blog-post.html">
                            Latest Cars
                          </a>
                        </li>
                        <li className="list-tags__item">
                          <a className="list-tags__link" href="blog-post.html">
                            SUV’s
                          </a>
                        </li>
                        <li className="list-tags__item">
                          <a className="list-tags__link" href="blog-post.html">
                            Automobile
                          </a>
                        </li>
                        <li className="list-tags__item">
                          <a className="list-tags__link" href="blog-post.html">
                            Latest Vehicles
                          </a>
                        </li>
                        <li className="list-tags__item">
                          <a className="list-tags__link" href="blog-post.html">
                            Truck
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
                {/*<!-- end .widget-->*/}
              </aside>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
