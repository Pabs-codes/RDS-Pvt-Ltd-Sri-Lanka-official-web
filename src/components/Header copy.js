// import { useState } from "react";

const Header =  () => {

  
// const [changeHeader , setChangeHeader] = useState(false);

// const changeHeaderColor = () => {
//   if(window.scrollY >= 50) {
//     setChangeHeader(true)
//   }else {
//     setChangeHeader(false)
//   }
// }

//   window.addEventListener('scroll',changeHeaderColor)

    return ( <header className="header" style={{backgroundColor: 'rgba(0, 0, 0, 1)'}} id="header">
    <nav className="nav container">

    <a href="#home" className="nav__logo">
  <img src="./media/3.png" alt="Rupasinghe Steels Logo" className="logo-image" style={{ width: '100px' }} />
  <span>  » Rupasinghe Steels </span>
</a>


{/* <a href="#home" className="nav__logo">
  <video src="./media/rsf.mp4" alt="Rupasinghe Steels Logo" className="logo-video" style={{ width: '100px' }} autoplay loop muted playsinline />
  <span></span> Rupasinghe<span> </span>Steels
</a> */}



      <div className="nav__menu" id="nav-menu">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link active-link">Home</a>
          </li>
          <li className="nav__item">
            <a href="#special" className="nav__link active-link">Services</a>
          </li>
          <li className="nav__item">
            <a href="#products" className="nav__link">Products</a>
          </li>
          <li className="nav__item">
            <a href="#place" className="nav__link">Projects</a>
          </li>
          <li className="nav__item">
            <a href="#blog" className="nav__link">About Us</a>
          </li>
        </ul>

        <div className="nav__close" id="nav-close">
          <i className="bx bx-x"></i>
        </div>
      </div>

      <div className="nav__toggle" id="nav-toggle">
        <i className="bx bx-grid-alt"></i>
      </div>
    </nav>
  </header>
)} 

export default Header;