import React from "react";

const Home = () => {
    return (
        <main className="container mx-auto px-4 py-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Welcome to Newcastle</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Discover your dream property in Bangladesh with our premium real estate services
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-yellow-500 mb-4">
                        <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </div>
                    <h2 className="text-xl font-semibold mb-2 text-center">Buy Property</h2>
                    <p className="text-gray-600 text-center">
                        Find your perfect home from our extensive collection of properties.
                    </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-yellow-500 mb-4">
                        <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h2 className="text-xl font-semibold mb-2 text-center">Sell Property</h2>
                    <p className="text-gray-600 text-center">
                        Get the best value for your property with our professional services.
                    </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-yellow-500 mb-4">
                        <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    </div>
                    <h2 className="text-xl font-semibold mb-2 text-center">Rent Property</h2>
                    <p className="text-gray-600 text-center">
                        Discover quality rental properties with flexible terms.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Home;