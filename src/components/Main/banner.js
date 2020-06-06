import React from "react";
import tech5 from "../../assets/images/news/lifestyle/image2.png";
import life from "../../assets/images/news/lifestyle/image1.jpg";
import life1 from "../../assets/images/news/fashion/image3.png";
import image1 from "../../assets/images/news/health/image1.png";

export default function banner() {
  return (
    <section className="featured-post-area no-padding">
      <div className="container">
        <div className="row ts-gutter-20">
          <div className="col-lg-7 col-md-12 pad-r">
            <div
              id="featured-slider"
              className="owl-carousel active owl-theme featured-slider"
            >
              <div
                className="item active  post-overaly-style"
                style={{
                  backgroundImage: `url(${life})`,
                }}
              >
                <div className="featured-post">
                  <a href="#" className="image-link">
                    &nbsp;
                  </a>
                  <div className="overlay-post-content">
                    <div className="post-content">
                      <div className="grid-category">
                        <a className="post-cat fashion" href="#">
                          Fashion
                        </a>
                        <a className="post-cat lifestyle" href="#">
                          Lifestyle
                        </a>
                      </div>
                      <h2 className="post-title title-lg">
                        <a href="#">
                          Netcix cuts out the chill with an integrated trainer
                          on running
                        </a>
                      </h2>
                      <div className="post-meta">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fa fa-user" /> John Wick
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icon icon-clock" /> 20 July, 2020
                            </a>
                          </li>
                          <li>
                            <a href="#" className="view">
                              <i className="icon icon-fire" /> 354k
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/*/ Featured post end */}
              </div>
              {/* Item 1 end */}
              <div
                className="item post-overaly-style"
                style={{
                  backgroundImage: `url(${life1})`,
                }}
              >
                <div className="featured-post">
                  <a href="#" className="image-link">
                    &nbsp;
                  </a>
                  <div className="overlay-post-content">
                    <div className="post-content">
                      <div className="grid-category">
                        <a className="post-cat fashion" href="#">
                          Fashion
                        </a>
                        <a className="post-cat sports" href="#">
                          Sports
                        </a>
                      </div>
                      <h2 className="post-title title-lg">
                        <a href="#">
                          Netcix cuts out the chill with an integrated trainer
                          on running
                        </a>
                      </h2>
                      <div className="post-meta">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fa fa-user" /> John Wick
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icon icon-clock" /> 20 July, 2020
                            </a>
                          </li>
                          <li>
                            <a href="#" className="view">
                              <i className="icon icon-fire" /> 354k
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/*/ Featured post end */}
              </div>
              {/* Item 1 end */}
            </div>
            {/* Featured owl carousel end*/}
          </div>
          {/* Col 7 end */}
          <div className="col-lg-5 col-md-12 pad-l">
            <div className="row ts-gutter-20">
              <div className="col-md-12">
                <div
                  className="post-overaly-style post-md ml-8"
                  style={{
                    backgroundImage: `url(${tech5})`,
                  }}
                >
                  <div className="post-content">
                    <a className="post-cat lifestyle" href="#">
                      Lifestyle
                    </a>
                    <h2 className="post-title title-md">
                      <a href="#">
                        Nancy Zhang a Chinese busy woman and social media
                      </a>
                    </h2>
                    <div className="post-meta">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-user" /> John Wick
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon icon-clock" /> 20 July, 2020
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Post content end */}
                </div>
                {/* Post Overaly end */}
              </div>
              {/* Col end */}
              <div className="col-md-12">
                <div
                  className="post-overaly-style post-sm overlay-primary  ml-8"
                  style={{
                    backgroundImage: `url(${image1})`,
                  }}
                >
                  <div className="post-content">
                    <a className="post-cat health" href="#">
                      Health
                    </a>
                    <h2 className="post-title title-md">
                      <a href="#">
                        Nancy Zhang a Chinese busy woman and social media
                      </a>
                    </h2>
                    <div className="post-meta">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-user" /> John Wick
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon icon-clock" /> 20 July, 2020
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Post content end */}
                </div>
                {/* Post Overaly end */}
              </div>
              {/* Col end */}
            </div>
            {/* row end */}
          </div>
          {/* Col 5 end */}
        </div>
      </div>
    </section>
  );
}
