import React from 'react';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import ProductCarousel from '../components/ProductCarousel';
import PromoBanner from '../components/PromoBanner';
import ShopTheLook from '../components/ShopTheLook';
import { Product } from '../types';

interface HomePageProps {
    newArrivals: Product[];
    bestSellers: Product[];
    onProductSelect: (product: Product) => void;
}

const HomePage: React.FC<HomePageProps> = ({ newArrivals, bestSellers, onProductSelect }) => {
    return (
        <>
            <Hero />
            <CategoryGrid />
            <ProductCarousel title="Nouveautés" products={newArrivals} onProductSelect={onProductSelect} />
            <PromoBanner />
            <ProductCarousel title="Best Sellers" products={bestSellers} onProductSelect={onProductSelect} />
            <ShopTheLook />
        </>
    );
};

export default HomePage;