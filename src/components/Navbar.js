import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navbar() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const notify = () => toast.warning("Enter user details!!");

    const navData = [
        { id: 1, text: "Pricing" },
        { id: 2, text: "Solutions" },
        { id: 3, text: "Community" },
        { id: 4, text: "Resources" },
        { id: 5, text: "Contact" },
        { id: 6, text: "Drinkware" },
    ];

    return (
        <div className="bg-gray-200 shadow sticky z-20 top-0 px-4 flex  items-center h-24 max-w-screen text-black overflow-hidden justify-between">
        <a href="/">
            <img
                className="h-12 w-12"
                src="https://cdn-icons-png.freepik.com/256/11548/11548077.png?ga=GA1.1.1703826910.1705501789&semt=ais_hybrid"
                alt="logo1"
            />
            </a>
            <div className="hidden md:flex space-x-5">

                {navData.map((item) => (
                    <div
                        key={item.id}
                        className="p-4 text-black hover:bg-white hover:text-black rounded-xl m-2 cursor-pointer">
                        {item.text}
                    </div>
                ))}


                <div className="p-4 text-black hover:bg-white hover:text-black rounded-xl m-2 cursor-pointer "><a href="/about">About</a>
                    <ToastContainer
                        position="top-center"
                    />
                </div>

                <div className="p-4 text-black hover:bg-white hover:text-black rounded-xl m-2 cursor-pointer "><button onClick={notify}>SignIn</button>
                    <ToastContainer
                        position="top-center"
                    />
                </div>
                <div className="p-4 text-white bg-black  hover:bg-white hover:text-black rounded-xl m-2 cursor-pointer "><button onClick={notify}>Register</button>
                    <ToastContainer
                        position="top-center"
                        theme="light"
                    />
                </div>
            </div>

            <div
                onClick={handleNav}
                className=" content-visibility:hidden md:hidden mr-4"
            >
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            <ul
                className={
                    nav
                        ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-opacity-100 bg-slate-800  ease-in-out duration-500 overflow-auto"
                        : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
                }
            >
                <img
                    className="h-12 w-12"
                    src="https://cdn-icons-png.freepik.com/256/11548/11548077.png?ga=GA1.1.1703826910.1705501789&semt=ais_hybrid"
                    alt="logo1"
                />
                <b className="p-4 mt-8 flex 
                overflow-hiddenitems-center border-b rounded-xl hover:bg-white duration-300 hover:text-black cursor-pointer border-gray-600 text-xl text-gray-50">Sign In</b>
                <b className="p-4 mt-8 flex 
                overflow-hiddenitems-center border-b rounded-xl hover:bg-white duration-300 hover:text-black cursor-pointer border-gray-600 text-xl text-gray-50">Register</b>

                {navData.map((item) => (
                    <li
                        key={item.id}
                        className="p-4 mt-8 flex 
                overflow-hiddenitems-center border-b rounded-xl hover:bg-white duration-300 hover:text-black cursor-pointer border-gray-600 text-xl text-gray-50"
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar