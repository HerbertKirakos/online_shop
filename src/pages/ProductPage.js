import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MoonLoader } from "react-spinners";

import { MainLayout } from "../layouts"
import { Quantity } from "../components/Quantity";
import { Subscription } from "../components/Subscription";

import { setCartItems } from '../store/cartSlice';
import { API } from "../API";
import {priceHelper} from '../helpers/utils';


export const ProductPage = () => {
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const [productDetails, setProductDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(1);

    useEffect(() => {
        setLoading(true);
        API.get(`products/detail`, {
            params: {productId: params.id, preferedSku: '2210607'},
        }).then(function (response) {
            setProductDetails(response.data);
            setLoading(false);
        })
        .catch(function (error) {
            setLoading(false);
        });
    }, []);


    const handleAddToCart = () => {
        dispatch(setCartItems([
            ...cartItems, 
            { 
                id: params.id, 
                image: productDetails?.currentSku.alternateImages[0].image450,
                name: productDetails?.displayName,  
                count: count, 
                pcsPrice: priceHelper(productDetails?.currentSku.listPrice),
            }
        ]));
        navigate('/cart')
    }


    return (
        <MainLayout>
            <div className="max-w-screen-xl mx-auto mt-16 sm:flex sm:justify-between sm:mb-28 px-4">
                <h3 className="text-[26px] text-black font-medium mb-8 sm:hidden">
                    {productDetails?.displayName}
                </h3>

                <div className="flex flex-col items-center">
                    {loading ? (
                        <MoonLoader color="#56B280" />
                    ) : (
                        <img src={productDetails?.currentSku?.alternateImages[0]?.image450} className="mb-4 sm:max-w-[540px]"/>
                    )}
                    
                    <div className=" sm:flex sm:flex-col sm:items-center hidden ">
                        <h4 className="text-2xl text-black font-medium text-center max-w-[540px] mb-6">
                            All hand-made with natural soy wax, Candleaf is made for your pleasure moments. 
                        </h4>
                        <span className="text-xl text-green font-medium ">
                            🚚 FREE SHIPPING
                        </span>
                    </div>
                </div>

                <div className="flex flex-col">
                    <h3 className="text-[26px] text-black font-medium mb-8 hidden sm:flex">
                        {productDetails?.displayName}
                    </h3>

                    <div className="sm:flex sm:gap-28 sm:mb-16 mb-6 "> 
                        <div className="flex sm:flex-col items-center sm:items-start mb-7 sm:mb-0">
                            <span className="text-[26px] text-green sm:mb-8 mr-10 sm:mr-0">
                                {productDetails?.currentSku?.listPrice} 
                            </span>
                            <div className=" flex flex-col items-center">
                                <span className="text-lg text-black font-normal text-center mb-2">
                                    Quantity {count}
                                </span>
                                <Quantity value={count} setValue={setCount} />
                            </div>
                        </div>

                        <div>
                            <Subscription/>
                        </div>
                    </div>

                    <div className="flex sm:justify-end sm:mb-10 mb-6 justify-center">
                        <button 
                            onClick={handleAddToCart} 
                            className="bg-green max-w-[360px] sm:px-24 px-16 py-2 text-white text-xl text-center font-medium rounded-md max-h-[44px] border border-green hover:bg-white hover:text-green duration-300"
                        >
                            + Add to cart
                        </button>
                    </div>
                    
                    <div className="px-5 py-5 border rounded-md border-gray flex flex-col mb-9 sm:mb-0">
                        <span>
                            Wax: Top grade Soy wax that delivers a smoke less,  consistent burn
                        </span>
                        <span>
                            Fragrance: Premium quality ingredients with natural essential oils 
                        </span>
                        <span>
                            Burning Time: 70-75 hours
                        </span>
                    </div>
                </div>

                <div className=" flex flex-col items-center sm:hidden mb-16">
                    <h4 className="text-2xl text-black font-medium text-center max-w-[540px] mb-6">
                        All hand-made with natural soy wax, Candleaf is made for your pleasure moments. 
                    </h4>
                    <span className="text-xl text-green font-medium ">
                        🚚 FREE SHIPPING
                    </span>
                </div>
            </div>
        </MainLayout>
    )
}