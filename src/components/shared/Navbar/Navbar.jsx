import { useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
import NavItems from "./NavItems/NavItems";
import MobileMenu from "./MobileMenu/MobileMenu";
import { useAuth } from "../../../context/AuthProvider/AuthProvider";

const Navbar = () => {
    const [isMobileMenu, setIsMobileMenu] = useState(false);
    const { user } = useAuth();

    return (
        <header className="bg-[#FFF]">
            <nav className="container relative">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between py-8 ">
                    {/* Navbar Left */}
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="flex items-center text-4xl font-extrabold text-black"
                        >
                            <h2>Nakam</h2>
                        </Link>
                    </div>
                    {/* Navbar Center */}
                    <div className="md:hidden sm:hidden">
                        <ul className="flex flex-row">
                            <NavItems />
                        </ul>
                    </div>
                    {/* Navbar Right */}
                    <div className="flex">
                        {user ? (
                            <Link to={"/dashboard/all-products"}>
                                <CustomButton
                                    buttonName={"Dashboard"}
                                    cssStyle={
                                        "hover:bg-primary hover:text-white px-3 py-[14px] text-gray-800 md:hidden sm:hidden mr-2 md:mr-0 sm:mr-0"
                                    }
                                />
                            </Link>
                        ) : (
                            <Link to={"/register"}>
                                <CustomButton
                                    buttonName={"Sign Up"}
                                    cssStyle={
                                        "hover:bg-primary hover:text-white px-3 py-[14px] text-gray-800 md:hidden sm:hidden mr-2 md:mr-0 sm:mr-0"
                                    }
                                />
                            </Link>
                        )}

                        <Link to={"/cart"}>
                            <CustomButton
                                buttonName={""}
                                cssStyle={
                                    "bg-primary hover:bg-primary/90 text-white px-5 py-[14px] md:hidden sm:hidden"
                                }
                            />
                        </Link>

                        <button
                            type="button"
                            onClick={() => setIsMobileMenu(!isMobileMenu)}
                            className="ml-4 sm:inline-flex md:inline-flex hidden items-center p-2 text-sm text-gray-500 rounded-lg  focus:outline-none focus:ring-2 focus:ring-gray-200 "
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                        {/* Mobile Menu */}
                    </div>
                </div>
            </nav>
            {isMobileMenu && (
                <ul className="pt-5 pb-8 hidden md:block sm:block bg-[#FFF8F7] absolute left-0 top-24 sm:top-[94px] z-50 w-full">
                    <MobileMenu
                        setIsMobileMenu={setIsMobileMenu}
                        isMobileMenu={isMobileMenu}
                    />

                    <li className="ml-8 mt-5 mb-4">
                        <CustomButton
                            buttonName={""}
                            cssStyle={
                                "bg-primary hover:bg-primary/90 text-white px-5 py-[14px] "
                            }
                        />
                    </li>
                </ul>
            )}
        </header>
    );
};

export default Navbar;
