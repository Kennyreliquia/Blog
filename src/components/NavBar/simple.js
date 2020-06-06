import React from "react";
import Header from "./header";

import Menu from "../../components/NavBar/menu";

import Logo from "../../assets/images/logos/logo.png";

export default function Nav() {
  return (
    <div>
      <Header />
      <header id="header" className="header">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-4 text-center text-md-left">
              <ul className="ts-social header-top-social">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-youtube-play"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-rss"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <div className="logo">
                <a>
                  <img src={Logo} alt="logo" />
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="header-search">
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control input-search"
                      placeholder="Pesquisar"
                    />
                    <button type="submit" className="search-btn">
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Menu />
    </div>
  );
}
