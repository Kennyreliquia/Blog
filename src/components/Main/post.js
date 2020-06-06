import React from "react";

export default function Post(props) {
  const data = props.post;
  return (
    <div className="col-md-6">
      <div className="post-block-style">
        <div className="post-thumb">
          <a href="#">
            <img className="img-fluid" src={data.image} alt="" />
          </a>
          <div className="grid-cat">
            <a className="post-cat lifestyle" href="#">
              {data.tag}
            </a>
          </div>
        </div>
        <div className="post-content">
          <h2 className="post-title title-md">
            <a href="#">{data.title} </a>
          </h2>
          <div className="post-meta mb-7">
            <span className="post-author">
              <i className="fa fa-user" /> {data.owner}
            </span>
            <span className="post-date">
              <i className="fa fa-clock-o" /> {data.dataPost}
            </span>
          </div>
          <p>{data.description}</p>
        </div>
        {/* Post content end */}
      </div>
    </div>
  );
}
