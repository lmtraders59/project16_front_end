import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './footer/Footer.js';
import ModalWithForm from './ModalWithForm/ModalWithForm';
import { useState } from 'react';
import ItemModal from './ItemModal/ItemModal';
import { getForecastWeather } from './utils/weatherApi';
import { useEffect } from 'react';
import { parseWeatherData } from './utils/weatherApi';

 
function App() {
  const [activeModal, setActiveModal] = useState('')
  const [selectedCard, setSelectedCard] = useState({})
  const [temperature, setTemp] = useState(0)

  const handleCreateModal = () => {
    setActiveModal('create');
  };
  
  const handleCloseModal = () => {
    setActiveModal('');
  };

  const handleSelectedCard = (card) => {
    setActiveModal('preview')
    setSelectedCard(card);
  }

  useEffect (() => {
    getForecastWeather().then((data) => {
      const temperature = parseWeatherData(data);
      setTemp(temperature)
    });
  }, []);
    

  return (
    <div>
       <Header onCreateModal = {handleCreateModal} /> 
      <Main weatherTemp={temperature} onSelectCard={handleSelectedCard} />
      <Footer />   
      {activeModal === 'create' && ( 
      <ModalWithForm title="New Garment" onClose={handleCloseModal}>
        <div>
          <label>
          Name
          <input type='text' name='name' minLength={1} maxLength={30}/>
          </label>
        </div>  
        <label>
          Image
          <input type='url' name='link' minLength={1} maxLength={30}/>
        </label>
        <p>Select the weather type:</p>
        <div>
          <div>
            <input type='radio' id='hot' value='hot'/>
            <label>Hot</label>
          </div>
          <div>
            <input type='radio' id='warm' value='warm'/>
            <label>Warm</label>
          </div>
          <div>
            <input type='radio' id='cold' value='Cold'/>
            <label>Cold</label>
          </div>
        </div>
      </ModalWithForm>
      )}
      {activeModal === 'preview' && <ItemModal selectedCard={selectedCard}
       onClose={handleCloseModal}
      />}
    </div>
  );
}

export default App;
