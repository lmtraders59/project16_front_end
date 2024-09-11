import React from "react";
import "./Post.css";

const post = ({ title, description, image }) => {
  return (
    <div className="post-card">
      <img src={image} alt={title} className="post-card__image" />
      <div className="post-card__content">
        <h3 className="post-card__title">{title}</h3>
        <p className="post-card__description">{description}</p>
      </div>
    </div>
  );
};

export default post;
