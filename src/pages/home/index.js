import React from "react";
import "./style.css";

import image1 from "../../assets/images/news/health/image1.png";
import image3 from "../../assets/images/banner-image/image3.png";
import tech2 from "../../assets/images/news/tech/tech02.png";
import tech3 from "../../assets/images/news/tech/tech1.png";
import tech4 from "../../assets/images/news/tech/image5.png";
import tech5 from "../../assets/images/news/lifestyle/image2.png";
import life from "../../assets/images/news/lifestyle/image1.jpg";
import life1 from "../../assets/images/news/fashion/image3.png";

import tech7 from "../../assets/images/news/tech/tech02.png";

import Socail from "../../components/Main/social";
import Category from "../../components/Main/category";

const Home = () => {
  return (
    <div>
      <div className="gap-30" />

      <div className="block-wrapper no-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-img text-center">
                <a href="index-2.html">
                  <img className="img-fluid" src={image3} />
                </a>
              </div>
            </div>
            {/* col end */}
          </div>
          {/* row  end */}
        </div>
        {/* container end */}
      </div>
      <div className="gap-30" />
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
      <div className="gap-30" />
      {/* ad banner start*/}
      <div className="block-wrapper no-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-img text-center">
                <a href="index-2.html">
                  <img className="img-fluid" src={image3} />
                </a>
              </div>
            </div>
            {/* col end */}
          </div>
          {/* row  end */}
        </div>
        {/* container end */}
      </div>
      <section className="block-wrapper pb-lg-0">
        <div className="container">
          <div className="row ts-gutter-30">
            <div className="col-lg-8 col-md-12">
              {/*- Featured Tab startet */}
              <div className="block">
                <h2 className="block-title block-title-tech">
                  <span className="title-angle-shap"> POSTs </span>
                </h2>
                <div className="post-block-style">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="post-thumb">
                        <img src={tech2} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="post-content">
                        <h2 className="post-title title-md">
                          <a href="#">
                            Ratcliffe to be Director of nation intelligence
                            Trump ignored
                          </a>
                        </h2>
                        <div className="post-meta mb-7">
                          <span className="post-author">
                            <a href="#">
                              <i className="fa fa-user" /> John Doe
                            </a>
                          </span>
                          <span className="post-date">
                            <i className="fa fa-clock-o" /> 29 July, 2020
                          </span>
                        </div>
                        <p>
                          The market won’t stop actress and singer Jennifer
                          Lopez from expanding her property collection Lopez has
                          reportedly added to her real....
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gap-30" />
                <div className="row">
                  <div className="col-md-6">
                    <div className="list-post-block">
                      <ul className="list-post">
                        <li>
                          <div className="post-block-style media">
                            <div className="post-thumb">
                              <a href="#">
                                <img className="img-fluid" src={tech3} />
                              </a>
                            </div>
                            {/* Post thumb end */}
                            <div className="post-content media-body">
                              <div className="grid-category">
                                <a className="post-cat tech-color" href="#">
                                  Tech
                                </a>
                              </div>
                              <h2 className="post-title">
                                <a href="#">
                                  Santino loganne legan an year old resident
                                </a>
                              </h2>
                              <div className="post-meta mb-7">
                                <span className="post-date">
                                  <i className="fa fa-clock-o" /> 29 July, 2020
                                </span>
                              </div>
                            </div>
                            {/* Post content end */}
                          </div>
                          {/* Post block style end */}
                        </li>
                        {/* Li 1 end */}
                        <li>
                          <div className="post-block-style media">
                            <div className="post-thumb">
                              <a href="#">
                                <img className="img-fluid" src={tech4} />
                              </a>
                            </div>
                            {/* Post thumb end */}
                            <div className="post-content media-body">
                              <div className="grid-category">
                                <a className="post-cat tech-color" href="#">
                                  Tech
                                </a>
                              </div>
                              <h2 className="post-title">
                                <a href="#">
                                  Jennifer for a Lopez expanding her{" "}
                                </a>
                              </h2>
                              <div className="post-meta mb-7">
                                <span className="post-date">
                                  <i className="fa fa-clock-o" /> 29 July, 2020
                                </span>
                              </div>
                            </div>
                            {/* Post content end */}
                          </div>
                          {/* Post block style end */}
                        </li>
                        {/* Li 2 end */}
                      </ul>
                      {/* list-post end */}
                    </div>
                  </div>
                  {/* col end */}
                  <div className="col-md-6">
                    <div className="list-post-block">
                      <ul className="list-post">
                        <li>
                          <div className="post-block-style media">
                            <div className="post-thumb">
                              <a href="#">
                                <img className="img-fluid" src={tech7} />
                              </a>
                            </div>
                            {/* Post thumb end */}
                            <div className="post-content media-body">
                              <div className="grid-category">
                                <a className="post-cat tech-color" href="#">
                                  Tech
                                </a>
                              </div>
                              <h2 className="post-title">
                                <a href="#">
                                  The Chairman of the Intel ligence committee
                                </a>
                              </h2>
                              <div className="post-meta mb-7">
                                <span className="post-date">
                                  <i className="fa fa-clock-o" /> 29 July, 2020
                                </span>
                              </div>
                            </div>
                            {/* Post content end */}
                          </div>
                          {/* Post block style end */}
                        </li>
                        {/* Li 1 end */}
                        <li>
                          <div className="post-block-style media">
                            <div className="post-thumb">
                              <a href="#">
                                <img className="img-fluid" src={tech5} />
                              </a>
                            </div>
                            {/* Post thumb end */}
                            <div className="post-content media-body">
                              <div className="grid-category">
                                <a className="post-cat tech-color" href="#">
                                  Tech
                                </a>
                              </div>
                              <h2 className="post-title">
                                <a href="#">
                                  House last week that the move would Inject
                                </a>
                              </h2>
                              <div className="post-meta mb-7">
                                <span className="post-date">
                                  <i className="fa fa-clock-o" /> 29 July, 2020
                                </span>
                              </div>
                            </div>
                            {/* Post content end */}
                          </div>
                          {/* Post block style end */}
                        </li>
                        {/* Li 2 end */}
                      </ul>
                      {/* list-post end */}
                    </div>
                  </div>
                  {/* col end */}
                </div>
              </div>
              {/* Block Tech */}
              <div className="gap-20" />
            </div>
            {/* Content Col end */}
            <div className="col-lg-4">
              <div>
                <div className="sidebar">
                  <Socail />
                </div>
                <div className="sidebar">
                  <Category />
                </div>
              </div>
              {/* Sidebar Col end */}
            </div>
          </div>
          {/* Row end */}
        </div>
        {/* Container end */}
      </section>
      {/* First block end */}
      {/* ad banner start*/}
      <div className="block-wrapper no-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-img text-center">
                <a href="index-2.html">
                  <img className="img-fluid" src={image3} />
                </a>
              </div>
            </div>
            {/* col end */}
          </div>
          {/* row  end */}
        </div>
        {/* container end */}
      </div>
      {/* ad banner end*/}
      <div className="gap-50" />
      {/* ad banner start*/}
    </div>
  );
};

export default Home;
