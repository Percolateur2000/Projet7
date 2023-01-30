import React from "react";
import { Link } from "react-router-dom";
import "@/components/header/header.css";
import Logo from "@/components/Logo";

const Header = () => {
    return (
        <nav className="header">
            <Logo />
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/APropos">A Propos</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
