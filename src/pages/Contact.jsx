import React from "react";

const Contact = () => {
    return (
        <main className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-3xl font-bold text-center my-8">Contact Newcastle</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
                    <p className="text-gray-600 mb-6">
                        Have questions about properties or our services? Reach out to our team for assistance.
                    </p>
                    
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 mt-0.5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span>+880 1234 567890</span>
                        </div>
                        
                        <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 mt-0.5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span>contact@newcastle.com</span>
                        </div>
                    </div>
                </div>
                
                <div>
                    <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input type="text" id="name" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400 focus:border-transparent" />
                        </div>
                        
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input type="email" id="email" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400 focus:border-transparent" />
                        </div>
                        
                        <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded-md transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Contact;