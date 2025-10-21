
import React from 'react';
import { FacebookIcon, InstagramIcon, PinterestIcon, VisaIcon, MastercardIcon, PaypalIcon } from './icons/Icons';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Service Client</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><a href="#" className="hover:text-white">Contactez-nous</a></li>
                            <li><a href="#" className="hover:text-white">Suivi de commande</a></li>
                            <li><a href="#" className="hover:text-white">Retours & Échanges</a></li>
                            <li><a href="#" className="hover:text-white">FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">À Propos</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><a href="#" className="hover:text-white">Notre histoire</a></li>
                            <li><a href="#" className="hover:text-white">Nos boutiques</a></li>
                            <li><a href="#" className="hover:text-white">Carrières</a></li>
                            <li><a href="#" className="hover:text-white">Presse</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Informations</h3>
                         <ul className="space-y-2 text-sm text-gray-300">
                            <li><a href="#" className="hover:text-white">Mentions légales</a></li>
                            <li><a href="#" className="hover:text-white">Confidentialité</a></li>
                            <li><a href="#" className="hover:text-white">Conditions de vente</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Newsletter</h3>
                        <p className="text-sm text-gray-300 mb-4">Inscrivez-vous pour recevoir nos offres exclusives.</p>
                        <form className="flex">
                            <input type="email" placeholder="Votre email" className="bg-gray-800 text-white px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
                            <button type="submit" className="bg-yellow-400 text-black px-4 py-2 font-bold uppercase">OK</button>
                        </form>
                        <div className="flex space-x-4 mt-6">
                            <a href="#" className="text-gray-300 hover:text-white"><FacebookIcon /></a>
                            <a href="#" className="text-gray-300 hover:text-white"><InstagramIcon /></a>
                            <a href="#" className="text-gray-300 hover:text-white"><PinterestIcon /></a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p className="text-gray-400">&copy; {new Date().getFullYear()} Diamantine. Tous droits réservés.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <VisaIcon />
                        <MastercardIcon />
                        <PaypalIcon />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
