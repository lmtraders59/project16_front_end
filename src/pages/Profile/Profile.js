import React from "react";
import "./Profile.css";

const Profile = ({ posts, isLoggedIn, isLoading }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="profile">
      <div className="profile__sidebar">
        <h1 className="profile__title">Blog Posts</h1>
        <p className="sidebar__logout">Log out</p>
      </div>
      <div className="profile__blogs">
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Profile;

 
