import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer.js";
import { useState, useEffect } from "react";
import ItemModal from "./ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";
import {
  Switch,
  Route,
  HashRouter,
} from "react-router-dom/cjs/react-router-dom";
import AddItemModal from "./AddItemModal/AddItemModal";
import {
  addItem,
  deleteItem,
  getItems,
  editUserInfo,
  addLike,
  removeLike,
} from "../utils/api.js";
import DeleteModal from "./DeleteModal/DeleteModal.js";

import "./Profile/Profile.css";
import Profile from "./Profile/Profile";
import { checkToken, signIn, signUp } from "../utils/auth.js";
import EditProfileModal from "../components/EditProfileModal/EditProfileModal.js";
import RegisterModal from "../components/RegisterModal/RegisterModal.js";
import LoginModal from "../components/LoginModal/LoginModal.js";
// import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute.js";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temperature, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // storage for my cards
  const [clothingItems, setClothingItems] = useState([]);

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
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
      ? addLike(id)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((card) => (card._id === id ? updatedCard.data : card))
            );
          })
          .catch((err) => console.log(err))
      : removeLike(id)
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
          setCurrentUser();
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
        console.log(">>> ITEM", item);

        const items = [item, ...clothingItems];
        setClothingItems(items);
        // close Modal
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
      .catch((err) => {
        console.log(err);
      });
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
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange, currentUser }}
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
          {/* path="/profile" children={Profile}
          isLoggedIn={isLoggedIn}
          currentUser={currentUser} */}
          <Route exact path="/">
            <Main
              weatherTemp={temperature}
              onSelectCard={handleSelectedCard}
              clothingItems={clothingItems}
            />
          </Route>
          <Route path="/profile">
            <Profile
              onSelectCard={handleSelectedCard}
              onCreateModal={handleCreateModal}
              clothingItems={clothingItems}
              currentUser={currentUser}
              handleLogout={handleLogout}
              isLoggedIn={isLoggedIn}
              handleLikeClick={handleLike}
            />
          </Route>
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
            selectedCard={selectedCard}
            onClose={handleCloseModal}
            handleDeleteModal={handleDeleteModal}
          />
        )}
        {activeModal === "delete" && (
          <DeleteModal
            isOpen={activeModal === "delete"}
            buttonText={"Delete"}
            onClose={handleCloseModal}
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
            currentUser={currentUser}
            handleEditProfile={handleEditProfile}
            isLoading={isLoading}
          />
        )}
      </HashRouter>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
