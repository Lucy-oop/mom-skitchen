import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import './Nav.css'
import Logo from '../images/logo.jpg';
import Cart from '../images/cart.png';


function Nav() {
    const [scrolled, setScrolled] = useState('false');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (
        <nav className={`nav-container ${scrolled ? "is-scrolled" : ""}`}>
            <NavLink to="/" className="logo"><img src={Logo} alt="" /></NavLink>
            <ul className='nav-links'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/products">Menu</NavLink></li>
                <li><NavLink to="/AboutUs">About Us</NavLink></li>
                <li><NavLink to="/Reviews">Reviews</NavLink></li>
            </ul>
            <NavLink to="/cart" className="cart" aria-label="Cart"><img src={Cart} alt="Cart" /></NavLink>
        </nav>

    )
}

export default Nav;