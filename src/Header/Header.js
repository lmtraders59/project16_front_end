import './Header.css'

const Header = () => {
 console.log('Header');

  return (
     <header>
         <div className="header__logo">
           <div><img src="/images/wtr.svg" alt="logo"/>
             logo
           </div>
           <div>l
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
