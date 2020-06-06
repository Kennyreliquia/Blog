import React from "react";
import "./style.css";
import image2 from "../../assets/images/news/health/image2.png";
import image3 from "../../assets/images/news/travel/image3.png";

import Socail from "../../components/Main/social";
import Category from "../../components/Main/category";

import Post from "../../components/Main/post";

import cat1 from "../../assets/images/news/category/category1.png";
import cat2 from "../../assets/images/news/category/category2.png";
import cat3 from "../../assets/images/news/category/category3.png";

const Saiba = () => {
  const posts = [
    {
      id: 1,
      title: " Ratcliffe to be Director of nation intelligence Trumpignored",
      tag: "Lifestyle",
      image: image2,
      owner: "kennymario",
      dataPost: "29 July, 2020",
      description: `  The market won’t stop actress and singer Jennifer Lopez
      from expanding her property collection Lopez has
      reportedly added to her real`,
    },
    {
      id: 2,
      title: " Ratcliffe to be Director of nation intelligence Trumpignored",
      tag: "Lifestyle",
      image: image3,
      owner: "kennymario",
      dataPost: "29 July, 2020",
      description: `  The market won’t stop actress and singer Jennifer Lopez
      from expanding her property collection Lopez has
      reportedly added to her real`,
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
    },
    {
      id: 4,
      title: " Ratcliffe to be Director of nation intelligence Trumpignored",
      tag: "Lifestyle",
      image: image3,
      owner: "kennymario",
      dataPost: "29 July, 2020",
      description: `  The market won’t stop actress and singer Jennifer Lopez
      from expanding her property collection Lopez has
      reportedly added to her real`,
    },
  ];
  const category = [
    { id: 1, title: "Health", articles: 10, img: cat1 },
    { id: 2, title: "Tech", articles: 10, img: cat2 },
    { id: 3, title: "Code .", articles: 10, img: cat3 },
  ];
  return (
    <div>
      <div className="breadcrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ol className="breadcrumb">
                <li>
                  <i className="fa fa-home" />
                  <a href="#">Home</a>
                </li>
                <li>
                  <i className="fa fa-angle-right" />
                  Saiba Como
                </li>
              </ol>
            </div>
          </div>
          {/* row end */}
        </div>
        {/* container end */}
      </div>
      {/* breadcrumb end */}
      <section className="main-content category-layout-2 pt-0">
        <div className="container">
          <div className="row ts-gutter-30">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-12">
                  <h2 className="block-title">
                    <span className="title-angle-shap"> DICAS </span>
                  </h2>
                </div>
                {/* col end */}
              </div>
              {/* row end */}
              <div className="row ts-gutter-10">
                {posts.map((post) => (
                  <Post post={post} key={post.id} />
                ))}
              </div>
              {/* row end */}
              <div className="gap-30 d-none d-md-block" />
              <div className="row">
                <div className="col-12">
                  <ul className="ts-pagination">
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#" className="active">
                        2
                      </a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* col-lg-8 */}
            <div className="col-lg-4">
              <div className="sidebar">
                <Socail />
                <Category category={category} />
              </div>
            </div>
            {/* sidebar col end */}
          </div>
          {/* row end */}
        </div>
        {/* container end */}
      </section>
    </div>
  );
};

export default Saiba;
