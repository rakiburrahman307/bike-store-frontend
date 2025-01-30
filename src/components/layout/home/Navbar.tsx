import { Link, NavLink } from "react-router-dom";
import { LogIn, ShoppingCart } from "lucide-react";
import ToggleButton from "../../utils/ToggleButton";

import CustomTooltip from "../../utils/Tooltip";
import { TLink } from "../../interface";
import MobileMenu from "./MobileMenu";
import { useAppSelector } from "../../../redux/hooks/hooks";
import { currentUser } from "../../../redux/feature/auth/authSlice";
import UserAvatar from "./UserAvatar";

const Navbar = () => {
  const user = useAppSelector(currentUser);
  const links: TLink[] = [
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

            {user ? (
              <UserAvatar />
            ) : (
              <Link to='/login'>
                <CustomTooltip text='Login'>
                  <LogIn className='hover:text-gray-400 cursor-pointer' />
                </CustomTooltip>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className='flex gap-8 md:hidden'>
            <ToggleButton />
            <MobileMenu links={links} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
