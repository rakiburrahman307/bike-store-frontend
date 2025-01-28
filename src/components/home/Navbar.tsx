import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LogIn, Menu, ShoppingCart, X } from "lucide-react";
import ToggleButton from "../utils/ToggleButton";
import { Toggle } from "../ui/toggle";
import CustomTooltip from "../utils/Tooltip";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Bikes", href: "/bikes" },
    { name: "Orders", href: "/orders" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className='sticky top-0 z-50 w-full md:border-b bg-background/95 backdrop:blur py-2 supports-[backdrop-filter]:bg-background/60'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link to='/' className='text-2xl font-bold'>
            Bike Shop
          </Link>

          {/* Desktop Links */}
          <div className='hidden md:flex space-x-6'>
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `hover:text-gray-400 ${
                    isActive ? "text-blue-500 font-semibold" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Icons */}
          <div className='hidden md:flex gap-5'>
            <ToggleButton />

            <CustomTooltip text='Cart'>
              <ShoppingCart className='hover:text-gray-400 cursor-pointer' />
            </CustomTooltip>
            <CustomTooltip text='Login'>
              <LogIn className='hover:text-gray-400 cursor-pointer' />
            </CustomTooltip>
          </div>

          {/* Mobile Menu Button */}
          <Toggle
            variant='outline'
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden p-4 rounded-md outline-none border-none shadow-none'
          >
            {isOpen ? <X size={35} /> : <Menu size={35} />}
          </Toggle>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-background/95 backdrop:blur transform transition-all duration-300 supports-[backdrop-filter]:bg-background/60 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        {links.map((link, index) => (
          <NavLink
            key={link.name}
            to={link.href}
            className={({ isActive }) =>
              `block px-4 py-2 text-sm transition-all duration-500 hover:bg-red-500 ${
                isOpen ? `delay-${index * 100}` : "delay-0"
              } ${
                isActive
                  ? "text-blue-500 font-semibold"
                  : "hover:text-white hover:bg-gray-700"
              }`
            }
            style={{
              transform: isOpen ? "translateY(0)" : "translateY(-10px)",
              opacity: isOpen ? 1 : 0,
            }}
          >
            {link.name}
          </NavLink>
        ))}
        <div
          className='flex gap-5 px-4 py-2 transition-all duration-300'
          style={{
            transform: isOpen ? "translateY(0)" : "translateY(-10px)",
            opacity: isOpen ? 1 : 0,
            transitionDelay: `${links.length * 100}ms`,
          }}
        >
          <CustomTooltip text='Cart'>
            <ShoppingCart className='hover:text-gray-400 cursor-pointer' />
          </CustomTooltip>
          <CustomTooltip text='Login'>
            <LogIn className='hover:text-gray-400 cursor-pointer' />
          </CustomTooltip>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
