import reactIcon from "../../assets/react.svg";
import './Navbar.css';

const Navbar = () =>{
    return( 
        <nav className="navbar">
        <div className="section-container navbar-container">
            <h3> Logo </h3>
            <img src={reactIcon} alt="react icon" />
        </div>
    </nav>
    )
}

export default Navbar;