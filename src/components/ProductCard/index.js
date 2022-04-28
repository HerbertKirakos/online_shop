export const ProductCard = ({product}) => {

    return (
        <div className="drop-shadow-xl rounded-md sm:max-w-[255px] bg-[#F7F8FA] cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
            <div>
                <img src={`${product?.image450}`} />
            </div>
            <div className="px-6 py-4 bg-white rounded-md">
                <h5 className="text-base text-[#1D293F] font-medium min-h-[48px]">
                    {product?.brandName}
                </h5>
                <div className="flex justify-between">
                    <span className="text-xl text-[#56B280] font-medium text-right" >
                        {product?.currentSku?.listPrice} 
                    </span>
                </div>
            </div>
        </div>
    );
}