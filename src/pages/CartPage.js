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
                    <h3 className="text-[26px] text-[#272727] mb-6 font-medium">
                        Your cart items
                    </h3>
                    <ul>
                        <li>
                            <NavLink to="/" className="text-lg font-normal text-[#56B280] border-b border-[#56B280]">
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
                            <span className="text-xl font-medium text-[#272727]">
                                Sub-total
                            </span>
                                
                            <span className="text-xl font-medium text-[#272727] text-center">
                                $  {(total).toFixed(1)}
                            </span>
                        </div>
                
                        <span className="text-base text-center font-normal text-[#9E9E9E] mb-9 sm:mb-0">
                            Tax and shipping cost will be calculated later
                        </span>
                    </div>
                    <div className="flex justify-center">
                        <NavLink to="/authentication" className="bg-[#56B280] px-11 py-2 text-white text-xl text-center max-h-[44px] sm:max-w-[180px] w-full  whitespace-nowrap font-medium rounded-md  border border-[#56B280] hover:bg-white hover:text-[#56B280]  duration-300 ">
                            Check-out
                        </NavLink>
                    </div>
                </div> 
            </div>
        </MainLayout>
    );
}