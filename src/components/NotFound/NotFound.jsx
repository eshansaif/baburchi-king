import React from 'react';

const NotFound = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800 mb-8">404</h1>
                <p className="text-gray-600 text-xl mb-8">Oops! The page you're looking for doesn't exist.</p>
                <a href="/" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Go back home</a>
            </div>
        </div>
    );
};

export default NotFound;