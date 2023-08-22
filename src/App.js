import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './footer/footer';

function App() {
  const weatherTemp = '75°F'
  return (
    <div>
       <Header /> 
      <Main weatherTemp={ weatherTemp }/>
      <Footer />     
    </div>
  );
}

export default App;
