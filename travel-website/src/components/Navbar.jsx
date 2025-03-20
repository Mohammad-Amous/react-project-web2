import { IoMdNotificationsOutline } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";

import logo from '../assets/navbar.png'; // Adjust the path based on your project structure

export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="site-title">
                <img src={logo} alt="FickleFlight Logo" className="logo" />
            </a>
            <ul>
                <li><a href="/" className="explore">Explore</a></li>
                <li><a href="/" className="search">Search</a></li>
                <li><a href="/" className="hotels">Hotels</a></li>
                <li><a href="/" className="offers">Offers</a></li>
                <li><IoMdNotificationsOutline /></li>
                <li><IoPersonOutline />
                </li>
            </ul>                  
        </nav>
    );
}






