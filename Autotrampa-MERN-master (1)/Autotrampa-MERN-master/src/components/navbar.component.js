import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../media/general/autologo.png";
import Cookie from "js-cookie";
import axios from "axios";
import { Redirect } from "react-router-dom";
import loadScript from "../scripts.js";

export default class Navigation extends Component {
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
      <header className="header">
        <div className="container"></div>

        <div className="header-main">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-2 col-auto" id="mobileCustom">
                <Link
                  className="navbar-brand scroll"
                  id="logoCorrection"
                  href="home.html"
                >
                  <img
                    className="normal-logo logoImg"
                    src="assets/media/general/autologo.png"
                    alt="logo"
                  />
                </Link>
                {/*<!-- Mobile Trigger Start-->*/}
                <button
                  className="menu-mobile-button js-toggle-mobile-slidebar toggle-menu-button d-lg-none"
                  id="burger"
                >
                  <i className="toggle-menu-button-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </i>
                </button>
                {/*<!-- Mobile Trigger Start-->*/}
              </div>
              <div className="col-lg d-none d-lg-block">
                <nav
                  className="navbar navbar-expand-md justify-content-end"
                  id="nav"
                >
                  <ul className="yamm main-menu navbar-nav">
                    <li className="nav-item active">
                      <Link className="nav-link" to="/">
                        Početna<span className="sr-only">(current)</span>
                      </Link>
                    </li>

                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        id="navbarDropdown1"
                        to="#"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Kupi
                      </Link>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown1"
                      >
                        <Link className="dropdown-item" to="/carList">
                          Auta
                        </Link>
                      </div>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/news" role="button">
                        Novosti
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">
                        O nama
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">
                        Kontakt
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
