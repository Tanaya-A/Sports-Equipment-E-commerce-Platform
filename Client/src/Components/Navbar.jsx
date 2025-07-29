import { useEffect, useContext, useState } from "react";
import { MdOutlineMenuOpen } from "react-icons/md";
import { AuthContext } from "../Auth/AuthProvider";
import { Link, NavLink } from "react-router";
import { themeChange } from "theme-change";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    themeChange(false); // Initializes the theme controller
  }, []);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Products", path: "/all-products" },

    { name: "Add Equipment", path: "/add-equipment", authRequired: true },
    { name: "My Equipment List", path: "/my-equipment", authRequired: true },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  return (
    <div className="navbar fixed justify-between md:justify-center top-0 left-0 right-0 z-50 shadow bg-base-100 dark:text-white">
      {/* Logo and Mobile Menu */}
      <div className="md:navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <MdOutlineMenuOpen />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow dark:text-white left-0 ml-4"
            role="menu"
          >
            {navLinks.map(
              (link) =>
                (!link.authRequired || user) && (
                  <li key={link.name} role="menuitem">
                    <NavLink to={link.path} className="capitalize hover:bg-[#0FABCA] hover:text-white transition-all duration-200">
                      {link.name}
                    </NavLink>
                  </li>
                )
            )}
          </ul>
        </div>
        <Link to="/" className="text-xl md:text-2xl font-medium text-red-600">
          Bd<span className="text-green-500">Sports</span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal text-primary px-1">
          {navLinks.map(
            (link) =>
              (!link.authRequired || user) && (
                <li key={link.name}>
                  <NavLink to={link.path} className="capitalize hover:bg-[#0FABCA] hover:text-white transition-all duration-200">
                    {link.name}
                  </NavLink>
                </li>
              )
          )}
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-4">
        <input
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller"
          onChange={(e) => {
            const isChecked = e.target.checked;
            if (isChecked) {
              document.documentElement.classList.add("dark");
            } else {
              document.documentElement.classList.remove("dark");
            }
          }}
        />
        {user && user.email ? (
          <div className="flex items-center gap-4">
            <img
              src={user.photoURL || "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"}
              alt={user.displayName || "User"}
              title={user.displayName}
              className="w-10 h-10 rounded-full cursor-pointer border-2 border-gray-300"
            />
            <button
              onClick={handleLogout}
              className="btn bg-[#403F3F] text-white hover:bg-[#2c2b2b] transition"
              disabled={isLoggingOut}
            >
              {isLoggingOut ? "Logging out..." : "Logout"}
            </button>
          </div>
        ) : (
          <>
            <Link
              to="/login"
              className="btn bg-[#403F3F] text-white hover:bg-[#2c2b2b] transition"
            >
              Login
            </Link>
            <Link
              to="/registration"
              className="btn bg-[#403F3F] text-white hover:bg-[#2c2b2b] transition hidden md:flex"
            >
              Registration
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
