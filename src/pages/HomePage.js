import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import { API } from "../API";
import { ProductCard } from "../components/ProductCard";
import { MainLayout } from "../layouts"

import Image2 from "../assets/images/Image2.png";
import Avatar from "../assets/images/Avatar.png";
import Avatar2 from "../assets/images/Avatar2.png";
import Avatar3 from "../assets/images/Avatar3.png";
import Checkmark from "../assets/svg/Checkmark.svg";
import Stars from "../assets/svg/Stars.svg";
import { MoonLoader } from "react-spinners";


export const HomePage = () => {
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
     
    useEffect(() => {
        setLoading(true); 
        API.get("products/list", {
            params: {
                categoryId: 'cat150006',
            }
        }).then(function (response) {
                setProducts(response.data.products);
                setLoading(false);
            })
            .catch(function (error) {
                setLoading(false);
            });
    }, []);
    

    return (
        <MainLayout>
            <div className="sm:bg-background bg-MbBackground bg-cover bg-center sm:mb-28 mb-12 py-32 px-4">
                <div className="sm:px-24 px-3 py-10 bg-[#F7F8FA80] flex flex-col items-center backdrop-blur-sm rounded-md max-w-[730px] mx-auto ">
                    <span className="text-center text-4xl text-[#1D252C]">
                    🌱 <br/> The nature candle
                    </span>
                    <p className="text-[#1D252C] text-lg font-normal max-w-[538px] text-center mb-11">
                        All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments 
                    </p>
                    <NavLink to="/all-products" className="bg-[#56B280] sm:px-11 px-7 py-2 text-white text-xl whitespace-nowrap text-center font-medium rounded-md max-h-[44px] border border-[#56B280] hover:bg-white hover:text-[#56B280] duration-300">
                        Discovery our collection
                    </NavLink>
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto sm:mb-32 mb-16 px-4 flex flex-col items-center">
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-[40px] text-center font-medium text-[#0B254B] ">
                        Products
                    </h2>
                    <span className="text-lg text-center font-medium text-[#5E6E89]">
                        Order it for you or for your beloved ones 
                    </span>
                </div>

                {loading ? (
                        <MoonLoader color="#56B280" />
                    ) : (
                        <div className="w-full flex sm:mb-16 mb-14 flex-wrap gap-8 justify-between ">
                        {
                            products.length > 0 && 
                            products.slice(5, 13).map((product, i) => (
                                <NavLink to={`product/${product.productId}`} key={`item-${i}`}>
                                    <ProductCard product={product} />
                                </NavLink>
                            ))
                        }
                        </div>
                    )
                }
                
                <NavLink to="/all-products" className="bg-[#56B280] px-11 py-2 text-white text-xl  text-center font-medium rounded-md max-h-[44px] border border-[#56B280] hover:bg-white hover:text-[#56B280] duration-300">
                    See more
                </NavLink>
            </div>

            <div className="bg-[#F7F8FA] py-32 px-4">
                <div className="max-w-screen-xl mx-auto sm:flex sm:justify-between items-center sm:items-start ">
                    <div className=" flex flex-col items-center sm:items-start mb-10 sm:mb-0">
                        <div className="mb-9 flex flex-col items-center sm:items-start ">
                            <h2 className="text-[#1D252C] text-[40px] text-center sm:text-left font-medium max-w-[380px] mb-6">
                                Clean and fragrant soy wax
                            </h2>
                            <span className="text-[#56B280] text-base  text-center font-normal ">
                                Made for your home and for your wellness
                            </span>
                        </div>

                        <div className="mb-16 flex flex-col gap-2">
                            <div className="flex gap-2">
                                <img src={Checkmark}/>
                                <span>
                                    Eco-sustainable:All recyclable materials, 0% CO2 emissions
                                </span>
                            </div>
                            <div className="flex gap-2">
                                <img src={Checkmark}/>
                                <span>
                                    Hyphoallergenic: 100% natural, human friendly ingredients 
                                </span>
                            </div>
                            <div className="flex gap-2">
                                <img src={Checkmark}/>
                                <span>
                                    Handmade: All candles are craftly made with love.
                                </span>
                            </div>
                            <div className="flex gap-2">
                                <img src={Checkmark}/>
                                <span>
                                    Long burning: No more waste. Created for last long.
                                </span>
                            </div>
                        </div>
                        <NavLink to="/" className="bg-[#56B280] px-11 py-2 text-white text-xl max-h-[44px] font-medium rounded-md  border border-[#56B280] hover:bg-white hover:text-[#56B280]  duration-300 ">
                            Learn more
                        </NavLink>
                    </div>
                    
                    <div className="drop-shadow-xl bg-white sm:mt-20">
                        <img src={Image2}/>
                    </div>
                </div>
            </div>

            <div className="bg-[#56B28020] py-24 mb-24 px-4">
                <div className="max-w-screen-xl mx-auto ">
                    <div className="flex flex-col items-center mb-16">
                        <h2 className="text-[40px] text-center font-medium text-[#0B254B] ">
                            Testimonials
                        </h2>
                        <span className="text-lg text-center font-medium text-[#5E6E89]">
                            Some quotes from our happy customers 
                        </span>
                    </div>
                    
                    <div className="flex sm:justify-between sm:overflow-hidden overflow-x-scroll gap-6 py-6">
                        <div className="flex flex-col items-center p-7 rounded-md  bg-white sm:max-w-[350px] min-w-full sm:min-w-0  drop-shadow-md">
                            <img src={Avatar} className="mb-3" />
                            <img src={Stars} className="mb-5" />
                            
                            <h4 className="text-2xl text-[#1D293F] font-medium text-center mb-2 max-w-[294px]">
                                “I love it! No more air fresheners”
                            </h4>
                            <span className="text-lg text-[#7C8087] font-medium text-center" >
                                Luisa
                            </span>
                        </div>
                        <div className=" flex flex-col items-center p-7 rounded-md  bg-white sm:max-w-[350px] min-w-full sm:min-w-0 drop-shadow-md">
                            <img src={Avatar2} className="mb-3" />
                            <img src={Stars} className="mb-5" />
                            
                            <h4 className="text-2xl text-[#1D293F] font-medium text-center mb-2 max-w-[294px]">
                                “Raccomended for everyone”
                            </h4>
                            <span className="text-lg text-[#7C8087] font-medium text-center" >
                                Edoardo
                            </span>
                        </div>
                        <div className=" flex flex-col items-center p-7 rounded-md  bg-white sm:max-w-[350px] min-w-full sm:min-w-0 drop-shadow-md">
                            <img src={Avatar3} className="mb-3" />
                            <img src={Stars} className="mb-5" />
                            
                            <h4 className="text-2xl text-[#1D293F] font-medium text-center mb-2 max-w-[294px]">
                                “Looks very natural, the smell is awesome”
                            </h4>
                            <span className="text-lg text-[#7C8087] font-medium text-center" >
                                Mart
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto mb-32 px-4 flex flex-col items-center">
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-[40px] text-center font-medium text-[#0B254B] ">
                        Products
                    </h2>
                    <span className="text-lg text-center font-medium text-[#5E6E89]">
                        Order it for you or for your beloved ones 
                    </span>
                </div>

                {loading ? (
                        <MoonLoader color="#56B280" />
                    ) : (
                        <div className="w-full flex sm:mb-16 mb-14 flex-wrap gap-8 justify-between">
                        {
                            products.length > 0 && 
                            products.slice(13, 17).map((product, i) => (
                                <NavLink to={`product/${product.productId}`} key={`item-${i}`}>
                                    <ProductCard product={product} />
                                </NavLink>
                            ))
                        }
                        </div>
                    )
                }
            </div>
        </MainLayout>
    )
}