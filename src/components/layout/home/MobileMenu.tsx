import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, LogIn, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../../ui/sheet";
import CustomTooltip from "../../utils/Tooltip";
import { TLink } from "../../interface";
import { useAppSelector } from "../../../redux/hooks/hooks";
import { currentUser } from "../../../redux/feature/auth/authSlice";
import UserAvatar from "./UserAvatar";
type MobileMenuProps = {
  links: TLink[];
};
const MobileMenu = ({ links }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useAppSelector(currentUser);
  return (
    <div className='md:hidden'>
      {/* Mobile Menu Button */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          {isOpen ? <X size={35} /> : <Menu size={35} />}
        </SheetTrigger>

        {/* Sheet Content for Mobile Menu */}
        <SheetContent
          side='right'
          className='w-3/4 bg-background/95 backdrop-blur'
        >
          <SheetHeader className='px-4 py-2'>
            <h2 className='text-xl font-semibold'>Menu</h2>
          </SheetHeader>

          <div className='mt-4'>
            {/* Menu Links */}
            {links.map((link, index) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `block px-4 py-3 text-sm rounded-md transition-all duration-300 hover:bg-red-500 ${
                    isActive
                      ? "text-blue-500 font-semibold"
                      : "hover:text-white"
                  }`
                }
                style={{
                  transform: isOpen ? "translateY(0)" : "translateY(-10px)",
                  opacity: isOpen ? 1 : 0,
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {link.name}
              </NavLink>
            ))}

            {/* Additional Actions */}
            <div
              className='flex gap-5 px-4 py-3 mt-4 transition-all duration-300'
              style={{
                transform: isOpen ? "translateY(0)" : "translateY(-10px)",
                opacity: isOpen ? 1 : 0,
                transitionDelay: `${links.length * 100}ms`,
              }}
            >
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
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
