import React from "react";
import Blog from "../Blog/Blog";
import "./Home.css";

const Home = () => {
  const blogs = [
    {
      title: "First Blog",
      description: "This is the first blog description",
      image: "./images/tobias-reich-7bXY-DW4MqM-unsplash.jpg",
    },
    {
      title: "Second Blog",
      description: "This is the second blog description",
      image: "./images/eberhard-grossgasteiger-BsOWuFy9GIM-unsplash.jpg",
    },
    {
      title: "Third Blog",
      description: "This is the third blog description",
      image: "./images/daniel-deiev-4eojU9_FrkE-unsplash.jpg",
    },
    {
      title: "Fourth Blog",
      description: "This is the fourth blog description",
      image: "./images/ian-dooley-TevqnfbI0Zc-unsplash.jpg",
    },
    {
      title: "Fifth Blog",
      description: "This is the fifth blog description",
      image: "./images/kalen-emsley-7bwQXzbF6KE-unsplash.jpg",
    },
    // Add more blogs here
  ];

  return (
    <div className="Home">
      <h1 className="home__title">Blog Posts</h1>
      <div className="home__blogs">
        {blogs.map((blog, index) => (
          <Blog
            key={index}
            title={blog.title}
            description={blog.description}
            image={blog.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

