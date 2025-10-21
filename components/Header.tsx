
import React, { useState } from 'react';
import { SearchIcon, UserIcon, BagIcon, MenuIcon, XIcon } from './icons/Icons';

interface HeaderProps {
    navigate: (page: string) => void;
    cartItemCount: number;
}

const Header: React.FC<HeaderProps> = ({ navigate, cartItemCount }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: "NOUVEAUTÉS", page: "new" },
        { name: "FEMME", page: "woman" },
        { name: "HOMME", page: "man" },
        { name: "ENFANTS", page: "kids" },
        { name: "OUTLET", page: "outlet", extraClass: "text-red-600" },
    ];

    const handleNavClick = (page: string) => {
        navigate(page);
        setIsMenuOpen(false); // Close mobile menu on navigation
    }

    return (
        <header className="bg-white sticky top-0 z-50 shadow-sm">
            <div className="bg-black text-white text-center text-sm py-2 px-4">
                Livraison offerte dès 800 MAD d'achat
            </div>
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-1 md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none">
                            {isMenuOpen ? <XIcon /> : <MenuIcon />}
                        </button>
                    </div>

                    <div className="hidden md:flex md:flex-1 md:items-center md:space-x-6">
                        {navLinks.slice(0, 3).map((link) => (
                             <button key={link.name} onClick={() => handleNavClick(link.page)} className={`text-sm font-semibold tracking-wider text-gray-800 hover:text-yellow-600 transition duration-200 ${link.extraClass || ''}`}>
                                {link.name}
                            </button>
                        ))}
                    </div>

                    <div className="flex-shrink-0 flex justify-center md:flex-1">
                        <button onClick={() => handleNavClick('home')} className="text-3xl font-extrabold tracking-widest text-black">
                            DIAMANTINE
                        </button>
                    </div>

                    <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-6">
                         {navLinks.slice(3).map((link) => (
                             <button key={link.name} onClick={() => handleNavClick(link.page)} className={`text-sm font-semibold tracking-wider text-gray-800 hover:text-yellow-600 transition duration-200 ${link.extraClass || ''}`}>
                                {link.name}
                            </button>
                        ))}
                    </div>
                    
                    <div className="flex items-center justify-end flex-1">
                         <div className="flex items-center space-x-4">
                            <button onClick={() => navigate('search')} className="text-gray-800 hover:text-yellow-600">
                                <SearchIcon />
                            </button>
                            <button onClick={() => navigate('user')} className="text-gray-800 hover:text-yellow-600">
                                <UserIcon />
                            </button>
                            <button onClick={() => navigate('cart')} className="text-gray-800 hover:text-yellow-600 relative">
                                <BagIcon />
                                {cartItemCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                        {cartItemCount}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <button key={link.name} onClick={() => handleNavClick(link.page)} className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100 ${link.extraClass || ''}`}>
                                    {link.name}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
