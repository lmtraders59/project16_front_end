import './Header.css'

const WeatherCity = 'New York City';
const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });

const Header = ({onCreateModal}) => {
  return (
     <header className='header'>
         <div className="header__logo">
           <div>
            <img src={require("../images/wtwr.svg").default} alt="logo" />
           </div>
           <div> 
             <div className="header__currentDate">{currentDate}, {WeatherCity}</div>
            </div>  
         </div>  
         <div className="header__avatar-logo">
           <div>
           <div type='text' onClick={onCreateModal} >+ Add New Clothes</div>
           </div>    
           <div>Terrence Tegegne</div>  
           <div>
            <img src={require("../images/Avatar.svg").default} alt="avatar" />
           </div>
         </div>
       </header>
    )
}

export default Header;