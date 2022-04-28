import { NavLink } from "react-router-dom";
import LogoFooter from "../assets/svg/LogoFooter.svg";

export const Footer = () => {
    return (
        <div>
            <div className="bg-[#272727] py-20 px-4">
                <div className="max-w-screen-xl mx-auto sm:flex border-t sm:justify-between">
                    <div className="mb-12 sm:mb-0">
                        <NavLink to="/">
                            <img src={LogoFooter} />
                        </NavLink>
                        <span className="max-w-[250px] text-white text-base">
                            Your natural candle made for your home and for your wellness.
                        </span>
                    </div>

                    <div className="flex gap-12 flex-wrap">
                        <div className="flex flex-col mt-11">
                            <h5 className="text-base font-medium text-[#56B280] mb-6">
                                Discovery
                            </h5>
                            <ul className="flex flex-col gap-5">
                                <li>
                                    <NavLink to="/" className="text-base font-medium text-[#E1E1E1] hover:border-b">
                                        New season
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/" className="text-base font-medium text-[#E1E1E1] hover:border-b">
                                        Most searched
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/" className="text-base font-medium text-[#E1E1E1] hover:border-b">
                                        Most selled
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col mt-11">
                            <h5 className="text-base font-medium text-[#56B280] mb-6">
                                About
                            </h5>
                            <ul className="flex flex-col gap-5">
                                <li>
                                    <NavLink to="/" className="text-base font-medium text-[#E1E1E1] hover:border-b">
                                        Help
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/" className="text-base font-medium text-[#E1E1E1] hover:border-b">
                                        Shipping
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/" className="text-base font-medium text-[#E1E1E1] hover:border-b">
                                        Affiliate
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col mt-11">
                            <h5 className="text-base font-medium text-[#56B280] mb-6">
                                Info
                            </h5>
                            <ul className="flex flex-col gap-5">
                                <li>
                                    <NavLink to="/" className="text-base font-medium text-[#E1E1E1] hover:border-b">
                                        Contact us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/" className="text-base font-medium text-[#E1E1E1] hover:border-b">
                                        Privacy Policies
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/" className="text-base font-medium text-[#E1E1E1] hover:border-b">
                                        Terms & Conditions
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#E5E5E5] py-6 px-4">
                <div className="max-w-screen-xl mx-auto sm:flex sm:justify-between">
                    <span className="text-base text-[#5E6E89] font-normal">
                        ©Candleaf All Rights Reserved.
                    </span>
                    <span className="text-base text-[#5E6E89] font-normal invisible sm:visible">
                        Designed with ❤️ by uxbly
                    </span>
                </div>
            </div>
        </div>
    );
}