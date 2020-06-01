import React from "react";

import Img1 from "../../assets/images/news/tech/image5.png";
import Img2 from "../../assets/images/news/tech/image5.png";
import Baner from "../../assets/images/banner-image/image6.png";

import logo from "../../assets/images/logos/logo-light.png";

export default function Footer() {
  return (
    <div>
      <div className="newsletter-area">
        <div className="container">
          <div className="row ts-gutter-30 justify-content-center align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="footer-loto">
                <a href="#">
                  <img src={logo} />
                </a>
              </div>
            </div>
            {/* col end */}
            <div className="col-lg-5 col-md-6">
              <div className="footer-newsletter">
                <form action="#" method="post">
                  <div className="email-form-group">
                    <i
                      className="news-icon fa fa-paper-plane"
                      aria-hidden="true"
                    />
                    <input
                      type="email"
                      name="EMAIL"
                      className="newsletter-email"
                      placeholder="Seu email"
                      required
                    />
                    <input
                      type="submit"
                      className="newsletter-submit"
                      defaultValue="Subscrever"
                    />
                  </div>
                </form>
              </div>
            </div>
            {/* col end */}
          </div>
          {/* row  end */}
        </div>
        {/* container end */}
      </div>

      <div className="ts-footer">
        <div className="container">
          <div className="row ts-gutter-30 justify-content-lg-between justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="footer-widtet">
                <h3 className="widget-title">
                  <span>Sobre Nós</span>
                </h3>
                <div className="widget-content">
                  <p>
                    Hidden Hills property with mountain and city view boast nine
                    bedrooms including a master suite with private terrace and
                    an entertainment. wing which includes a 20-seat theater.
                  </p>
                  <ul className="ts-footer-info">
                    <li>
                      <i className="fa fa-envelope"></i>
                      suporte@linuxfossangola.ao
                    </li>
                  </ul>
                  <ul className="ts-social">
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
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widtet post-widget">
                <h3 className="widget-title">
                  <span>Publicações populares</span>
                </h3>
                <div className="widget-content">
                  <div className="list-post-block">
                    <ul className="list-post">
                      <li>
                        <div className="post-block-style media">
                          <div className="post-thumb">
                            <a href="#">
                              <img className="img-fluid" src={Img1} alt="" />
                            </a>
                          </div>

                          <div className="post-content media-body">
                            <h4 className="post-title">
                              <a href="#">
                                Santino loganne legan an old resident
                              </a>
                            </h4>
                            <div className="post-meta mb-7">
                              <span className="post-date">
                                <i className="fa fa-clock-o"></i> 29 July, 2020
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="post-block-style media">
                          <div className="post-thumb">
                            <a href="#">
                              <img className="img-fluid" src={Img2} alt="" />
                            </a>
                          </div>

                          <div className="post-content media-body">
                            <h4 className="post-title">
                              <a href="#">Jennifer Lopez expan her property</a>
                            </h4>
                            <div className="post-meta mb-7">
                              <span className="post-date">
                                <i className="fa fa-clock-o"></i> 29 July, 2020
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-widtet post-widget">
                <div className="widget-content">
                  <a href="#">
                    <img className="img-fluid" src={Baner} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ts-copyright">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 text-center">
              <div className="copyright-content text-light">
                <p>
                  &copy; Copyright © 2020 Todos os direitos reservados Linux
                  foss Angola
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="top-up-btn">
        <div className="backto btnFoote">
          <a href="#" className="icon icon-arrow-up" aria-hidden="true"></a>
        </div>
      </div>
    </div>
  );
}
