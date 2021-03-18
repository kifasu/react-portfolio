import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {FaSteam, FaGithub, FaLinkedin} from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi";

function Navbar() {

    const [navOpen, navToggle] = useState(false);

    const handleNavToggleBtn = (e) => {
        e.preventDefault();
        navToggle(!navOpen);
       
    }

    const handleOnClickNavBtn = (e) => {
        navToggle(false);
    }

    return (
        <>
            <nav>
                <div className="logo">
                </div>
                <ul className={!navOpen? "navlinks":"navlinks active"}>
                    <li className="link">
                        <NavLink activeClassName='is-active' exact to="/" onClick={handleOnClickNavBtn} >home</NavLink>
                    </li>
                    <li className="link">
                        <NavLink activeClassName='is-active' exact to="/services" onClick={handleOnClickNavBtn}>services</NavLink>
                    </li>
                    <li className="link">
                        <NavLink activeClassName='is-active' exact to="/projects" onClick={handleOnClickNavBtn}>projects</NavLink>
                    </li>
                    <li className="link">
                        <NavLink activeClassName='is-active' exact to="/contact-me" onClick={handleOnClickNavBtn}>contact</NavLink>
                    </li>
                    {/* <li className="link">
                        <Link exact to="/journals" onClick={handleOnClickNavBtn}>journals</Link>
                    </li>  */}
                    <h4 className="separator"> | </h4>
                    <li className="link svgs">
                        <a className="react-ico" target="_" href="https://steamcommunity.com/id/aqmxl" onClick={handleOnClickNavBtn}><FaSteam/></a>
                    </li>
                    <li className="link svgs">
                        <a className="react-ico" target="_" href="https://github.com/kifasu" onClick={handleOnClickNavBtn}><FaGithub/></a>
                    </li>
                    <li className="link svgs">
                        <a className="react-ico" target="_" href="https://www.linkedin.com/in/mohamad-aqmal-mohamad-mansor-38b61615a/" onClick={handleOnClickNavBtn}>
                            <FaLinkedin/>
                        </a>
                    </li>
                </ul>
                <div  className="hamburger-toggle">
                    <a className="burger" href="/">
                        <GiHamburgerMenu onClick={handleNavToggleBtn}/>
                    </a>
                </div>
            </nav>
        </>
    )
}
export default Navbar;
