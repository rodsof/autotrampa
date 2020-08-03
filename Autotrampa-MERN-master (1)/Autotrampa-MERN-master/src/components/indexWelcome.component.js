import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class indexWelcome extends Component {
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
      <section class="b-welcome section-default">
        <div class="container">
          <div class="row">
            <div class="col-xl-6">
              <div class="ui-title-slogan">
                Helps you to find your next car easily
              </div>
              <h2 class="ui-title">
                Welcome to<span class="text-primary"> Autotrampa</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                eiusmod tempor incididu et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ull laboris aliquip ex ea
                commodo consequat. Duis aute irure dolorin reprehenderits
                volupta velit dolore fugiat nulla pariatur excepteur sint
                occaecat cupidatat.
              </p>
              <p>
                Non proident sunt ind culpa qudesa officia deserunt mollit anim
                est laborum. Sed per unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium tom eaque ipsa quae ab illo
                inventore veritatis architecto.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-7">
              <ul class="b-welcome-list list-unstyled d-sm-flex justify-content-around">
                <li class="b-welcome-list__item flex-fill">
                  <i class="ic flaticon-car"></i>We Offers Lower <br />
                  Cars Prices
                </li>
                <li class="b-welcome-list__item flex-fill">
                  <i class="ic flaticon-gearbox"></i>Largest cars <br />
                  Dealership
                </li>
                <li class="b-welcome-list__item flex-fill">
                  <i class="ic flaticon-wrench"></i>Multipoint Safety <br />
                  Checks offers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
