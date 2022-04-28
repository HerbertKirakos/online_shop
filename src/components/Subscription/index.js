export const Subscription = () => {
    return (
        <div>
            <div className="flex gap-3 items-center mb-5 ml-4">
                <input type="checkbox" id="one-time" name="one-time" className="accent-[#3fe68d] w-4 h-4"/>
                <label htmlFor="one-time">One time purchase</label>
            </div>

            <div className="border px-4 py-5 rounded-md sm:max-w-[360px]">
                <div className="flex gap-3 items-center mb-4">
                    <input type="checkbox" id="subscribe" name="subscribe" className="accent-[#3fe68d] min-w-[16px] min-h-[16px]" />
                    <label htmlFor="subscribe">Subscribe and delivery every </label>
                    <div>
                        <select name="day" id="day">
                            <option value="">2 weeks</option>
                            <option value="4 weeks">4 weeks</option>
                            <option value="4 weeks">3 weeks</option>
                        </select>
                    </div>
                </div>
                <span className="max-w-[320px] text-sm text-[#818181]">
                    Subscribe now and get the 10% of discount on every recurring order.  The discount will be applied at checkout. See details
                </span>
            </div>
        </div>
    );
}