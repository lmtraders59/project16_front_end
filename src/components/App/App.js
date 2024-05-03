// Import
import "./App.css";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer.js";
import { useState, useEffect } from "react";
import ItemModal from "../ItemModal/ItemModal.js";
import {
  getForecastWeather,
  parseWeatherData,
} from "../../utils/weatherApi.js";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import {
  Switch,
  Route,
  HashRouter,
} from "react-router-dom/cjs/react-router-dom";
import AddItemModal from "../AddItemModal/AddItemModal.js";
import {
  addItem,
  deleteItem,
  getItems,
  editUserInfo,
  addLike,
  removeLike,
} from "../../utils/api.js";
import DeleteModal from "../DeleteModal/DeleteModal.js";

import "../Profile/Profile.css";
import Profile from "../Profile/Profile.js";
import { checkToken, signIn, signUp } from "../../utils/auth.js";
import EditProfileModal from "../EditProfileModal/EditProfileModal.js";
import RegisterModal from "../RegisterModal/RegisterModal.js";
import LoginModal from "../LoginModal/LoginModal.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temperature, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  // const [weatherData, setWeatherData] = useState({});

  // storage for my cards
  const [clothingItems, setClothingItems] = useState([]);

  const handleCreateModal = () => {
    setActiveModal("create");
  };

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

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleDeleteModal = () => {
    setActiveModal("delete");
  };

  const handleCardDelete = () => {
    deleteItem(selectedCard._id)
      .then(() => {
        setClothingItems(
          clothingItems.filter((item) => item._id !== selectedCard._id)
        );
        setSelectedCard({});
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const handleLike = (id, isLiked) => {
    isLiked
      ? removeLike(id)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((card) => (card._id === id ? updatedCard.data : card))
            );
          })
          .catch((err) => console.log(err))
      : addLike(id)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((card) => (card._id === id ? updatedCard.data : card))
            );
          })
          .catch((err) => console.log(err));
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
    signUp(name, avatar, email, password)
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
    signIn(email, password)
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

  const onAddItem = ({ name, link, weatherType }) => {
    addItem(name, link, weatherType)
      .then((item) => {
        const items = [item.data, ...clothingItems];
        setClothingItems(items);
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
  };

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
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch(console.error);

    // request items from server
    getItems()
      .then((response) => {
        setClothingItems(response.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <CurrentTemperatureUnitContext.Provider
        value={{
          currentTemperatureUnit,
          handleToggleSwitchChange,
        }}
      >
        <HashRouter>
          <Header
            onCreateModal={handleCreateModal}
            isLoggedIn={isLoggedIn}
            handleRegister={() => {
              setActiveModal("signup");
            }}
            handleLogin={() => {
              setActiveModal("login");
            }}
          />
          <Switch>
            <Route exact path="/">
              <Main
                isLoggedIn={isLoggedIn}
                weatherTemp={temperature}
                onSelectCard={handleSelectedCard}
                clothingItems={clothingItems}
                onCardLike={handleLike}
                handleLikeClick={handleLike}
              />
            </Route>
            <ProtectedRoute
              path="/profile"
              isLoggedIn={isLoggedIn}
              CurrentUserContext
            >
              <Profile
                onSelectCard={handleSelectedCard}
                onCreateModal={handleCreateModal}
                clothingItems={clothingItems}
                handleLogout={handleLogout}
                isLoggedIn={isLoggedIn}
                handleLikeClick={handleLike}
                handleEditClick={() => {
                  setActiveModal("edit");
                }}
                onCardLike={handleLike}
              />
            </ProtectedRoute>
          </Switch>
          <Footer />
          {activeModal === "create" && (
            <AddItemModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "create"}
              onAddItem={onAddItem}
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
              isOpen
              name={"register"}
              onClose={handleCloseModal}
              onRegister={handleRegister}
              switchToLogin={handleRedirect}
              isLoading={isLoading}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              isOpen
              name={"login"}
              title={"Login"}
              onClose={handleCloseModal}
              onLogin={handleSignIn}
              switchToRegister={handleRedirect}
              isLoading={isLoading}
            />
          )}
          {activeModal === "edit" && (
            <EditProfileModal
              isOpen
              name={"edit"}
              onClose={handleCloseModal}
              onRegister={handleRegister}
              handleEditProfile={handleEditProfile}
              isLoading={isLoading}
            />
          )}
        </HashRouter>
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
