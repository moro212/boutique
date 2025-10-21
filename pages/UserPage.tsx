import React, { useState } from 'react';

const UserPage: React.FC = () => {
    const [isLoginView, setIsLoginView] = useState(true);

    const LoginForm: React.FC = () => (
        <>
            <h1 className="text-3xl font-extrabold text-center mb-6 tracking-tight uppercase">Mon Compte</h1>
            <form className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Adresse email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="password"className="block text-sm font-medium text-gray-700">
                        Mot de passe
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        autoComplete="current-password"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded" />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                            Se souvenir de moi
                        </label>
                    </div>
                    <div className="text-sm">
                        <a href="#" className="font-medium text-yellow-600 hover:text-yellow-500">
                            Mot de passe oublié ?
                        </a>
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 transition uppercase tracking-wider"
                    >
                        Se connecter
                    </button>
                </div>
            </form>
            <div className="mt-6">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Nouveau client ?</span>
                    </div>
                </div>
                <button
                    type="button"
                    onClick={() => setIsLoginView(false)}
                    className="w-full mt-6 flex justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition uppercase tracking-wider"
                >
                    Créer un compte
                </button>
            </div>
        </>
    );

    const RegisterForm: React.FC = () => (
         <>
            <h1 className="text-3xl font-extrabold text-center mb-6 tracking-tight uppercase">Créer un compte</h1>
            <form className="space-y-6">
                 <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                        Prénom
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        autoComplete="given-name"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    />
                </div>
                 <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                        Nom
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        autoComplete="family-name"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="email-register" className="block text-sm font-medium text-gray-700">
                        Adresse email
                    </label>
                    <input
                        type="email"
                        id="email-register"
                        name="email"
                        autoComplete="email"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="password-register" className="block text-sm font-medium text-gray-700">
                        Mot de passe
                    </label>
                    <input
                        type="password"
                        id="password-register"
                        name="password"
                        autoComplete="new-password"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    />
                </div>
                
                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 transition uppercase tracking-wider"
                    >
                        Créer mon compte
                    </button>
                </div>
            </form>
            <div className="mt-6">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Déjà un compte ?</span>
                    </div>
                </div>
                <button
                    type="button"
                    onClick={() => setIsLoginView(true)}
                    className="w-full mt-6 flex justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition uppercase tracking-wider"
                >
                    Se connecter
                </button>
            </div>
        </>
    );

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 flex items-center justify-center min-h-[60vh]">
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
                {isLoginView ? <LoginForm /> : <RegisterForm />}
            </div>
        </div>
    );
};

export default UserPage;
