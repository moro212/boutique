
import React from 'react';

const PromoBanner: React.FC = () => {
    return (
        <section className="bg-cover bg-center my-12 h-[50vh]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1595168393031-7038e9047baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')" }}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-start text-white">
                <div className="bg-black bg-opacity-50 p-8 rounded">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase">Élégance intemporelle</h2>
                    <p className="mt-2 mb-4 max-w-md">Notre collection exclusive mêle artisanat traditionnel et design contemporain.</p>
                    <a href="#" className="bg-white text-black font-bold py-2 px-6 uppercase tracking-wider hover:bg-gray-200 transition duration-300">
                        Explorer
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PromoBanner;
