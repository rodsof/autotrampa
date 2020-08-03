import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class Contact extends Component {
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
      <main class="l-main-content">
        <div class="container">
          <div class="section-area">
            <div class="row">
              <div class="col-md-6 col-lg-3">
                <div class="b-contacts">
                  <i class="ic icon-direction"></i>
                  <div class="b-contacts__title">Head Office</div>
                  <div class="b-contacts__info">
                    68 Landsriver St, Welson
                    <br />
                    California 22066
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-3">
                <div class="b-contacts">
                  <i class="ic icon-call-end bg-primary"></i>
                  <div class="b-contacts__title">Phone</div>
                  <div class="b-contacts__info">
                    +303 123 456 7890
                    <br />
                    Sales Dept. 0800 123 4567
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-3">
                <div class="b-contacts">
                  <i class="ic icon-envelope"></i>
                  <div class="b-contacts__title">Email</div>
                  <div class="b-contacts__info">
                    info [at] domain.com
                    <br />
                    support [at] domain.com bla bla bla
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-3">
                <div class="b-contacts">
                  <i class="ic icon-flag bg-primary"></i>
                  <div class="b-contacts__title">Showroom</div>
                  <div class="b-contacts__info">
                    FairView Ave, El Monte
                    <br />
                    California 91732
                  </div>
                </div>
              </div>
            </div>
            {/**<!-- end .b-contact--> */}
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="map" id="map"></div>
            </div>
            <div class="col-md-6">
              <section class="section-form-contacts">
                <h2 class="ui-title-inner">
                  Send a<span class="text-primary"> Message</span>
                </h2>
                <p>
                  Nulla pariatur excepteur sint occaecat cupidatat no proident
                  culpa qui officia des mollit anim id est lab orum ut
                  perspiciatis unde omnis iste natuser sit volupta tem
                  accusantium sed ipsum laudantium.
                </p>
                <div id="success"></div>
                <form
                  class="b-form-contacts ui-form"
                  id="contactForm"
                  action="#"
                  method="post"
                >
                  <div class="form-group">
                    <input
                      class="form-control"
                      id="user-name"
                      type="text"
                      name="user-name"
                      placeholder="Your Name"
                      required="required"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      class="form-control"
                      id="user-email"
                      type="email"
                      name="user-email"
                      placeholder="email"
                    />
                  </div>
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      id="user-message"
                      rows="5"
                      placeholder="Message"
                      required="required"
                    ></textarea>
                  </div>
                  <button class="btn btn-primary">Send Message</button>
                </form>
              </section>
              {/**<!-- end .b-form-contact--> */}
            </div>
          </div>
        </div>
      </main>
    );
  }
}
