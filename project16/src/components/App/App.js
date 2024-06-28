// import React, { useEffect, useState } from 'react';
// import { fetchBlogPosts } from '../BlogService/blogService.js';
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../../pages/Home/Home.js";
import AddEditBlog from "../../pages/AddEditBlog/AddEditBlog.js";
import Blog from "../../pages/Blog/Blog.js";
import About from "../../pages/About/About.js";
import NotFound from "../../pages/NotFound/NotFound.js";
import Profile  from "../../pages/Profile/Profile.js";
import Header from "../Header/Header";
import { SignUp } from "../../pages/SignUp/SignUp.js";
import { LogIn } from "../../pages/LogIn/LogIn.js";
// import { useState, useEffect } from "react";

// useEffect(() => {
//   if (!activeModal) return;
//   const closeByEsc = (e) => {
//     if (e.key === "Escape") {
//       handleCloseModal();
//     }
//   };
//   window.addEventListener("keydown", closeByEsc);
//   return () => window.removeEventListener("keydown", closeByEsc);
// }, [activeModal]);


function App() {
  //   const [blogs, setPosts] = useState([]);

  // useEffect(() => {
  //   const getBlogPosts = async () => {
  //     const fetchedPosts = await fetchBlogPosts();
  //     setPosts(fetchedPosts);
  //   };
  //   getBlogPosts();
  // }, []);
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add-Blog" component={AddEditBlog} />
          <Route exact path="/add-Blog/:id" component={AddEditBlog} />
          <Route exact path="/blog/:id" component={Blog} />
          <Route exact path="/about" component={About} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;


// const App = () => {


//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Blog Posts</h1>
//         <div className="posts">
//           {posts.map(post => (
//             <div key={post.id} className="post-card">
//               <h2>{post.title}</h2>
//               <p>{post.content}</p>
//             </div>
//           ))}
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;