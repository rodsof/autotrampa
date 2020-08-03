import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../media/general/autologo.png";
import Cookie from "js-cookie";
import axios from "axios";
import { Redirect } from "react-router-dom";
import loadScript from "../scripts.js";

export default class MobileNavigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
      fullName: "",
      redirect: null,
    };
  }

  componentDidMount() {
    /*const links = [
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
      <div data-off-canvas="mobile-slidebar left overlay">
        <a className="navbar-brand scroll" href="home.html">
          <img className="scroll-logo logoImg" src={Logo} alt="logo" />
        </a>

        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="home.html">
              Pocetna<span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link">Kupi</Link>
            <ul>
              <li>
                <Link className="dropdown-item" to="inventory-list.html">
                  Auta
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="about.html">
              Novosti
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              O nama
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="contacts.html">
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
