import { defaultClothingItems } from "../utils/const";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

function Main({ weatherTemp }) {
    return <main className='main'>
      <WeatherCard day={true} type='cloudy' weatherTemp={weatherTemp} />
      <div className='main_subheading'>Today is {weatherTemp} / You may want to wear:</div>
      <section className="card_section" id='card-section'>
        {defaultClothingItems.map((item) => {
          return (
            <ItemCard item={item} />
          );
        })}
      </section>
    </main>;
  }

  export default Main