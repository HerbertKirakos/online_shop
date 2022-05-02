import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { MainLayout } from "../layouts";
import { ProductCartTable } from "../components/ProductCartTable";

export const CartPage = () => {

    const total = useSelector(state => state.cart.total);
    
    return (
        <MainLayout>
            <div className="mt-16 max-w-screen-xl mx-auto sm:mb-28 sm:px-4">
                <div className="flex flex-col items-center mb-16">
                    <h3 className="text-[26px] text-black mb-6 font-medium">
                        Your cart items
                    </h3>
                    <ul>
                        <li>
                            <NavLink to="/" className="text-lg font-normal text-green border-b border-green">
                                Back to shopping
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <ProductCartTable/>
                </div>
                <div className="sm:flex sm:justify-end gap-16 mb-28">
                    <div className="flex flex-col sm:items-end items-center">
                        <div className="flex gap-10 mb-3">
                            <span className="text-xl font-medium text-black">
                                Sub-total
                            </span>
                                
                            <span className="text-xl font-medium text-black text-center">
                                $  {(total).toFixed(1)}
                            </span>
                        </div>
                
                        <span className="text-base text-center font-normal text-gray mb-9 sm:mb-0">
                            Tax and shipping cost will be calculated later
                        </span>
                    </div>
                    <div className="flex justify-center">
                        <NavLink to="/authentication" className="bg-green px-11 py-2 text-white text-xl text-center max-h-[44px] sm:max-w-[180px] w-full whitespace-nowrap font-medium rounded-md border border-green hover:bg-white hover:text-green duration-300">
                            Check-out
                        </NavLink>
                    </div>
                </div> 
            </div>
        </MainLayout>
    );
}