import { useDispatch, useSelector } from "react-redux";

import { removeCartItem, setCountToItem } from "../../store/cartSlice";
import { Quantity } from "../Quantity";

export const ProductCartTable = () => {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const handleProductItemChange = (itemId, newCount) => {
        dispatch(setCountToItem({
            itemId: itemId,
            newCount: newCount
        }))
    }

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-11">
            <table className="w-full text-lg text-left text-black">
                <thead className="text-base text-black bg-light-gray">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartItems && cartItems.length > 0 &&
                        cartItems.map(item => (
                            <tr className="bg-white border-b" key={item.id}>
                                <th scope="row" className="px-6 py-4 font-medium text-black">
                                    <div className="flex gap-8"> 
                                        <img src={item.image} className="max-w-[160px] shadow-md"/>
                                        <div>
                                            <h3 className="text-[26px] text-black mb-5 font-medium">
                                              {item.name}
                                            </h3>
                                            <button className="text-lg text-green border-b border-green" onClick={() => dispatch(removeCartItem(item.id))}>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </th>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    $ {item.pcsPrice}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="max-w-[90px]">
                                        <Quantity value={item.count} setValue={(newCount) => handleProductItemChange(item.id, newCount)} />
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    $ {(item.count * item.pcsPrice).toFixed(1)}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}