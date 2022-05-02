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
        <div className="border-b border-b-green bg-white">
            <div className="py-5 px-5 max-w-screen-xl mx-auto flex justify-between items-center">
                <ul className="sm:hidden">
                    <li>
                        <button onClick={toggling} className="sm:hidden" type="button" ref={ref}>
                            <img src={MenuIcon}/>
                        </button>
                        {isOpen && ( 
                            <div  className=" max-w-[180px] bg-white rounded divide-y divide-dark-gray shadow absolute">
                                <ul className="py-1 text-sm text-gray ">
                                    <li>
                                        <NavLink to="/" className="block py-2 px-4 hover:bg-light-gray">
                                            Discovery
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/" className="block py-2 px-4 hover:bg-light-gray">
                                            About
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/" className="block py-2 px-4 hover:bg-light-gray">
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
                        <button onClick={toggling} className="text-black font-medium text-base text-center inline-flex items-center" type="button">
                            Discovery
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        {isOpen && ( 
                            <div  className=" max-w-[180px] bg-white rounded divide-y divide-dark-gray shadow absolute">
                                <ul className="py-1 text-sm text-dark-gray ">
                                    <li>
                                        <NavLink to="/" className="block py-2 px-4 hover:bg-light-gray">
                                            New season
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/" className="block py-2 px-4 hover:bg-light-gray">
                                            Most searched
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/" className="block py-2 px-4 hover:bg-light-gray">
                                            Most selled
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li>
                        <NavLink to="/" className="text-balck text-base font-medium">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/"  className="text-balck text-base font-medium">
                            Contact us
                        </NavLink>
                    </li>
                </ul>

                <div className="flex items-center gap-2">
                    <NavLink to="/" className="hover:bg-light-green hover:rounded-full px-1 py-1">
                        <img src={ProfileIcon}/>
                    </NavLink>
                        
                    <NavLink to="/cart" className="hover:bg-light-green hover:rounded-full px-1 py-1 relative">
                        <div className="bg-green px-0.5 py-0.5 rounded-full text-center absolute -top-2 -right-3 w-7">
                            <span className="text-xs text-center font-semibold text-white">
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