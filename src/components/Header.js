import { NavLink } from "react-router-dom";
import Logo from "../assets/svg/Logo.svg";
import ProfileIcon from "../assets/svg/ProfileIcon.svg";
import CartIcon from "../assets/svg/CartIcon.svg";
import MenuIcon from "../assets/svg/MenuIcon.svg";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);
    const cartItems = useSelector(state => state.cart.items);
    const ref = useRef()

    useEffect(() => {
        const checkIfClickedOutside = e => {
          
          if (isOpen && ref.current && !ref.current.contains(e.target)) {
            setIsOpen(false)
          }
        }
    
        document.addEventListener("mousedown", checkIfClickedOutside)
    
        return () => {
          
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [isOpen])
    

    return (
        <div className="border-b border-b-[#56B280] bg-white">
            <div className="py-5 px-5 max-w-screen-xl mx-auto flex justify-between items-center">
                <ul className="sm:hidden">
                    <li>
                        <button onClick={toggling} className="sm:hidden" type="button" ref={ref}>
                            <img src={MenuIcon}/>
                        </button>
                        {isOpen && ( 
                            <div  className=" max-w-[180px] bg-white rounded divide-y divide-gray-100 shadow absolute">
                                <ul className="py-1 text-sm text-gray-700 ">
                                    <li>
                                        <NavLink to="/" className="block py-2 px-4 hover:bg-gray-100">
                                            Discovery
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/" className="block py-2 px-4 hover:bg-gray-100">
                                            About
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/" className="block py-2 px-4 hover:bg-gray-100">
                                            Contact us
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                </ul>
                
                <div className="">
                    <NavLink to="/">
                        <img src={Logo} />
                    </NavLink>
                </div>
               
                <ul className="sm:flex gap-8 hidden">
                    <li>
                        <button onClick={toggling} className="text-[#272727] font-medium text-base text-center inline-flex items-center" type="button">
                            Discovery
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        {isOpen && ( 
                            <div  className=" max-w-[180px] bg-white rounded divide-y divide-gray-100 shadow absolute">
                                <ul className="py-1 text-sm text-gray-700 ">
                                    <li>
                                        <NavLink to="/" className="block py-2 px-4 hover:bg-gray-100">
                                            New season
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/" className="block py-2 px-4 hover:bg-gray-100">
                                            Most searched
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/" className="block py-2 px-4 hover:bg-gray-100">
                                            Most selled
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li>
                        <NavLink to="/" className="text-[#272727] text-base font-medium">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/"  className="text-[#272727] text-base font-medium">
                            Contact us
                        </NavLink>
                    </li>
                </ul>

                <div className="flex items-center gap-2">
                    <NavLink to="/" className="hover:bg-[#56B28020] hover:rounded-full px-1 py-1">
                        <img src={ProfileIcon}/>
                    </NavLink>
                        
                    <NavLink to="/cart" className="hover:bg-[#56B28020] hover:rounded-full px-1 py-1 relative">
                        <div className="bg-green-200 px-0.5 py-0.5 rounded-full text-center absolute -top-2 -right-3 w-7">
                            <span className="text-xs text-center font-semibold text-green-800">
                                {cartItems.length}
                            </span>
                        </div>
                       
                        <img src={CartIcon}/>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}