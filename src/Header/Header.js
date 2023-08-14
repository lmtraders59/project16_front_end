import './Header.css'

const Header = () => {
 console.log('Header');

  return (
     <header className='header'>
         <div className="header__logo">
           <div>
            <img src={require("../images/night/logo.svg").default} alt="logo" />
             logo
           </div>
           <div>
             Date
           </div>
         </div>  
         <div className="header__avatar-logo">
           <div>
           <button type='text' >Add New Clothes</button>
           </div>    
           <div>Name</div>  
           <div>Avatar Logo</div>
         </div>
       </header>
    )
}

export default Header;