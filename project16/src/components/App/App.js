import React, { useEffect, useState } from "react";
import { fetchBlogPosts } from "../BlogService/BlogService.js";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../../pages/Home/Home.js";
import AddEditBlog from "../../pages/AddEditBlog/AddEditBlog.js";
import Blog from "../../pages/Blog/Blog.js";
import About from "../../pages/About/About.js";
import NotFound from "../../pages/NotFound/NotFound.js";
import Profile from "../../pages/Profile/Profile.js";
import Header from "../Header/Header";
import { SignUp } from "../../pages/SignUp/SignUp.js";
import { checkToken, authorize } from "../../utils/auth.js";
// import { deleteItem, editUserInfo } from "../../utils/api.js";
import DeleteModal from "../DeleteModal/DeleteModal.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import LoginModal from "../LoginModal/LoginModal.js";
import RegisterModal from "../RegisterModal/RegisterModal.js";
import Footer from "../Footer/Footer.js";
import EditProfileModal from "../EditProfileModal/EditProfileModal.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
// import Preloader from "../Preloader/Preloader.js";

function App() {
  const [posts, setPosts] = useState([]);
  const [activeModal, setActiveModal] = useState("");

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  // const [selectedCard, setSelectedCard] = useState({});
  // const [, setContent] = useState("");
  const [error, setError] = useState(null);

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

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setCurrentUser({});
  }

  const handleRedirect = () => {
    activeModal === "signup"
      ? setActiveModal("login")
      : setActiveModal("signup");
  };

  function handleRegister({ name, avatar, email, password }) {
    setIsLoading(true);
    authorize(name, avatar, email, password)
      .then((res) => {
        handleSignIn({ email, password });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleSignIn({ email, password }) {
    setIsLoading(true);
    authorize(email, password)
      .then((res) => {
        if (res) {
          localStorage.setItem("token", res.token);
          setIsLoggedIn(true);
          handleCloseModal();
        }
        checkToken(res.token)
          .then((res2) => {
            const data = res2.data;
            setCurrentUser(data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    const getBlogPosts = async () => {
      try {
        const fetchedPosts = await fetchBlogPosts();
        setPosts(fetchedPosts);
        // const sanitizedContent = DOMPurify.sanitize(post.content);
        // setContent(sanitizedContent);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    if (isLoggedIn) {
      getBlogPosts();
    }
  }, [isLoggedIn]);

  return (
    <CurrentUserContext.Provider value={{ currentUser, isLoggedIn }}>
      <div className="App">
        <Router>
          <Header
            onOpenLogin={() => {
              setActiveModal("login");
            }}
            onClose={handleCloseModal}
            onClick={handleOverlayClick}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Home
                  {...props}
                  posts={posts}
                  isLoggedIn={isLoggedIn}
                  isLoading={isLoading}
                  error={error}
                  CurrentUserContext={CurrentUserContext}
                  handleLogout={handleLogout}
                />
              )}
            />
            <Route exact path="/add-Blog" component={AddEditBlog} />
            <Route exact path="/add-Blog/:id" component={AddEditBlog} />
            <Route exact path="/blog/:id" component={Blog} />
            <Route exact path="/about" component={About} />
            <ProtectedRoute path="/profile" isLoggedIn={isLoggedIn}>
              <Profile
                posts={posts}
                isLoggedIn={isLoggedIn}
                isLoading={isLoading}
                error={error}
                CurrentUserContext={CurrentUserContext}
                handleLogout={handleLogout}
              />
            </ProtectedRoute>
            <Route
              exact
              path="/signup"
              component={SignUp}
              className="nav__register-button"
              type="button"
              onClick={handleRegister}
            />
            <Route exact path="*" component={NotFound} />
          </Switch>
          <Footer />
        </Router>
        {activeModal === "delete" && (
          <DeleteModal
            isOpen={activeModal === "delete"}
            buttonText={"Delete"}
            onClose={handleCloseModal}
            onClick={handleOverlayClick}
            // handleConfirm={handleCardDelete}
            handleCancel={() => {
              setActiveModal("preview");
            }}
          />
        )}
        {activeModal === "signup" && (
          <RegisterModal
            isOpen={activeModal === "login"}
            name={"register"}
            onClose={handleCloseModal}
            onRegister={handleRegister}
            switchToLogin={handleRedirect}
            isLoading={isLoading}
          />
        )}
        {activeModal === "login" && (
          <LoginModal
            // isOpen={activeModal === "login"}
            name={"login"}
            title={"Login"}
            onClose={handleCloseModal}
            onLogin={handleSignIn}
            switchToRegister={handleRedirect}
            isLoading={isLoading}
            handleLogout={handleLogout}
          />
        )}
        {activeModal === "edit" && (
          <EditProfileModal
            isOpen
            name={"edit"}
            onClose={handleCloseModal}
            onRegister={handleRegister}
            // handleEditProfile={handleEditProfile}
            isLoading={isLoading}
          />
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
