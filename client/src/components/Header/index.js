import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-secondary mb-4 py-2 flex-row align-center">
            <div className="container flex-row justify-space-between-lg justify-center align-center">
                <Link to="/">
                    <h1>Tail Me About It</h1>
                </Link>
                {/* TODO: Login, Sign Up and Profile page? */}
                <nav className="text-center">
                    <Link to="/toys">Toys</Link>
                    <Link to="/accessories">Accessories</Link>
                    <Link to="/boxes">Holiday Boxes</Link>
                    <Link to="/sale">On Sale</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
