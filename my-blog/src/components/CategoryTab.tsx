import React from "react";
import { CATEGORIES, CategoryType } from "./PostList";

interface categoryTabProps {
  activeCategory: CategoryType;
  setActiveCategory: Function;
}
export default function CategoryTab({
  activeCategory,
  setActiveCategory,
}: categoryTabProps) {
  return (
    <div className="category__tab-box">
      {CATEGORIES.map((category) => (
        <div
          className={
            category === activeCategory
              ? "post__category post__category--active"
              : "post__category"
          }
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </div>
      ))}
    </div>
  );
}
