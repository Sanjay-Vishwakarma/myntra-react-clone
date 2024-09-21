import React from 'react'
import { CgProfile } from "react-icons/cg";
import { FaBagShopping, FaFaceGrinHearts } from "react-icons/fa6";
import {Link} from 'react-router-dom';

function Header() {
    return (

        <header>
            <div className="logo_container">
                <Link to="home">
                    <img
                        className="myntra_home"
                        src="images/myntra_logo.webp"
                        alt="Myntra Home"
                    />
                </Link>
            </div>
            <nav className="nav_bar">
                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">Kids</a>
                <a href="#">Home &amp; Living</a>
                <a href="#">Beauty</a>
                <a href="#">
                    Studio <sup>New</sup>
                </a>
            </nav>
            <div className="search_bar">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
            </div>
            <div className="action_bar ">
                <div className="action_container">
                    <CgProfile />
                    <span className="action_name">Profile</span>
                </div>
                <div className="action_container">
                    <FaFaceGrinHearts />
                    <span className="action_name">Wishlist</span>
                </div>
                <Link className="action_container" to="bags">
                    <FaBagShopping />
                    <span className="action_name">Bag</span>
                    <span className="bag-item-count">0</span>
                </Link>
            </div>
        </header>

    )
}

export default Header