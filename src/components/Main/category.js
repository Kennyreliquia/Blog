import React from "react";

import cat1 from "../../assets/images/news/category/category1.png";
import cat2 from "../../assets/images/news/category/category2.png";
import cat3 from "../../assets/images/news/category/category3.png";

export default function Category() {
  return (
    <ul className="ts-category-list ts-category-list-sm">
      <li>
        <a
          href="#"
          style={{
            backgroundImage: `url(${cat1})`,
          }}
        >
          <span> Health </span>
          <span className="bar" />
          <span className="category-count">95</span>
        </a>
      </li>
      {/* end list 1 */}
      <li>
        <a
          href="#"
          style={{
            backgroundImage: `url(${cat2})`,
          }}
        >
          <span> Travel </span>
          <span className="bar" />
          <span className="category-count">93</span>
        </a>
      </li>
      {/* end list 2 */}
      <li>
        <a
          href="#"
          style={{
            backgroundImage: `url(${cat3})`,
          }}
        >
          <span> Sports </span>
          <span className="bar" />
          <span className="category-count">103</span>
        </a>
      </li>
      {/* end list 3 */}
    </ul>
  );
}
