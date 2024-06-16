import React from "react";
import "./Blog.css";

const Blog = ({ title, description, image }) => {
  return (
    <div className="blog-card">
      <img src={image} alt={title} className="blog-card__image" />
      <div className="blog-card__content">
        <h3 className="blog-card__title">{title}</h3>
        <p className="blog-card__description">{description}</p>
      </div>
    </div>
  );
};

export default Blog;
