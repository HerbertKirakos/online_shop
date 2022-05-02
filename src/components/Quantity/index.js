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
            <div className="px-3 py-1 bg-white border border-green flex gap-2">
                <button className="text-lg font-normal text-center text-green" onClick={handlePlus}>
                    +
                </button>
                <input  
                    name="quantity" 
                    value={value} 
                    className="max-w-[28px] text-lg font-normal text-black outline-none text-center"  
                    onChange={(e) => setValue(e.target.value)}
                />
                <button className="text-lg font-normal text-center text-gray" onClick={handleMinus}>
                    -
                </button>
            </div>

    );
}



