import './Header.css'

const Header = () => {
 console.log('Header');

  return (
     <header className='header'>
         <div className="header__logo">
           <div>
            <img src={require("../images/wtwr.svg").default} alt="logo" />
           </div>
           <div>
             Date
           </div>
         </div>  
         <div className="header__avatar-logo">
           <div>
           <button type='text' >Add New Clothes</button>
           </div>    
           <div>Terrence Tegegne</div>  
           <div>Avatar Logo</div>
         </div>
       </header>
    )
}

export default Header;