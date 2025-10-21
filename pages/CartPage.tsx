import React, { useState } from 'react';
import { CartItem } from '../types';
import { XIcon } from '../components/icons/Icons';

interface CartPageProps {
    cartItems: CartItem[];
    onRemoveFromCart: (cartItemId: number) => void;
    onUpdateQuantity: (cartItemId: number, newQuantity: number) => void;
    navigate: (page: string) => void;
}

const QuantitySelector: React.FC<{ item: CartItem, onUpdateQuantity: (id: number, q: number) => void }> = ({ item, onUpdateQuantity }) => (
    <div className="flex items-center border border-gray-300 rounded-md">
        <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="px-3 py-1 text-lg font-semibold text-gray-700 hover:bg-gray-100 rounded-l-md"
            aria-label="Diminuer la quantité"
        >
            -
        </button>
        <span className="px-4 py-1 text-center text-sm w-12" aria-live="polite">
            {item.quantity}
        </span>
        <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="px-3 py-1 text-lg font-semibold text-gray-700 hover:bg-gray-100 rounded-r-md"
            aria-label="Augmenter la quantité"
        >
            +
        </button>
    </div>
);


const CartPage: React.FC<CartPageProps> = ({ cartItems, onRemoveFromCart, onUpdateQuantity, navigate }) => {
    const [customerName, setCustomerName] = useState('');
    const [customerAddress, setCustomerAddress] = useState('');
    const [formError, setFormError] = useState('');

    const subtotal = cartItems.reduce((acc, item) => {
        const price = parseFloat(item.product.price.replace(' MAD', ''));
        return acc + (price * item.quantity);
    }, 0);

    const shippingThreshold = 800;
    const shippingCost = 50;
    const shipping = subtotal >= shippingThreshold || subtotal === 0 ? 0 : shippingCost;
    const total = subtotal + shipping;

    // L'adresse e-mail pour recevoir les commandes.
    const recipientEmail = 'pixelcraftmhd@gmail.com';

    const handleCheckout = () => {
        if (!customerName.trim() || !customerAddress.trim()) {
            setFormError('Veuillez remplir votre nom complet et votre adresse de livraison.');
            return;
        }
        setFormError('');

        const orderNumber = `CMD-${Date.now()}`;
        const subject = `Facture pour Commande #${orderNumber} - Diamantine`;
        
        let body = `FACTURE POUR LA COMMANDE #${orderNumber}\n\n`;
        body += `Bonjour,\n\n`;
        body += `Une nouvelle commande a été passée sur le site Diamantine.\n\n`;
        body += `--------------------------------\n`;
        body += `INFORMATIONS DE LIVRAISON\n`;
        body += `--------------------------------\n`;
        body += `Nom complet: ${customerName}\n`;
        body += `Adresse: ${customerAddress}\n\n`;
        
        body += `--------------------------------\n`;
        body += `DÉTAILS DE LA COMMANDE\n`;
        body += `--------------------------------\n\n`;

        cartItems.forEach(item => {
            body += `Article: ${item.product.name}\n`;
            body += `Numéro du produit: ${item.product.id}\n`;
            body += `Taille: ${item.selectedSize}\n`;
            body += `Couleur: ${item.selectedColor}\n`;
            body += `Quantité: ${item.quantity}\n`;
            body += `Prix: ${item.product.price}\n`;
            body += `----------------\n`;
        });

        body += `\n`;
        body += `RÉSUMÉ FINANCIER\n`;
        body += `Sous-total: ${subtotal.toFixed(2)} MAD\n`;
        body += `Livraison: ${shipping === 0 ? 'Offerte' : `${shipping.toFixed(2)} MAD`}\n`;
        body += `TOTAL À PAYER: ${total.toFixed(2)} MAD\n\n`;
        body += `Merci pour votre confiance.\n`;
        body += `L'équipe Diamantine`;

        const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        window.location.href = mailtoLink;
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-extrabold text-center mb-10 tracking-tight uppercase">Votre Panier</h1>
            
            {cartItems.length === 0 ? (
                <div className="text-center py-16">
                    <p className="text-xl text-gray-600 mb-6">Votre panier est actuellement vide.</p>
                    <button
                        onClick={() => navigate('home')}
                        className="bg-black text-white font-bold py-3 px-8 uppercase tracking-wider hover:bg-gray-800 transition duration-300"
                    >
                        Continuer vos achats
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    <div className="lg:col-span-2">
                         <ul role="list" className="divide-y divide-gray-200">
                            {cartItems.map((item) => (
                                <li key={item.id} className="flex py-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img
                                            src={item.product.imageUrl}
                                            alt={item.product.name}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <h3>{item.product.name}</h3>
                                                <p className="ml-4">{item.product.price}</p>
                                            </div>
                                            <p className="mt-1 text-sm text-gray-500">
                                                {item.selectedColor} / {item.selectedSize}
                                            </p>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm">
                                            <QuantitySelector item={item} onUpdateQuantity={onUpdateQuantity} />
                                            <div className="flex">
                                                <button
                                                    type="button"
                                                    onClick={() => onRemoveFromCart(item.id)}
                                                    className="font-medium text-red-600 hover:text-red-500 flex items-center"
                                                >
                                                    <XIcon/> Supprimer
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                         <div className="mt-10">
                            <h2 className="text-lg font-medium text-gray-900 mb-4">Informations de livraison</h2>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="customer-name" className="block text-sm font-medium text-gray-700">Nom complet</label>
                                    <input type="text" id="customer-name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm" />
                                </div>
                                <div>
                                    <label htmlFor="customer-address" className="block text-sm font-medium text-gray-700">Adresse de livraison complète</label>
                                    <textarea id="customer-address" value={customerAddress} onChange={(e) => setCustomerAddress(e.target.value)} rows={3} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm" />
                                </div>
                                {formError && <p className="text-red-500 text-sm">{formError}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm sticky top-24">
                            <h2 className="text-lg font-medium text-gray-900 mb-4">Résumé de la commande</h2>
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Sous-total</span>
                                    <span>{subtotal.toFixed(2)} MAD</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Livraison</span>
                                    <span>{shipping === 0 ? 'Offerte' : `${shipping.toFixed(2)} MAD`}</span>
                                </div>
                                {subtotal > 0 && subtotal < shippingThreshold && (
                                     <p className="text-xs text-green-600 text-right">
                                        Encore {(shippingThreshold - subtotal).toFixed(2)} MAD pour la livraison gratuite!
                                    </p>
                                )}
                                <div className="flex justify-between text-base font-medium text-gray-900 pt-4 border-t border-gray-200 mt-2">
                                    <span>Total</span>
                                    <span>{total.toFixed(2)} MAD</span>
                                </div>
                            </div>
                            <button 
                                onClick={handleCheckout}
                                className="w-full mt-6 bg-black text-white font-bold py-3 px-6 uppercase tracking-wider hover:bg-gray-800 transition duration-300"
                            >
                                Procéder au paiement
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;