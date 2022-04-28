export const Quantity = ({value, setValue}) => {

    const handlePlus = () => {
        setValue(+value + 1);
    };

    const handleMinus = () => {
        if(value > 0) {
            setValue(+value - 1);
        } 
    };

    return (
            <div className="px-3 py-1 bg-white border border-[#56B280] flex gap-2">
                <button className="text-lg font-normal text-center text-[#56B280]" onClick={handlePlus}>
                    +
                </button>
                <input  
                    name="quantity" 
                    value={value} 
                    className="max-w-[28px] text-lg font-normal text-[#1D252C] outline-none text-center"  
                    onChange={(e) => setValue(e.target.value)}
                />
                <button className="text-lg font-normal text-center text-[#A7A7A7]" onClick={handleMinus}>
                    -
                </button>
            </div>

    );
}



