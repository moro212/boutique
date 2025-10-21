
import React, { useState } from 'react';
import { getStyleAdvice } from '../services/geminiService';
import { SparklesIcon, XIcon } from './icons/Icons';

const StyleAdvisor: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [prompt, setPrompt] = useState('');
    const [advice, setAdvice] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGetAdvice = async () => {
        if (!prompt.trim()) {
            setError('Veuillez décrire une occasion ou un style.');
            return;
        }
        setIsLoading(true);
        setError('');
        setAdvice('');
        try {
            const result = await getStyleAdvice(prompt);
            setAdvice(result);
        } catch (e) {
            setError('Une erreur est survenue. Veuillez réessayer.');
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    };

    const formattedAdvice = advice.split('\n').map((line, index) => {
        if (line.startsWith('**') && line.endsWith('**')) {
            // Fix: Replaced `replaceAll` with `replace` and a global regex for better compatibility.
            return <h3 key={index} className="text-lg font-bold mt-4 mb-2 text-gray-800">{line.replace(/\*\*/g, '')}</h3>;
        }
        if (line.trim() === '') return null;
        return <p key={index} className="text-gray-600 mb-2">{line}</p>;
    }).filter(Boolean);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-300 z-50 flex items-center space-x-2"
                aria-label="Open AI Style Advisor"
            >
                <SparklesIcon />
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col">
                        <div className="flex justify-between items-center p-4 border-b">
                            <h2 className="text-xl font-bold flex items-center">
                                <SparklesIcon className="mr-2 text-yellow-500" />
                                Conseiller de Style IA
                            </h2>
                            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-800">
                                <XIcon />
                            </button>
                        </div>

                        <div className="p-6 overflow-y-auto">
                            <p className="text-gray-600 mb-4">Décrivez l'occasion ou le style que vous recherchez, et notre IA vous proposera des tenues.</p>
                            <textarea
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                placeholder="Ex: 'Un dîner de famille élégant' ou 'un look de jour confortable et chic'"
                                className="w-full p-2 border rounded-md h-24 resize-none focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                                disabled={isLoading}
                            />
                            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                            <button
                                onClick={handleGetAdvice}
                                disabled={isLoading}
                                className="w-full mt-4 bg-black text-white font-bold py-3 px-6 uppercase tracking-wider hover:bg-gray-800 disabled:bg-gray-400 transition-colors duration-300 flex items-center justify-center"
                            >
                                {isLoading ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Génération en cours...
                                    </>
                                ) : 'Obtenir des conseils'}
                            </button>
                        </div>
                        
                        {advice && (
                             <div className="p-6 border-t bg-gray-50 overflow-y-auto">
                                <h3 className="font-bold text-lg mb-2">Voici nos suggestions :</h3>
                                <div className="prose max-w-none">
                                    {formattedAdvice}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};


export default StyleAdvisor;