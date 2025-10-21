import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
    product: Product;
    onProductSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onProductSelect }) => (
    <div className="group relative">
        <div className="relative overflow-hidden">
            <img src={product.imageUrl} alt={product.name} className="w-full h-auto object-cover aspect-[4/5] transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
            <button 
                onClick={() => onProductSelect(product)}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 text-sm font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
            >
                Ajouter au panier
            </button>
        </div>
        <div className="p-4 text-center">
            <h3 className="text-md font-semibold text-gray-800">{product.name}</h3>
            <p className="text-gray-600 mt-1">{product.price}</p>
        </div>
    </div>
);