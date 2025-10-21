
import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="relative bg-cover bg-center h-[60vh] md:h-[80vh]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1617196214221-36d8157e045a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight uppercase mb-4" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
                    Collection Ramadan
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mb-8" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
                    Découvrez des pièces uniques pour célébrer avec élégance et tradition.
                </p>
                <a href="#" className="bg-white text-black font-bold py-3 px-8 uppercase tracking-wider hover:bg-gray-200 transition duration-300">
                    Découvrir
                </a>
            </div>
        </div>
    );
};

export default Hero;
