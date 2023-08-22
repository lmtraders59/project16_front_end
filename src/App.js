import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
function App() {
  const weatherTemp = '75°F'
  return (
    <div>
       <Header /> 
      <Main weatherTemp={weatherTemp}/>       
    </div>
  );
 
}

export default App;
