import React from "react";
import "./Profile.css";
import "../../components/Header/Header.css";
import { Link } from "react-router-dom";

const Profile = ({ posts, isLoggedIn, isLoading }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const modifyHtmlString = (html) => {
    return html.replace(
      /<a /g,
      '<a target="_blank" rel="noopener noreferrer" '
    );
  };

  return (
    <div className="profile">
      <div className="profile__sidebar">
        <h2 className="profile__title">Blog Posts</h2>
        <p className="sidebar__logout">Log out</p>
        <p className="sidebar__nav-item">
          <Link to="/">Home</Link>
        </p>
        {/* <p className="sidebar__nav-item">
          <Link to="/add-blog">Add Blog</Link>
        </p>
        <p className="sidebar__nav-item">
          <Link to="/about">About</Link>
        </p>
        <p className="sidebar__nav-item">
          <Link to="/signup">Sign up</Link>
        </p> */}
      </div>
      <div className="profile__blogs">
        {posts.map((post) => (
          <li key={post.id} className="profile__blog-card">
            <h2 className="home__blog-title">{post.title}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: modifyHtmlString(post.content),
              }}
            ></div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Profile;
