import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="main-nav clearfix">
      <div className="container">
        <div className="row justify-content-center">
          <nav className="navbar navbar-expand-lg col-lg-8">
            <div className="site-nav-inner float-left">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="true"
                aria-label="Toggle navigation"
              >
                <span className="fa fa-bars"></span>
              </button>

              <div
                id="navbarSupportedContent"
                className="collapse navbar-collapse navbar-responsive-collapse"
              >
                <ul className="nav navbar-nav">
                  <li className="nav-item dropdown active">
                    <Link to="/">HOME</Link>
                  </li>
                  <li>
                    <Link to="/sobre">SOBRE</Link>
                  </li>
                  <li>
                    <Link to="/dicas">DICAS</Link>
                  </li>
                  <li>
                    <Link to="/saibacomo">SAIBA COMO</Link>
                  </li>
                  <li>
                    <Link to="/plus.linuxfossangola">FÓRUM</Link>
                  </li>
                  <li>
                    <Link to="/doar">DOAR</Link>
                  </li>
                  <li>
                    <Link to="/contactos">CONTACTOS</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
