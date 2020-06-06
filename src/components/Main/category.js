import React from "react";

export default function Category({ category }) {
  return (
    <ul className="ts-category-list ts-category-list-sm">
      {category.map((category) => (
        <li key={category.id}>
          <a
            href="#"
            style={{
              backgroundImage: `url(${category.img})`,
            }}
          >
            <span> {category.title} </span>
            <span className="bar" />
            <span className="category-count">{category.articles}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
