import React from "react";

export default function Social() {
  return (
    <div className="sidebar-widget social-widget">
      <h2 className="block-title">
        <span className="title-angle-shap"> Social</span>
      </h2>
      <div className="sidebar-social">
        <ul className="ts-social-list">
          <li className="ts-facebook">
            <a href="#">
              <i className="tsicon fa fa-facebook" />
              <div className="count">
                <b>12.5 k </b>
                <span>Likes</span>
              </div>
            </a>
          </li>
          <li className="ts-twitter">
            <a href="#">
              <i className="tsicon fa fa-twitter" />
              <div className="count">
                <b>12.5 k </b>
                <span>Follwers</span>
              </div>
            </a>
          </li>
          <li className="ts-youtube">
            <a href="#">
              <i className="tsicon fa fa-youtube-play" />
              <div className="count">
                <b>28 k </b>
                <span>Subscribers</span>
              </div>
            </a>
          </li>
          <li className="ts-rss">
            <a href="#">
              <i className="tsicon fa fa-rss" />
              <div className="count">
                <b>12.5 k </b>
                <span>Follwers</span>
              </div>
            </a>
          </li>
          <li className="ts-vk">
            <a href="#">
              <i className="tsicon fa fa-vk" />
              <div className="count">
                <b>35 k </b>
                <span>Subscribers</span>
              </div>
            </a>
          </li>
          <li className="ts-linkedin">
            <a href="#">
              <i className="tsicon fa fa-linkedin" />
              <div className="count">
                <b>15 k </b>
                <span>Followers</span>
              </div>
            </a>
          </li>
        </ul>
        {/* social list */}
      </div>
    </div>
  );
}
