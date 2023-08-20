function Main() {
    return <main className='main'>
      {/* <section className ="weather" id='weather'> */}
      <WeatherCard day={true} type='cloudy' weatherTemp={weatherTemp} />
      {/* </section> */}
      <section className="card_section" id='card-section'>
        <div>
          Today is {weatherTemp} / You may want to wear:
          {defaultClothingItems.map((item) => {
            return (
              <ItemCard item={item} />
            );
          })}
        </div>
      </section>
    </main>;
  }

  export default Main