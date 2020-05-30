import React from "react";

const Header = () => {
  return (
    <div className="trending-bar trending-light d-md-block">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-9 text-center text-md-left">
            <p className="trending-title">
              <i className="tsicon fa fa-bolt"></i> Trending Now
            </p>
            <div
              id="trending-slide"
              className="owl-carousel owl-theme trending-slide"
            >
              <div className="item">
                <div className="post-content">
                  <h2 className="post-title title-small">
                    <a>
                      The best MacBook Pro alternatives in 2017 for Apple users
                    </a>
                  </h2>
                </div>
              </div>
              <div className="item">
                <div className="post-content">
                  <h2 className="post-title title-small">
                    <a>
                      Soaring through Southern Patagonia with the Premium Byrd
                      drone
                    </a>
                  </h2>
                </div>
              </div>
              <div className="item">
                <div className="post-content">
                  <h2 className="post-title title-small">
                    <a>
                      Super Tario Run isn’t groundbreaking, but it has Mintendo
                      charm
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 text-md-right text-center">
            <div className="ts-date">
              <i className="fa fa-calendar-check-o"></i>May 29, 2017
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
