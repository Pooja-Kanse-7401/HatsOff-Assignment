import React, {useState} from "react";
import Logo from "../assets/Images/organic-store-logo5.svg";
import { FaShoppingBasket } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBars,FaXmark } from "react-icons/fa6";
// import { RxCross2 } from "react-icons/rx";

const Navbar = () => {

    const [openNav, setOpenNav] = useState(false);
    const toggleNav = () => setOpenNav(!openNav);

  return (
    <div className="relative  flex justify-between items-center p-4 mx-10">
      <ul className="flex justify-center items-center gap-4">
        <img src={Logo} alt="" />
        <span className="hidden text-zinc-700 md:flex justify-center items-center gap-4">
        <li className="text-zinc-900">Everything</li>
        <li>Groceries</li>
        <li>Juice</li>
        </span>
      </ul>
      <ul className="hidden text-zinc-900 md:flex justify-center items-center gap-4">
        <li>About</li>
        <li>Contact</li>
        <li>
          <FaShoppingBasket />
        </li>
        <li>
          <FaUser />
        </li>
        
      </ul>

      <div className="md:hidden">
        <button
          onClick={toggleNav}
          className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-xl text-gray-800 p-1"
        >
          {openNav ? <FaXmark /> : <FaBars />}
        </button>
      </div>
      <ul className={`${openNav ? "block" : "hidden"} w-[100%] absolute top-20 bg-black/20 flex justify-center items-center flex-col z-10 font-bold p-10 gap-2`}>
        <li className="text-zinc-900">Everything</li>
        <li>Groceries</li>
        <li>Juice</li>
        <li>About</li>
        <li>Contact</li>
        <li>
          <FaShoppingBasket />
        </li>
        <li>
          <FaUser />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
