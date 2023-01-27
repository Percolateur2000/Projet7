import React from "react";
import { Link } from "react-router-dom";
import "@/components/header/header.css";
import Logo from "@/components/logo/Logo";

const Header = () => {
    return (
        <header className="header">
            <Logo />
            <nav>
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/APropos">A Propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
