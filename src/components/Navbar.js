import {Component} from 'react';
import './NavbarStyles.css';

class Navbar extends Component  {
    state={clicked: false};
    handleClick = () => {
        this.setState({clicked:!this.state.clicked})
    }
    render () {
    return (
        <>
        <nav className={`header ${this.state.clicked ? "scroll-header" : ""}`} >

        
<a href="#home" className="nav__logo">
    <img src="./media/3.png" style={{ width: "100px" }} alt="Logo" />
    <h1>Rupasinghe Steels ™</h1>
</a>



      
        <div>
            <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
            

                <li>
                    <a href="#home"> Home</a>
                </li>
                <li>
                    <a href="#special"> Services</a>
                </li>
                <li>
                    <a href="#products"> Products</a>
                </li>
              
                <li>
                    <a href="#blog"> Projects</a>
                </li>
                <li>
                    <a href="#place"> About Us</a>
                </li>
            </ul>
        </div>

        <div id='mobile'
        onClick={this.handleClick}>
          <i id="bar" className={this.state.clicked ? "fas fa-times" : 'fas fa-bars'}></i>

        </div>
        </nav>
        </> 
    );
}
}
export default Navbar; 

