import React, { useEffect, useState } from "react";
import { fetchBlogPosts } from "../BlogService/BlogService.js";
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
// import { LogIn } from "../../pages/LogIn/LogIn.js";
import { checkToken, authorize } from "../../utils/auth.js";
import { deleteItem, editUserInfo } from "../../utils/api.js";
import AddItemModal from "../AddItemModal/AddItemModal.js";
import ItemModal from "../ItemModal/ItemModal.js";
import DeleteModal from "../DeleteModal/DeleteModal.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import LoginModal from "../LoginModal/LoginModal.js";
import RegisterModal from "../RegisterModal/RegisterModal.js";

function App() {
  const [posts, setPosts] = useState([]);
  const [activeModal, setActiveModal] = useState("");

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

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

  const handleCardDelete = () => {
    deleteItem(selectedCard._id)
      .then(() => {
        setSelectedCard({});
        handleCloseModal();
      })
      .catch((err) => console.log(err));
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

  function handleEditProfile(name, avatar) {
    setIsLoading(true);
    editUserInfo(name, avatar)
      .then((data) => {
        handleCloseModal();
        setCurrentUser(data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }

  const handleDeleteModal = () => {
    setActiveModal("delete");
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
          .then((data) => {
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
    const token = localStorage.getItem("token");
    if (token) {
      checkToken(token)
        .then((res) => {
          setCurrentUser(res);
          setIsLoggedIn(true);
        })
        .catch((err) => console.log(err.message));
    }
  }, []);

  useEffect(() => {
    const getBlogPosts = async () => {
      const fetchedPosts = await fetchBlogPosts();
      setPosts(fetchedPosts);
    };
    getBlogPosts();
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <div className="App">
        <Router>
          <Header onOpenLogin={() => setActiveModal("login")} />
          {/* <blogService /> */}
          <Switch>
            <Route
              exact
              path="/"
              component={Home}
              posts={posts}
              isLoggedIn={isLoggedIn}
            />
            <Route exact path="/add-Blog" component={AddEditBlog} />
            <Route exact path="/add-Blog/:id" component={AddEditBlog} />
            <Route exact path="/blog/:id" component={Blog} />
            <Route exact path="/about" component={About} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/signup" component={SignUp} />
            {/* <Route exact path="/login" component={LogIn} /> */}
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
        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            // onAddItem={onAddItem}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal
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
            isOpen={activeModal === "login"}
            name={"login"}
            title={"Login"}
            onClose={handleCloseModal}
            onLogin={handleSignIn}
            switchToRegister={handleRedirect}
            isLoading={isLoading}
          />
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
