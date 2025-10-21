import React from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface ProductCarouselProps {
    title: string;
    products: Product[];
    onProductSelect: (product: Product) => void;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ title, products, onProductSelect }) => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
                <div className="flex overflow-x-auto space-x-4 pb-4 -mx-4 px-4">
                    {products.map(product => (
                        <div key={product.id} className="flex-shrink-0 w-64 md:w-72">
                             <ProductCard product={product} onProductSelect={onProductSelect} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCarousel;