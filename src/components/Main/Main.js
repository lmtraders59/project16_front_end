import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo, useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main({
  weatherTemp,
  onSelectCard,
  clothingItems,
  isLoggedIn,
  handleLikeClick,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;
  const weatherType = useMemo(() => {
    if (currentTemperatureUnit === "F") {
      if (temp >= 86) {
        return "hot";
      } else if (temp >= 66 && temp <= 85) {
        return "warm";
      } else if (temp <= 65) {
        return "cold";
      }
    } else {
      if (temp >= 30) {
        return "hot";
      } else if (temp >= 19 && temp <= 29) {
        return "warm";
      } else if (temp <= 18) {
        return "cold";
      }
    }
  }, [temp, currentTemperatureUnit]);

  const filterCards = clothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });
  <div className="weather_info">
    {weatherTemp} {currentTemperatureUnit}
  </div>;
  return (
    <main className="main">
      <WeatherCard day={true} type="cloudy" weatherTemp={temp} />
      <div className="main_subheading">
        Today is {temp}°{currentTemperatureUnit} / You may want to wear:
      </div>
      <div className="card_section" id="card-section">
        {filterCards.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onSelectCard={onSelectCard}
              isLoggedIn={isLoggedIn}
              handleLikeClick={handleLikeClick}
            />
          );
        })}
      </div>
    </main>
  );
}

export default Main;
