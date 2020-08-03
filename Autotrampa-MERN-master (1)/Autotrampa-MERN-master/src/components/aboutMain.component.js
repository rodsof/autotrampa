import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class AboutMain extends Component {
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
      <section class="section-about section-default">
        <div class="container">
          <div class="row">
            <div class="col-xl-6">
              <div class="ui-title-slogan">
                Helps you to find your next car easily
              </div>
              <h2 class="ui-title">
                <span class="text-primary">Revus</span> Values & Features
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                eiusmod tempor incid et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation laboris aliquip ex ea commodo
                consequat duis aute irure dolorin reprehenderits volupta dolore
                fugiat nulla pariatur excepteur.
              </p>
              <ul class="list list-mark-3">
                <li>We offers lowest auto prices & stress free financing</li>
                <li>
                  Trusted by millions of people officially dent sunt ind culpa
                </li>
                <li>
                  Mollit anim est laborum sed per unde omnis sed ipsum natus
                </li>
                <li>Error sit voluptatem accusantium doloremque laudantium</li>
                <li>
                  Offers auto maintaining services for all customers for
                  lifetime
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
