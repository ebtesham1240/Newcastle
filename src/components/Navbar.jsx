import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src="https://i.ibb.co/1YzSWyHL/205492789-vector-black-castle-icon-logo-vector-illustration-isolated-on-white-background-removebg-pr.png"
            alt="Newcastle Logo"
            className="h-8 w-8 object-contain"
          />
          <span className="text-xl font-bold">Newcastle</span>
        </div>
        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'underline' : 'hover:underline'
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'underline' : 'hover:underline'
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
