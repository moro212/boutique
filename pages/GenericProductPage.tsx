import React from 'react';
import { Product } from '../types';
import { ProductCard } from '../components/ProductCard';

interface GenericProductPageProps {
    title: string;
    products: Product[];
    onProductSelect: (product: Product) => void;
}

const GenericProductPage: React.FC<GenericProductPageProps> = ({ title, products, onProductSelect }) => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-extrabold text-center mb-10 tracking-tight uppercase">{title}</h1>
            {products.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} onProductSelect={onProductSelect} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">Aucun produit à afficher pour le moment.</p>
            )}
        </div>
    );
};

export default GenericProductPage;