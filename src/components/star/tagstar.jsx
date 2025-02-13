import React from "react";
import "./tagstar.scss";

const Star = ({ filled }) => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill={filled ? "red" : "gray"}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.26 5.82 22 7 14.14 2 9.27l6.91-1.01z" />
  </svg>
);

const TagStar = ({ tags, rating }) => {
  const totalStars = 5;

  return (
    <div className="tagstar-container">
      {/* Affichage des tags */}
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>

      {/* Affichage des étoiles */}
      <div className="stars">
        {[...Array(totalStars)].map((_, index) => (
          <Star key={index} filled={index < rating} />
        ))}
      </div>
    </div>
  );
};

export default TagStar;