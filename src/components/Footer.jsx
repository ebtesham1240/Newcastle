import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-[#121821] text-white">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Logo and description */}
                    <div className="md:col-span-2 space-y-4">
                        <div className="flex items-center gap-2">
                            <img
                                src="https://i.ibb.co/1YzSWyHL/205492789-vector-black-castle-icon-logo-vector-illustration-isolated-on-white-background-removebg-pr.png"
                                alt="Newcastle Logo"
                                className="w-6 h-6 object-contain"
                            />
                            <h1 className="text-lg font-bold text-white">Newcastle</h1>
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            Your trusted gateway to buy, sell, and explore properties across Bangladesh.
                        </p>
                    </div>

                    {/* Quick Links (matches navbar) */}
                    <div>
                        <h3 className="text-gray-400 font-semibold mb-3 text-sm uppercase">Navigation</h3>
                        <ul className="space-y-2 text-sm text-white">
                            <li>
                                <NavLink to="/" className="hover:text-yellow-300 transition-colors">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/properties" className="hover:text-yellow-300 transition-colors">
                                    All Properties
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/coverage" className="hover:text-yellow-300 transition-colors">
                                    Coverage
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className="hover:text-yellow-300 transition-colors">
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/agent" className="hover:text-yellow-300 transition-colors">
                                    Be an Agent
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-gray-400 font-semibold mb-3 text-sm uppercase">Services</h3>
                        <ul className="space-y-2 text-sm text-white">
                            <li><a href="#" className="hover:text-yellow-300 transition-colors">Property Valuation</a></li>
                            <li><a href="#" className="hover:text-yellow-300 transition-colors">Home Staging</a></li>
                            <li><a href="#" className="hover:text-yellow-300 transition-colors">Mortgage Assistance</a></li>
                            <li><a href="#" className="hover:text-yellow-300 transition-colors">Rental Management</a></li>
                        </ul>
                    </div>

                    {/* Contact & Auth Links */}
                    <div>
                        <h3 className="text-gray-400 font-semibold mb-3 text-sm uppercase">Connect</h3>
                        <ul className="space-y-2 text-sm text-white">
                            <li className="flex items-start gap-2">
                                <svg className="w-4 h-4 mt-0.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>+880 1234 567890</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <svg className="w-4 h-4 mt-0.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>contact@newcastle.com</span>
                            </li>
                           
                            
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-6 border-t border-gray-800">
                    <p className="text-xs text-gray-400 text-center">
                        © {new Date().getFullYear()} Newcastle. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;