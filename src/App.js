import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './footer/Footer.js';
import ModalWithForm from './ModalWithForm/ModalWithForm';
import { useState } from 'react';
import ItemModal from './ItemModal/ItemModal';

function App() {
  const weatherTemp = '75°F'
  const [activeModal, setActiveModal] = useState('')
  const {selectedCard, setSelectedCard} = useState({})

  const handleCreateModal = () => {
    setActiveModal('create');
  };
  
  const handleCloseModal = () => {
    setActiveModal('');
  };

  const handleSelectedCard = (card) => {
    setSelectedCard = (card)
  }
  console.log(selectedCard)
  return (
    <div>
       <Header onCreateModal = {handleCreateModal} /> 
      <Main weatherTemp={ weatherTemp } onSelectCard={handleSelectedCard}/>
      <Footer />   
      {activeModal === 'create' && ( 
      <ModalWithForm title="New Garment" onClose={handleCloseModal}>
        <label>
          Name
          <input type='text' name='name' minLength={1} maxLength={30}/>
        </label>
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
      {activeModal === 'preview' && ( <ItemModal selectedCard={selectedCard} />
        
      //  <div className={`modal`}>  
      //    <div className="modal__content">
      //     <img/>
      //     <div>Text for the Item name</div>
      //     <div>Weather Type</div>
      //   </div>
      //  </div>
      )}
    </div>
  );
}

export default App;
