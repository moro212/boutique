import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import StyleAdvisor from './components/StyleAdvisor';
import { Product, CartItem } from './types';
import HomePage from './pages/HomePage';
import GenericProductPage from './pages/GenericProductPage';
import SearchPage from './pages/SearchPage';
import UserPage from './pages/UserPage';
import CartPage from './pages/CartPage';
import ProductOptionsModal from './components/ProductOptionsModal';

// --- PRODUCT DATA ---

const defaultSizes = ['S', 'M', 'L', 'XL'];
const defaultColors = ['Noir', 'Blanc', 'Beige', 'Vert', 'Bleu', 'Rouge'];

const newArrivals: Product[] = [
    { id: 1, name: 'Caftan en Soie Brodé', price: '1999 MAD', imageUrl: 'https://images.unsplash.com/photo-1620012826352-879717a6372d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80', sizes: defaultSizes, colors: ['Or', 'Argent', 'Blanc'] },
    { id: 2, name: 'Djellaba Moderne Bicolore', price: '1499 MAD', imageUrl: 'https://images.unsplash.com/photo-1613506518116-448d33d4554b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80', sizes: defaultSizes, colors: ['Noir/Blanc', 'Bleu/Beige'] },
    { id: 3, name: 'Kmiss Léger à Motifs', price: '849 MAD', imageUrl: 'https://images.unsplash.com/photo-1617997943015-16da99b1a182?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80', sizes: defaultSizes, colors: defaultColors },
    { id: 4, name: 'Mikhwar de Soirée', price: '1699 MAD', imageUrl: 'https://images.unsplash.com/photo-1595168393031-7038e9047baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80', sizes: defaultSizes, colors: ['Rouge', 'Vert Royal', 'Noir'] },
    { id: 5, name: 'Djellaba Kmiss pour Homme', price: '1599 MAD', imageUrl: 'https://images.unsplash.com/photo-1610484729141-86687258a16c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80', sizes: defaultSizes, colors: ['Gris', 'Noir', 'Marron'] },
    { id: 6, name: 'Ensemble Caftan Enfant', price: '949 MAD', imageUrl: 'https://images.unsplash.com/photo-1617269019641-7e289b4f0b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80', sizes: ['4 ans', '6 ans', '8 ans'], colors: ['Rose', 'Bleu Ciel'] },
    { id: 7, name: 'Zif en Mousseline', price: '429 MAD', imageUrl: 'https://images.unsplash.com/photo-1588516125010-a43050130282?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80', sizes: ['Taille Unique'], colors: defaultColors },
];

const bestSellers: Product[] = [
    { id: 8, name: 'Caftan de Mariage Royal', price: '3149 MAD', imageUrl: 'https://images.unsplash.com/photo-1617196214221-36d8157e045a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80', sizes: defaultSizes, colors: ['Blanc Cassé', 'Or'] },
    { id: 9, name: 'Djellaba en Laine pour Homme', price: '1799 MAD', imageUrl: 'https://images.unsplash.com/photo-1619542037184-486de782a933?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80', sizes: defaultSizes, colors: ['Gris Anthracite', 'Marron Foncé'] },
    { id: 10, name: 'Kmiss Djellaba Quotidien', price: '1299 MAD', imageUrl: 'https://images.unsplash.com/photo-1586503915223-38f1a7a28a39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80', sizes: defaultSizes, colors: defaultColors },
    { id: 11, name: 'Mikhwar Élégant', price: '1899 MAD', imageUrl: 'https://images.unsplash.com/photo-1604018228341-9403b5a4b2ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80', sizes: defaultSizes, colors: ['Violet', 'Émeraude'] },
    { id: 12, name: 'Zif en Soie de Médine', price: '529 MAD', imageUrl: 'https://images.unsplash.com/photo-1593509494292-6d165507d353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80', sizes: ['Taille Unique'], colors: defaultColors },
];

const womanProducts: Product[] = [
    { id: 20, name: 'Caftan Fleuri Élégance', price: '2099 MAD', imageUrl: 'https://images.unsplash.com/photo-1594618790234-22b395916c02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80', sizes: defaultSizes, colors: defaultColors },
    { id: 21, name: 'Robe de Soirée Tradition', price: '2649 MAD', imageUrl: 'https://images.unsplash.com/photo-1633511082988-34f7b2f69ce8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80', sizes: defaultSizes, colors: ['Rouge', 'Noir', 'Bleu Marine'] },
    { id: 22, name: 'Ensemble Kmiss Chic', price: '1399 MAD', imageUrl: 'https://images.unsplash.com/photo-1617997943015-16da99b1a182?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80', sizes: defaultSizes, colors: defaultColors },
    { id: 23, name: 'Djellaba en Satin', price: '1699 MAD', imageUrl: 'https://images.unsplash.com/photo-1620012826352-879717a6372d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80', sizes: defaultSizes, colors: ['Rose Poudré', 'Champagne', 'Vert d\'eau'] },
    { id: 24, name: 'Mikhwar Orné de Perles', price: '1999 MAD', imageUrl: 'https://images.unsplash.com/photo-1617196214221-36d8157e045a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80', sizes: defaultSizes, colors: defaultColors },
    { id: 25, name: 'Zif en Soie Imprimé', price: '649 MAD', imageUrl: 'https://images.unsplash.com/photo-1594918451841-b333a258a14b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80', sizes: ['Taille Unique'], colors: ['Motif Floral', 'Motif Géométrique'] },
    { id: 26, name: 'Caftan Moderne Minimaliste', price: '1899 MAD', imageUrl: 'https://images.unsplash.com/photo-1586503915223-38f1a7a28a39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80', sizes: defaultSizes, colors: ['Noir', 'Blanc', 'Gris'] },
    { id: 27, name: 'Djellaba à Capuche', price: '1599 MAD', imageUrl: 'https://images.unsplash.com/photo-1613506518116-448d33d4554b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80', sizes: defaultSizes, colors: defaultColors },
];

const manProducts: Product[] = [
    { id: 30, name: 'Djellaba Homme Prestige', price: '1899 MAD', imageUrl: 'https://images.unsplash.com/photo-1610484729141-86687258a16c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80', sizes: defaultSizes, colors: ['Noir', 'Blanc', 'Gris'] },
    { id: 31, name: 'Ensemble Kmiss en Lin', price: '1399 MAD', imageUrl: 'https://images.unsplash.com/photo-1542037424-34d310a122a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80', sizes: defaultSizes, colors: ['Beige', 'Blanc', 'Bleu Ciel'] },
    { id: 32, name: 'Djellaba Kmiss Urbain', price: '1599 MAD', imageUrl: 'https://images.unsplash.com/photo-1619542037184-486de782a933?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80', sizes: defaultSizes, colors: defaultColors },
    { id: 33, name: 'Gandoura Confort', price: '1049 MAD', imageUrl: 'https://images.unsplash.com/photo-1542037424-34d310a122a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80', sizes: defaultSizes, colors: defaultColors },
    { id: 34, name: 'Qamis Moderne', price: '1299 MAD', imageUrl: 'https://images.unsplash.com/photo-1610484729141-86687258a16c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80', sizes: defaultSizes, colors: defaultColors },
    { id: 35, name: 'Djellaba Bicolore', price: '1699 MAD', imageUrl: 'https://images.unsplash.com/photo-1619542037184-486de782a933?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80', sizes: defaultSizes, colors: defaultColors },
];

const kidsProducts: Product[] = [
    { id: 40, name: 'Mini Caftan Fille Pailleté', price: '949 MAD', imageUrl: 'https://images.unsplash.com/photo-1617269019641-7e289b4f0b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80', sizes: ['4 ans', '6 ans', '8 ans'], colors: ['Rose', 'Argent'] },
    { id: 41, name: 'Djellaba Garçon Aventure', price: '849 MAD', imageUrl: 'https://images.unsplash.com/photo-1599387737838-66a1523c0b17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80', sizes: ['4 ans', '6 ans', '8 ans'], colors: ['Bleu', 'Vert'] },
    { id: 42, name: 'Ensemble Fille Tradition', price: '1049 MAD', imageUrl: 'https://images.unsplash.com/photo-1617269019641-7e289b4f0b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80', sizes: ['4 ans', '6 ans', '8 ans'], colors: defaultColors },
    { id: 43, name: 'Jabador Garçon Cérémonie', price: '1199 MAD', imageUrl: 'https://images.unsplash.com/photo-1599387737838-66a1523c0b17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80', sizes: ['4 ans', '6 ans', '8 ans'], colors: ['Blanc', 'Bleu Roi'] },
];

const outletProducts: Product[] = [
    { id: 50, name: 'Ancien Modèle Caftan Vert', price: '1049 MAD', imageUrl: 'https://images.unsplash.com/photo-1595168393031-7038e9047baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80', sizes: defaultSizes, colors: ['Vert'] },
    { id: 51, name: 'Fin de Série Djellaba Homme', price: '849 MAD', imageUrl: 'https://images.unsplash.com/photo-1610484729141-86687258a16c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80', sizes: defaultSizes, colors: ['Marron'] },
    { id: 52, name: 'Kmiss Collection Passée', price: '529 MAD', imageUrl: 'https://images.unsplash.com/photo-1617997943015-16da99b1a182?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80', sizes: defaultSizes, colors: defaultColors },
    { id: 53, name: 'Mikhwar à Prix Réduit', price: '949 MAD', imageUrl: 'https://images.unsplash.com/photo-1604018228341-9403b5a4b2ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80', sizes: defaultSizes, colors: defaultColors },
    { id: 54, name: 'Caftan de Fête Déstockage', price: '1399 MAD', imageUrl: 'https://images.unsplash.com/photo-1633511082988-34f7b2f69ce8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80', sizes: defaultSizes, colors: defaultColors },
];


const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [cart, setCart] = useState<CartItem[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const navigate = (page: string) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };
    
    const handleProductSelect = (product: Product) => {
        setSelectedProduct(product);
    };

    const addToCart = (productToAdd: Product, size: string, color: string) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => 
                item.product.id === productToAdd.id && 
                item.selectedSize === size && 
                item.selectedColor === color
            );

            if (existingItem) {
                return prevCart.map(item =>
                    item.id === existingItem.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { 
                    id: Date.now(), 
                    product: productToAdd, 
                    quantity: 1, 
                    selectedSize: size, 
                    selectedColor: color 
                }];
            }
        });
        setSelectedProduct(null); // Close modal after adding
        alert(`${productToAdd.name} a été ajouté au panier !`);
    };

    const removeFromCart = (cartItemId: number) => {
        setCart(prevCart => prevCart.filter(item => item.id !== cartItemId));
    };
    
    const updateCartQuantity = (cartItemId: number, newQuantity: number) => {
        if (newQuantity <= 0) {
            removeFromCart(cartItemId);
        } else {
            setCart(prevCart =>
                prevCart.map(item =>
                    item.id === cartItemId ? { ...item, quantity: newQuantity } : item
                )
            );
        }
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'new':
                return <GenericProductPage title="Nouveautés" products={newArrivals} onProductSelect={handleProductSelect} />;
            case 'woman':
                return <GenericProductPage title="Femme" products={womanProducts} onProductSelect={handleProductSelect} />;
            case 'man':
                return <GenericProductPage title="Homme" products={manProducts} onProductSelect={handleProductSelect} />;
            case 'kids':
                return <GenericProductPage title="Enfants" products={kidsProducts} onProductSelect={handleProductSelect} />;
            case 'outlet':
                return <GenericProductPage title="Outlet" products={outletProducts} onProductSelect={handleProductSelect} />;
            case 'search':
                return <SearchPage />;
            case 'user':
                return <UserPage />;
            case 'cart':
                return <CartPage cartItems={cart} onRemoveFromCart={removeFromCart} onUpdateQuantity={updateCartQuantity} navigate={navigate} />;
            case 'home':
            default:
                return <HomePage newArrivals={newArrivals} bestSellers={bestSellers} onProductSelect={handleProductSelect} />;
        }
    };
    
    const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="font-sans text-gray-800 flex flex-col min-h-screen">
            <Header navigate={navigate} cartItemCount={totalCartItems} />
            <main className="flex-grow">
                {renderPage()}
            </main>
            {selectedProduct && (
                <ProductOptionsModal 
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                    onAddToCart={addToCart}
                />
            )}
            <Footer />
            <StyleAdvisor />
        </div>
    );
};

export default App;