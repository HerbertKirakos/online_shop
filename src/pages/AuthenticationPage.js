import {  NavLink } from "react-router-dom";
import Logo from "../assets/svg/Logo.svg";
import ProductImage2 from "../assets/images/ProductImage2.png";

export const AuthenticationPage = () => {

    return (
        <div className="sm:grid sm:grid-cols-2 px-4 sm:px-0">
            <div className="max-w-[446px] mx-auto w-full mb-28 px-4">
                <div className="py-5 px-5 sm:px-0 flex justify-between">
                        <NavLink to="/">
                            <img src={Logo} />
                        </NavLink>
                </div>
                
                <div className="mb-11">
                    <nav className="flex" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center">
                                <NavLink to="/cart" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                    Cart
                                </NavLink>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                    <NavLink to="/authentication" className="ml-1 text-sm font-medium text-[#56B280] hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                                        Details
                                    </NavLink>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                    <span className="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">
                                        Shipping
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>

                <div className="mb-10">
                    <div className="flex justify-between items-center mb-3">
                        <span className="text-xl font-medium text-[#272727]">
                            Contact
                        </span>
                        <span className="text-sm font-medium text-[#616161] text-right">
                            Do you have an account?  Login
                        </span>
                    </div>
                    <div className="mb-3">
                        <input className="px-4 py-2 w-full border border-[#56B280] outline-none text-sm text-[#616161] font-normal" placeholder="Email or mobile phone number" />
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox"  name="add" className="accent-[#3fe68d] w-4 h-4 rounded-full mr-2" />
                        <label htmlFor="add" className="text-sm text-[#272727] font-normal">Add me to Candleaf newsletter for a 10% discount</label>
                    </div>
                </div>

                <div className="flex flex-col gap-3 mb-16">
                    <span className="text-xl font-medium text-[#272727]">
                        Shipping Address
                    </span>
                    <div className="flex justify-between gap-3 flex-wrap sm:flex-nowrap">
                        <div className="w-full">
                            <input className="px-4 py-2 w-full border border-[#898989] outline-none text-sm text-[#616161] font-normal" placeholder="Name" />
                        </div>
                        <div className="w-full">
                            <input className="px-4 py-2 w-full border border-[#898989] outline-none text-sm text-[#616161] font-normal" placeholder="Second Name" />
                        </div>
                    </div>
                    <div>
                        <input className="px-4 py-2 w-full border border-[#898989] outline-none text-sm text-[#616161] font-normal" placeholder="Address and number" />
                    </div>
                    <div>
                        <input className="px-4 py-2 w-full border border-[#898989] outline-none text-sm text-[#616161] font-normal" placeholder="Shipping note (optional)" />
                    </div>
                    <div className="flex justify-between gap-3 flex-wrap sm:flex-nowrap">
                        <div className="w-full">
                            <input className="px-4 py-2 w-full border border-[#898989] outline-none text-sm text-[#616161] font-normal" placeholder="City" />
                        </div>
                        <div className="w-full">
                            <input className="px-4 py-2 w-full border border-[#898989] outline-none text-sm text-[#616161] font-normal" placeholder="Postal Code" />
                        </div>
                        <div className="w-full">
                            <input className="px-4 py-2 w-full border border-[#898989] outline-none text-sm text-[#616161] font-normal" placeholder="Province" />
                        </div>
                    </div>
                    <div>
                        <input className="px-4 py-2 w-full border border-[#898989] outline-none text-sm text-[#616161] font-normal" placeholder="Italy" />
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" name="save" className="accent-[#3fe68d] w-4 h-4 rounded-full mr-2" />
                        <label htmlFor="save" className="text-sm text-[#272727] font-normal">Save this informations for a future fast checkout</label>
                    </div>
                </div>

                <div className="sm:flex sm:flex-row-reverse sm:justify-between sm:items-center">
                    <div className="mb-6 sm:mb-0 flex justify-center">
                        <NavLink to="/shipping" className="bg-[#56B280] px-11 py-2 text-white text-xl max-h-[44px] font-medium rounded-md border border-[#56B280] hover:bg-white hover:text-[#56B280] duration-300">
                            Go to shipping
                        </NavLink>
                    </div>
                   
                    <ul className="flex justify-center">
                        <li>
                            <NavLink to="/cart" className="text-lg font-normal text-[#56B280] border-b border-[#56B280]">
                                Back to cart
                            </NavLink>
                        </li>
                    </ul>
                </div> 
            </div>
            

            <div className="bg-[#F2F2F2] pt-16 px-16 hidden sm:block">
                <div className="flex flex-col max-w-[600px]">
                    <div className="flex w-full mb-12 gap-14"> 
                        <img src={ProductImage2} className="max-w-[160px]"/>
                        <div>
                            <h5 className="text-base text-[#272727] mb-5 font-medium">
                                Spiced Mint Candleaf®
                            </h5>
                            <span className="text-xl text-[#56B280] font-semibold">
                                $ 9.99
                            </span>
                        </div>
                    </div>
                    <div className="border-b border-[#56B28020] mb-7"/>
                    <div className="flex items-center mb-7 gap-2">
                        <div className="w-full">
                            <input className="px-4 py-2 w-full border border-[#898989] outline-none max-w-[400px] text-sm text-[#616161] font-normal" placeholder="Coupon code" />
                        </div>
                        <button className="bg-[#A8A8A8] px-5 py-2 text-white text-xl max-h-[44px] font-medium whitespace-nowrap rounded-md border border-[#A8A8A8] hover:bg-white hover:text-[#A8A8A8]  duration-300">
                            Add code
                        </button>
                    </div>
                    <div className="border-b border-[#56B28020] mb-6" />
                    <div className="flex justify-between mb-3">
                        <span className="text-sm text-[#616161] font-bold">
                            Subtotal
                        </span>
                        <span className="text-sm text-[#272727] font-bold">
                            $  9.99
                        </span>
                    </div>
                    <div className="flex justify-between mb-8">
                        <span className="text-sm text-[#616161] font-bold">
                            Shipping
                        </span>
                        <span className="text-sm text-[#616161] font-bold">
                            Calculated at the next step
                        </span>
                    </div>
                    <div className="border-b border-[#56B28020] mb-6"/>
                    <div className="flex justify-between mb-8">
                        <span className="text-sm text-[#616161] font-bold">
                            Total
                        </span>
                        <span className="text-2xl text-[#272727] font-bold">
                            $ 9.99
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}


  
  
  