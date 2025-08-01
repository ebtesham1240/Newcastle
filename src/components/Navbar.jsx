import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-gray-900 text-white py-4 shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 flex justify-between items-center">
                
                {/* Logo + Brand */}
                <div className="flex items-center gap-2">
                    <img
                        src="https://i.ibb.co/1YzSWyHL/205492789-vector-black-castle-icon-logo-vector-illustration-isolated-on-white-background-removebg-pr.png"
                        alt="Newcastle Logo"
                        className="h-8 w-8 object-contain"
                    />
                    <span className="text-xl font-bold">Newcastle</span>
                </div>

                {/* Centered Navigation Links */}
                <div className="hidden md:flex space-x-6 text-sm font-medium">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive
                                ? "underline underline-offset-4 text-yellow-400"
                                : "hover:underline hover:text-yellow-300 transition"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/properties"
                        className={({ isActive }) =>
                            isActive
                                ? "underline underline-offset-4 text-yellow-400"
                                : "hover:underline hover:text-yellow-300 transition"
                        }
                    >
                        All Properties
                    </NavLink>
                    <NavLink
                        to="/coverage"
                        className={({ isActive }) =>
                            isActive
                                ? "underline underline-offset-4 text-yellow-400"
                                : "hover:underline hover:text-yellow-300 transition"
                        }
                    >
                        Coverage
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? "underline underline-offset-4 text-yellow-400"
                                : "hover:underline hover:text-yellow-300 transition"
                        }
                    >
                        About Us
                    </NavLink>
                    <NavLink
                        to="/agent"
                        className={({ isActive }) =>
                            isActive
                                ? "underline underline-offset-4 text-yellow-400"
                                : "hover:underline hover:text-yellow-300 transition"
                        }
                    >
                        Be an Agent
                    </NavLink>
                </div>

                {/* Right-side Auth Buttons */}
                <div className="flex space-x-4">
                    <NavLink
                        to="/signin"
                        className="px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-800 transition"
                    >
                        Sign In
                    </NavLink>
                    <NavLink
                        to="/signup"
                        className="px-4 py-2 text-sm font-medium bg-yellow-500 text-gray-900 rounded-md hover:bg-yellow-600 transition"
                    >
                        Sign Up
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;