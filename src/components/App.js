import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer.js";
import ModalWithForm from "./ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";
import ItemModal from "./ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../utils/weatherApi";
import {CurrentTemperatureUnitContext} from './contexts/CurrentTemperatureUnitContext';
import { Switch, Route } from "react-router-dom/cjs/react-router-dom";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temperature, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

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

  const HandleToggleSwitchChange =() => {
    if( currentTemperatureUnit === 'C') setCurrentTemperatureUnit('F')
    if( currentTemperatureUnit === 'F') setCurrentTemperatureUnit('C')
  }

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <CurrentTemperatureUnitContext.Provider value={{currentTemperatureUnit, HandleToggleSwitchChange}}>
      <Header onCreateModal={handleCreateModal} />
      <Switch>
        <Route exact path="/">
         <Main weatherTemp={temperature} onSelectCard={handleSelectedCard} />
        </Route>
        <Route path="/profile">
          Profile
        </Route>
      </Switch> 
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="New Garment" onClose={handleCloseModal}>
          <div>
            <label>
              <b>Name</b>
              <input
                className="modal__name"
                type="text"
                placeholder="Name"
                name="name"
                minLength={1}
                maxLength={30}
              />
            </label>
          </div>
          <label>
            <b>Image</b>
            <input
              className="modal__link"
              type="url"
              placeholder="Image URL"
              name="link"
              minLength={1}
              maxLength={30}
            />
          </label>
          <p>
            <b>Select the weather type:</b>
          </p>
          <div className="ModalWithForm__radio-buttons">
            <div>
              <label>
                <input
                  className="modal__hot"
                  type="radio"
                  id="hot"
                  value="hot"
                />
                Hot
              </label>
            </div>
            <div>
              <input
                className="modal__warm"
                type="radio"
                id="warm"
                value="warm"
              />
              <label>Warm</label>
            </div>
            <div>
              <input
                className="modal__cold"
                type="radio"
                id="cold"
                value="Cold"
              />
              <label>Cold</label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
