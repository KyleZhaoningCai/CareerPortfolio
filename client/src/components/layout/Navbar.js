import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Fragment>
            <ul id="gameDropdown" className="dropdown-content">
                <li><Link to="/games/tower-defense">Battle City TD</Link></li>
                <li><Link to="/games/mario">Super Mario 1-1</Link></li>
                <li><Link to="/games/treasure-hunter">Treasure Hunter</Link></li>
                <li><Link to="/games/jailbreak">Jailbreak 3D</Link></li>
            </ul>
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">Zhaoning(Kyle)<span className="hide-on-mobile"> Cai Portfolio</span></Link>
                    <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/website">Website</Link></li>
                        <li><a className="dropdown-trigger" href="#!" data-target="gameDropdown">Games<i className="material-icons right">arrow_drop_down</i></a></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/website">Website</Link></li>
                <li><a href="#!">Games</a>
                    <ul className="submenu">
                        <li><Link to="/games/tower-defense">Battle City TD</Link></li>
                        <li><Link to="/games/mario">Super Mario 1-1</Link></li>
                        <li><Link to="/games/treasure-hunter">Treasure Hunter</Link></li>
                        <li><Link to="/games/jailbreak">Jailbreak 3D</Link></li>
                    </ul>
                </li>
            </ul>
        </Fragment>
    )
}

export default Navbar;
