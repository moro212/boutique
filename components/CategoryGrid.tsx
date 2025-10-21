
import React from 'react';
import { Category } from '../types';

const categories: Category[] = [
    { name: 'Femme', imageUrl: 'https://images.unsplash.com/photo-1588516125010-a43050130282?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80', gridClass: 'md:col-span-2 md:row-span-2' },
    { name: 'Homme', imageUrl: 'https://images.unsplash.com/photo-1610484729141-86687258a16c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80', gridClass: 'md:col-span-2 md:row-span-2' },
    { name: 'Enfants', imageUrl: 'https://images.unsplash.com/photo-1617269019641-7e289b4f0b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80', gridClass: 'md:col-span-1' },
    { name: 'Accessoires', imageUrl: 'https://images.unsplash.com/photo-1605342415783-157a5b3a3b1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80', gridClass: 'md:col-span-1' }
];

const CategoryCard: React.FC<{ category: Category }> = ({ category }) => (
    <div className={`relative group overflow-hidden ${category.gridClass} min-h-[400px] md:min-h-0`}>
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${category.imageUrl})` }}></div>
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
            <h2 className="text-3xl font-bold uppercase tracking-wider">{category.name}</h2>
            <span className="mt-2 text-sm font-semibold uppercase tracking-widest border-b-2 border-transparent group-hover:border-white transition-all duration-300">
                Découvrir
            </span>
        </div>
        <a href="#" className="absolute inset-0"></a>
    </div>
);


const CategoryGrid: React.FC = () => {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:h-[80vh]">
                    <CategoryCard category={categories[0]} />
                    <CategoryCard category={categories[2]} />
                    <CategoryCard category={categories[3]} />
                    <CategoryCard category={categories[1]} />
                </div>
            </div>
        </section>
    );
};

export default CategoryGrid;
