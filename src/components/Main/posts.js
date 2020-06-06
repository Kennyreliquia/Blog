import React from "react";

export default function Posts({ posts }) {
  const featured = posts.filter((post) => post.featured == true);

  const noFeatured = posts.filter((post) => post.featured == false);

  return (
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
                <img src={featured[0].image} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="post-content">
                <h2 className="post-title title-md">
                  <a href="#">{featured[0].title}</a>
                </h2>
                <div className="post-meta mb-7">
                  <span className="post-author">
                    <a href="#">
                      <i className="fa fa-user" /> {featured[0].owner}
                    </a>
                  </span>
                  <span className="post-date">
                    <i className="fa fa-clock-o" /> {featured[0].dataPost}
                  </span>
                </div>
                <p>{featured[0].description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="gap-30" />
        <div
          className="row"
          style={{
            margin: 0,
          }}
        >
          {noFeatured.map((post) => (
            <div className="col-md-6 list-post" key={post.id}>
              <div className="post-block-style media">
                <div className="post-thumb">
                  <a href="#">
                    <img className="img-fluid" src={post.image} />
                  </a>
                </div>
                {/* Post thumb end */}
                <div className="post-content media-body">
                  <div className="grid-category">
                    <a className="post-cat tech-color" href="#">
                      {post.tag}
                    </a>
                  </div>
                  <h2 className="post-title">
                    <a href="#">{post.title}</a>
                  </h2>
                  <div className="post-meta mb-7">
                    <span className="post-date">
                      <i className="fa fa-clock-o" /> {post.dataPost}
                    </span>
                  </div>
                </div>
                {/* Post content end */}
              </div>
              {/* Post block style end */}
            </div>
          ))}
        </div>
      </div>
      {/* Block Tech */}
      <div className="gap-20" />
    </div>
  );
}
