import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-gray-900 text-white py-4 shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 flex justify-between items-center">
                
                <div className="flex items-center gap-2">
                    <img
                        src="https://i.ibb.co/1YzSWyHL/205492789-vector-black-castle-icon-logo-vector-illustration-isolated-on-white-background-removebg-pr.png"
                        alt="Newcastle Logo"
                        className="h-8 w-8 object-contain"
                    />
                    <span className="text-xl font-bold">Newcastle</span>
                </div>

                <div className="space-x-6 text-sm font-medium">
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
                        to="/contact"
                        className={({ isActive }) =>
                            isActive
                                ? "underline underline-offset-4 text-yellow-400"
                                : "hover:underline hover:text-yellow-300 transition"
                        }
                    >
                        Contact
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;