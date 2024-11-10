import React from 'react';
import Logo from "../../assets/Logo.jpg";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Top Rated",
        link: "/#services",
    },
    {
        id: 3,
        name: "Kids Wear",
        link: "/#",
    },
    {
        id: 4,
        name: "Mens Wear",
        link: "/#",
    },
    {
        id: 5,
        name: "Electronics",
        link: "/#",
    },
];
const dropdownLinks = [  // corrected here (lowercase "d")
    { 
        id: 1,
        name: "Trending Product",
        link: "/#",
    },
    {
        id: 2,
        name: "Best Selling",
        link: "/#",
    },
    {
        id: 3,
        name: "Top Rated",
        link: "/#",
    },
];

function Navbar() {
    return (
        <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
            {/* upper navbar */}
            <div className="bg-primary/40 py-2">
                <div className="container flex justify-between items-center">
                    <div>
                        <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                            <img src={Logo} alt="Logo" className="w-10" />
                            Sohel
                        </a>
                    </div>
                    {/* search bar */}
                    <div className='flex justify-between items-center gap-4'>
                        <div className="relative group hidden sm:block">
                            <input
                                type="text"
                                placeholder="search"
                                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border focus:border-primary"
                            />
                            <IoMdSearch
                                className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 transition-all duration-300"
                            />
                        </div>
                    </div>
                    {/* order button */}
                    <button
                        onClick={() => alert("Order not available yet")}
                        className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
                    >
                        <span className="group-hover:block hidden transition-all duration-200">Order</span>
                        <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer' />
                    </button>
                    {/* Darkmode Switch */}
                    <div>
                        <DarkMode />
                    </div>
                </div>
            </div>
            {/* lower navbar */}
            <div className='flex justify-center'>
                <ul className="sm:flex hidden items-center gap-4">
                    {Menu.map((item) => (
                        <li key={item.id}>
                            <a href={item.link} className="inline-block px-4 hover:text-primary duration-200">{item.name}</a>
                        </li>
                    ))}
                    {/* dropdown link */}
                    <li className='group relative cursor-pointer'>
                        <a href="#" className="flex items-center gap-[2px] py-2"> Trending Items
                            <span>
                                <FaCaretDown className='transition-all duration-200 group-hover:rotate-180'/>
                            </span>
                        </a>
                        <div className='absolute z-[9999] hidden group-hover:block'>  {/* corrected here */}
                            <ul className="bg-white shadow-md rounded-md p-2">
                                {dropdownLinks.map((data) => (  // corrected here
                                    <li key={data.id}>
                                        <a href={data.link} className="block px-4 py-2 hover:bg-primary/20 ">
                                            {data.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>  
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
