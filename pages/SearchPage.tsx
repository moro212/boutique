
import React from 'react';
import { SearchIcon } from '../components/icons/Icons';

const SearchPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center flex flex-col items-center justify-center min-h-[60vh]">
            <h1 className="text-4xl font-extrabold tracking-tight uppercase mb-6">Rechercher</h1>
            <p className="text-gray-600 mb-8 max-w-lg">
                Trouvez votre prochaine pièce favorite parmi notre collection exclusive de caftans, djellabas et plus encore.
            </p>
            <div className="w-full max-w-lg relative">
                <input
                    type="search"
                    placeholder="Que cherchez-vous ?"
                    className="w-full p-4 pr-12 border-2 border-gray-300 rounded-full focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 focus:outline-none transition"
                />
                <button className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500 hover:text-black">
                    <SearchIcon />
                </button>
            </div>
        </div>
    );
};

export default SearchPage;
