export const ProductCard = ({product}) => {

    return (
        <div className="drop-shadow-xl rounded-md sm:max-w-[255px] bg-light-gray cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
            <div>
                <img src={`${product?.image450}`} />
            </div>
            <div className="px-6 py-4 bg-white rounded-md">
                <h5 className="text-base text-black font-medium min-h-[48px]">
                    {product?.brandName}
                </h5>
                <div className="flex justify-between">
                    <span className="text-xl text-green font-medium text-right" >
                        {product?.currentSku?.listPrice} 
                    </span>
                </div>
            </div>
        </div>
    );
}