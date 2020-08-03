import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class IndexNews extends Component {
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
      <section class="section-news section-default">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="text-center">
                <div class="ui-title-slogan">Helps you to find perfect car</div>
                <h2 class="ui-title">
                  News &<span class="text-primary"> Articles</span>
                </h2>
              </div>
            </div>
          </div>
          <div class="b-post-group-2">
            <div class="row">
              <div class="col-md-4">
                <section class="b-post b-post-1 clearfix">
                  <div class="entry-media">
                    <a href="#">
                      <img
                        class="img-fluid"
                        src="assets/media/content/b-posts/360x280/1.jpg"
                        alt="Foto"
                      />
                    </a>
                  </div>
                  <div class="entry-main">
                    <div class="entry-header">
                      <div class="entry-meta">
                        <span class="entry-meta__item">
                          <a class="entry-meta__link" href="blog-main.html">
                            25 DEC 2018
                          </a>
                        </span>
                        <span class="entry-meta__item">
                          <a class="entry-meta__link" href="blog-main.html">
                            BY ADMIN
                          </a>
                        </span>
                      </div>
                      <h2 class="entry-title">
                        Top 10 most Fuel-Efficient cars on the roads
                      </h2>
                    </div>
                    <div class="entry-content">
                      <p>
                        Edipisicing eiusmod tempor incididunt labore dolore
                        magna aliqa ust enim ad minim veniams quis nostrud
                        citation ullam co laboris nisi ut aliquip.
                      </p>
                    </div>
                    <div class="entry-footer">
                      <a class="entry-link btn-link" href="#">
                        READ article
                      </a>
                      <span class="entry-views">
                        <i class="ic icon-speech"></i> 52
                      </span>
                    </div>
                  </div>
                </section>
                {/*end .post*/}
              </div>
              <div class="col-md-4">
                <section class="b-post b-post-1 clearfix">
                  <div class="entry-media">
                    <a href="#">
                      <img
                        class="img-fluid"
                        src="assets/media/content/b-posts/360x280/2.jpg"
                        alt="Foto"
                      />
                    </a>
                  </div>
                  <div class="entry-main">
                    <div class="entry-header">
                      <div class="entry-meta">
                        <span class="entry-meta__item">
                          <a class="entry-meta__link" href="blog-main.html">
                            25 DEC 2018
                          </a>
                        </span>
                        <span class="entry-meta__item">
                          <a class="entry-meta__link" href="blog-main.html">
                            BY ADMIN
                          </a>
                        </span>
                      </div>
                      <h2 class="entry-title">
                        How to increase Auto Sales: A Dealers’ Guide
                      </h2>
                    </div>
                    <div class="entry-content">
                      <p>
                        Edipisicing eiusmod tempor incididunt labore dolore
                        magna aliqa ust enim ad minim veniams quis nostrud
                        citation ullam co laboris nisi ut aliquip.
                      </p>
                    </div>
                    <div class="entry-footer">
                      <a class="entry-link btn-link" href="#">
                        READ article
                      </a>
                      <span class="entry-views">
                        <i class="ic icon-speech"></i> 52
                      </span>
                    </div>
                  </div>
                </section>
                {/*end .post*/}
              </div>
              <div class="col-md-4">
                <section class="b-post b-post-1 clearfix">
                  <div class="entry-media">
                    <a href="#">
                      <img
                        class="img-fluid"
                        src="assets/media/content/b-posts/360x280/3.jpg"
                        alt="Foto"
                      />
                    </a>
                  </div>
                  <div class="entry-main">
                    <div class="entry-header">
                      <div class="entry-meta">
                        <span class="entry-meta__item">
                          <a class="entry-meta__link" href="blog-main.html">
                            25 DEC 2018
                          </a>
                        </span>
                        <span class="entry-meta__item">
                          <a class="entry-meta__link" href="blog-main.html">
                            BY ADMIN
                          </a>
                        </span>
                      </div>
                      <h2 class="entry-title">
                        We have vehicle with safety checks and licensed
                      </h2>
                    </div>
                    <div class="entry-content">
                      <p>
                        Edipisicing eiusmod tempor incididunt labore dolore
                        magna aliqa ust enim ad minim veniams quis nostrud
                        citation ullam co laboris nisi ut aliquip.
                      </p>
                    </div>
                    <div class="entry-footer">
                      <a class="entry-link btn-link" href="#">
                        READ article
                      </a>
                      <span class="entry-views">
                        <i class="ic icon-speech"></i> 52
                      </span>
                    </div>
                  </div>
                </section>
                {/*end .post*/}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
