import { NavLink, } from "react-router-dom";
import { useEffect, useState } from "react";

import { MainLayout } from "../layouts"

import { API } from "../API";
import { ProductCard } from "../components/ProductCard";
import { MoonLoader } from "react-spinners";


export const AllProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        API.get("products/list", {
            params: {
                categoryId: 'cat150006',
            }
        }).then(function (response) {
                setProducts(response.data.products);
                setLoading(false);
                console.log(response.data.products);
            })
            .catch(function (error) {
                console.log(error);
                setLoading(false);
            });
    }, []);

    

    return (
        <MainLayout>
            <div className="max-w-screen-xl mx-auto sm:mb-32 mb-16 px-4 flex flex-col items-center">
                <div className="flex flex-col items-center mb-16 mt-16">
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
                        <div className="w-full flex mb-14 flex-wrap gap-8 justify-between">
                            {
                                products.length > 0 && 
                                products.map((product, i) => (
                                    <NavLink to={`/product/${product.productId}`} key={`item-${i}`}>
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