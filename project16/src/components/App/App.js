import React, { useEffect, useState } from "react";
import { fetchBlogPosts } from "../BlogService/blogService.js";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../../pages/Home/Home.js";
import AddEditBlog from "../../pages/AddEditBlog/AddEditBlog.js";
import Blog from "../../pages/Blog/Blog.js";
import About from "../../pages/About/About.js";
import NotFound from "../../pages/NotFound/NotFound.js";
import Profile from "../../pages/Profile/Profile.js";
import Header from "../Header/Header";
import { SignUp } from "../../pages/SignUp/SignUp.js";
import { LogIn } from "../../pages/LogIn/LogIn.js";

function App() {
  const [posts, setPosts] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const handleCloseModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    if (!activeModal) return;
    const closeByEsc = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    window.addEventListener("keydown", closeByEsc);
    return () => window.removeEventListener("keydown", closeByEsc);
  }, [activeModal]);

  // const handleOverlayClick = (e) => {
  //   if (e.target === e.currentTarget) {
  //     handleCloseModal();
  //   }
  // };

  useEffect(() => {
    const getBlogPosts = async () => {
      const fetchedPosts = await fetchBlogPosts();
      setPosts(fetchedPosts);
    };
    getBlogPosts();
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <blogService />
        <Switch>
          <Route exact path="/" component={Home} posts={posts} />
          <Route exact path="/add-Blog" component={AddEditBlog} />
          <Route exact path="/add-Blog/:id" component={AddEditBlog} />
          <Route exact path="/blog/:id" component={Blog} />
          <Route exact path="/about" component={About} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="*" component={NotFound} />
          {/* const router = createdBrowserRouter([
            {
              path: "/",
              element: <Layout />
              errorElement: <ErrorPage />
            }
          ]) */}
        </Switch>
      </Router>
      {/* {activeModal === "create" && (
            <AddItemModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "create"}
              onAddItem={onAddItem}
            />
          )}
          {activeModal === "preview" && (
            <ItemModalAddItemModal
              item={selectedCard}
              onClose={handleCloseModal}
              handleDeleteModal={handleDeleteModal}
              onClick={handleOverlayClick}
            />
          )}
          {activeModal === "delete" && (
            <DeleteModal
              isOpen={activeModal === "delete"}
              buttonText={"Delete"}
              onClose={handleCloseModal}
              onClick={handleOverlayClick}
              handleConfirm={handleCardDelete}
              handleCancel={() => {
                setActiveModal("preview");
              }}
            />
          )} */}
    </div>
  );
}

export default App;

