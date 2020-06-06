import React, { useEffect } from "react";
import "./style.css";

import image3 from "../../assets/images/banner-image/image3.png";
import tech2 from "../../assets/images/news/tech/tech02.png";
import tech3 from "../../assets/images/news/tech/tech1.png";
import tech4 from "../../assets/images/news/tech/image5.png";

import cat1 from "../../assets/images/news/category/category1.png";
import cat2 from "../../assets/images/news/category/category2.png";
import cat3 from "../../assets/images/news/category/category3.png";

import tech7 from "../../assets/images/news/tech/tech02.png";
import image2 from "../../assets/images/news/health/image2.png";

import Socail from "../../components/Main/social";
import Category from "../../components/Main/category";
import Posts from "../../components/Main/posts";
import Banner from "../../components/Main/banner";

const Home = () => {
  const category = [
    { id: 1, title: "Health", articles: 10, img: cat1 },
    { id: 2, title: "Tech", articles: 10, img: cat2 },
    { id: 3, title: "Code .", articles: 10, img: cat3 },
  ];

  const posts = [
    {
      id: 1,
      title: " Ratcliffe to be Director of nation intelligence Trumpignored",
      tag: "Lifestyle",
      image: tech7,
      owner: "kennymario",
      dataPost: "29 July, 2020",
      description: `  The market won’t stop actress and singer Jennifer Lopez
      from expanding her property collection Lopez has
      reportedly added to her real`,
      featured: true,
    },
    {
      id: 2,
      title: " Ratcliffe to be Director of nation intelligence Trumpignored",
      tag: "Lifestyle",
      image: tech4,
      owner: "kennymario",
      dataPost: "29 July, 2020",
      description: `  The market won’t stop actress and singer Jennifer Lopez
      from expanding her property collection Lopez has
      reportedly added to her real`,
      featured: false,
    },
    {
      id: 3,
      title: " Ratcliffe to be Director of nation intelligence Trumpignored",
      tag: "Lifestyle",
      image: image2,
      owner: "kennymario",
      dataPost: "29 July, 2020",
      description: `  The market won’t stop actress and singer Jennifer Lopez
      from expanding her property collection Lopez has
      reportedly added to her real`,
      featured: false,
    },
    {
      id: 4,
      title: " Ratcliffe to be Director of nation intelligence Trumpignored",
      tag: "Lifestyle",
      image: tech3,
      owner: "kennymario",
      dataPost: "29 July, 2020",
      description: `  The market won’t stop actress and singer Jennifer Lopez
      from expanding her property collection Lopez has
      reportedly added to her real`,
      featured: false,
    },
    {
      id: 5,
      title: " Ratcliffe to be Director of nation intelligence Trumpignored",
      tag: "Lifestyle",
      image: tech3,
      owner: "kennymario",
      dataPost: "29 July, 2020",
      description: `  The market won’t stop actress and singer Jennifer Lopez
      from expanding her property collection Lopez has
      reportedly added to her real`,
      featured: false,
    },
  ];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "../../assets/js/custom.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

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
      <Banner />
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
            <Posts posts={posts} />
            <div className="col-lg-4">
              <div>
                <div className="sidebar">
                  <Socail />
                </div>
                <div className="sidebar">
                  <Category category={category} />
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
