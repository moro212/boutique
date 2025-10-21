import React, { useState } from 'react';
import { Product } from '../types';
import { XIcon } from './icons/Icons';

interface ProductOptionsModalProps {
    product: Product;
    onClose: () => void;
    onAddToCart: (product: Product, size: string, color: string) => void;
}

const ProductOptionsModal: React.FC<ProductOptionsModalProps> = ({ product, onClose, onAddToCart }) => {
    const [selectedSize, setSelectedSize] = useState<string>(product.sizes?.[0] || '');
    const [selectedColor, setSelectedColor] = useState<string>(product.colors?.[0] || '');
    const [error, setError] = useState('');

    const handleAddToCartClick = () => {
        if (!selectedSize || !selectedColor) {
            setError('Veuillez sélectionner une taille et une couleur.');
            return;
        }
        onAddToCart(product, selectedSize, selectedColor);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-md max-h-[90vh] flex flex-col">
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-bold">{product.name}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                        <XIcon />
                    </button>
                </div>

                <div className="p-6 overflow-y-auto">
                    <img src={product.imageUrl} alt={product.name} className="w-full h-auto object-cover aspect-[4/5] rounded-md mb-4" />
                    <p className="text-lg font-semibold text-center mb-4">{product.price}</p>
                    
                    {/* Size Selector */}
                    {product.sizes && product.sizes.length > 0 && (
                        <div className="mb-4">
                            <h3 className="text-sm font-medium text-gray-900 mb-2">Taille</h3>
                            <div className="flex flex-wrap gap-2">
                                {product.sizes.map(size => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors ${selectedSize === size ? 'bg-black text-white border-black' : 'bg-white text-gray-900 border-gray-300 hover:bg-gray-50'}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Color Selector */}
                    {product.colors && product.colors.length > 0 && (
                        <div className="mb-4">
                            <h3 className="text-sm font-medium text-gray-900 mb-2">Couleur</h3>
                             <div className="flex flex-wrap gap-2">
                                {product.colors.map(color => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors ${selectedColor === color ? 'bg-black text-white border-black' : 'bg-white text-gray-900 border-gray-300 hover:bg-gray-50'}`}
                                    >
                                        {color}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                     {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                </div>

                <div className="p-6 border-t mt-auto">
                    <button
                        onClick={handleAddToCartClick}
                        className="w-full bg-black text-white font-bold py-3 px-6 uppercase tracking-wider hover:bg-gray-800 transition-colors duration-300"
                    >
                        Ajouter au panier
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductOptionsModal;