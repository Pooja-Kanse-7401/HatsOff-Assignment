import React from "react";
import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import Leaf from "./assets/Images/logo-leaf-new.png";
import Leaf2 from "./assets/Images/logo-leaf2-free-img.png";
import Hero from "./assets/Images/organic-products-hero.png";
import product1 from "./assets/Images/product1.jpg";
import product2 from "./assets/Images/product2.jpg";
import product3 from "./assets/Images/product3.jpg";
import product4 from "./assets/Images/product4.jpg";
import product5 from "./assets/Images/product5.jpg";
import product6 from "./assets/Images/product6.jpg";
import product7 from "./assets/Images/product7.jpg";
import product8 from "./assets/Images/product8.jpg";
import product9 from "./assets/Images/product9.jpg";
import product10 from "./assets/Images/product10.jpg";
import { IoCart } from "react-icons/io5";
import { MdLocalShipping } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import { MdOutlineSavings } from "react-icons/md";
import { FaRecycle } from "react-icons/fa";
import {
  FaStar,
  FaStarHalf,
  FaIndianRupeeSign,
  FaRegStar,
} from "react-icons/fa6";
import Client1 from "./assets/Images/client1.png";
import Client2 from "./assets/Images/client2.png";
import BgImage from './assets/Images/testinomial-bg.jpg'
import basilLeaf from './assets/Images/basil-leaf.png'

import LogoImage1 from './assets/Images/logo-1.svg'
import LogoImage2 from './assets/Images/logo-2.svg'
import LogoImage3 from './assets/Images/logo-3.svg'
import LogoImage4 from './assets/Images/logo-4.svg'
import LogoImage5 from './assets/Images/logo-5.svg'

const App = () => {
  return (
    <>
      <Navbar />
      <div
        id="hero-section"
        className="relative w-[100%] md:h-[100vh] h-[130vh]"
      >
        <div className="relative w-[100%] h-[91%] opacity-65">
          <img
            src={Leaf}
            alt=""
            width={500}
            className=" absolute right-4 bottom-0 rotate-12 overflow-hidden"
          />
        </div>
        <div className="absolute top-0 left-0 w-[100%] p-4 flex justify-center items-center md:flex-row flex-col">
          <div className="w-[70%] md:w-[35%] h-[100%] flex justify-center items-center">
            <img src={Hero} alt="" />
          </div>
          <div className="px-10 w-[70%] md:w-[35%] h-[100%] flex justify-center items-start flex-col">
            <img src={Leaf} alt="" />
            <h3 className="mt-4 my-2 font-bold">Best Quality Products</h3>
            <h1 className="text-4xl font-semibold w-[80%] my-2">
              Join The Organic Movement!
            </h1>
            <p className="my-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
              repudiandae quibusdam eveniet, tempora placeat dignissimos?
            </p>
            <button className="rounded-md p-2 px-4 bg-lime-700 flex justify-center items-center gap-2 text-white">
              <IoCart className="text-xl" />
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="bg-black w-[100%] py-8 flex justify-center items-center gap-4 flex-wrap">
        <div className="flex justify-center items-center gap-4">
          <div className="bg-neutral-800 flex justify-center items-center gap-4 p-4 px-8">
            <MdLocalShipping className="text-5xl text-lime-500" />
            <span className="text-white">
              <p className="font-semibold">Free Shipping</p>
              <p>Above $5 Only</p>
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="bg-neutral-800 flex justify-center items-center gap-4 p-4 px-8">
            <GrCertificate className="text-5xl text-lime-500" />
            <span className="text-white">
              <p className="font-semibold">Certified Organic</p>
              <p>100% Guarantee</p>
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="bg-neutral-800 flex justify-center items-center gap-4 p-4 px-8">
            <MdOutlineSavings className="text-5xl text-lime-500" />
            <span className="text-white">
              <p className="font-semibold">Huge Saving</p>
              <p>At Lowest Price</p>
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="bg-neutral-800 flex justify-center items-center gap-4 p-4 px-8">
            <FaRecycle className="text-5xl text-lime-500" />
            <span className="text-white">
              <p className="font-semibold">Easy Returns </p>
              <p>No Questions Asked</p>
            </span>
          </div>
        </div>
      </div>
      <div
        id="main"
        className="flex justify-center items-center pt-10 flex-col w-[100%]"
      >
        <h1 className="text-2xl font-semibold m-5">Best Selling Products</h1>
        <img src={Leaf} alt="" />
        <div className="md:w-[70%] py-4 w-[90%] flex justify-center items-center gap-4 md:flex-nowrap flex-wrap">
          <div className="md:w-[30%] w-[40%] mt-10">
            <img src={product1} alt="" className="rounded-xl" />
            <span className="flex justify-center items-center flex-col gap-1 pt-2">
              <p>Groceries</p>
              <p>Assorted Coffee</p>
              <p className="flex text-orange-500">
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </p>
              <p className="flex justify-center items-center text-zinc-800">
                <FaIndianRupeeSign />
                500
              </p>
            </span>
          </div>
          <div className="md:w-[30%] w-[40%] mt-10">
            <img src={product2} alt="" className="rounded-xl" />
            <span className="flex justify-center items-center flex-col gap-1 pt-2">
              <p>Groceries</p>
              <p>Hand Sanitizer</p>
              <p className="flex text-orange-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </p>
              <p className="flex justify-center items-center text-zinc-800">
                <FaIndianRupeeSign />
                150
              </p>
            </span>
          </div>
          <div className="md:w-[30%] w-[40%] mt-10">
            <img src={product3} alt="" className="rounded-xl" />
            <span className="flex justify-center items-center flex-col gap-1 pt-2">
              <p>Groceries</p>
              <p>handpicked Red Chillies</p>
              <p className="flex text-orange-500">
                <FaStar />
                <FaStar />
                <FaStar />
              </p>
              <p className="flex justify-center items-center text-zinc-800">
                <FaIndianRupeeSign />
                200
              </p>
            </span>
          </div>
          <div className="md:w-[30%] w-[40%] mt-10">
            <img src={product4} alt="" className="rounded-xl" />
            <span className="flex justify-center items-center flex-col gap-1 pt-2">
              <p>Groceries</p>
              <p>Natural Extracted Edible Oil</p>
              <p className="flex text-orange-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </p>
              <p className="flex justify-center items-center text-zinc-800">
                <FaIndianRupeeSign />
                500
              </p>
            </span>
          </div>
        </div>

        <div className="relative w-[100%] py-20 mt-20 pt-36 bg-red-50 flex justify-center items-center">
          <img src={basilLeaf} alt="" className="absolute top-[-50px]"/>
          <div className="flex justify-center items-center gap-4 md:flex-nowrap flex-wrap w-[70%]">
            <div className="bg-white rounded-md p-2 w-[90%] md:w-[30%] relative">
              <span className="absolute top-0 left-5 w-[90%]">
                <h1 className="text-xl font-bold my-2">Farm Fresh Fruits</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
                  modi.
                </p>
                <button className="rounded-md p-2 px-4 my-3 bg-lime-700 flex justify-center items-center gap-2 text-white">
                  <IoCart className="text-xl" />
                  Shop Now
                </button>
              </span>
              <img src={product5} alt="" className="w-[100%]" />
            </div>
            <div className="bg-white rounded-md p-2 w-[90%] md:w-[30%] relative">
              <span className="absolute top-0 left-5 w-[90%]">
                <h1 className="text-xl font-bold my-2">Farm Fresh Fruits</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
                  modi.
                </p>
                <button className="rounded-md p-2 px-4 my-3 bg-lime-700 flex justify-center items-center gap-2 text-white">
                  <IoCart className="text-xl" />
                  Shop Now
                </button>
              </span>
              <img src={product6} alt="" className="w-[100%]" />
            </div>
            <div className="bg-white rounded-md p-2 w-[90%] md:w-[30%] relative">
              <span className="absolute top-0 left-5 w-[90%]">
                <h1 className="text-xl font-bold my-2">Farm Fresh Fruits</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
                  modi.
                </p>
                <button className="rounded-md p-2 px-4 my-3 bg-lime-700 flex justify-center items-center gap-2 text-white">
                  <IoCart className="text-xl" />
                  Shop Now
                </button>
              </span>
              <img src={product7} alt="" className="w-[100%]" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black w-[100%] py-8 flex justify-around items-center md:flex-row flex-col">
        <h1 className="text-white font-bold my-3 text-2xl text-center">
          Get 25% Off On Your First Purchase!
        </h1>
        <button className="rounded-md p-2 px-4 bg-lime-700 flex justify-center items-center gap-2 text-white">
          <IoCart className="text-xl" />
          Shop Now
        </button>
      </div>
      <div className="w-[100%] flex justify-center items-center flex-col">
        <div className="bg-red-50 p-4 w-[100%] text-center">
          <h1 className="text-xl font-semibold">
            Try It For Free. No Registration Needed.
          </h1>
        </div>

        <div className="w-[100%] relative h-[320vh] md:h-[200vh] flex justify-start items-end md:overflow-visible overflow-scroll">
          <img src={Leaf2} alt="" className="w-[35%] opacity-45 pb-40" />

          <div>
            <div className="absolute top-0 left-0 w-[100%] flex justify-center items-center flex-col pt-10">
              <h1 className="text-2xl font-semibold m-5">Ternding Products</h1>
              <img src={Leaf} alt="" />
              <div className="md:w-[70%] py-4 w-[90%] flex justify-center items-center gap-4 md:flex-nowrap flex-wrap">
                <div className="md:w-[30%] w-[40%] mt-10">
                  <img src={product4} alt="" className="rounded-xl" />
                  <span className="flex justify-center items-center flex-col gap-1 pt-2">
                    <p>Groceries</p>
                    <p>Assorted Coffee</p>
                    <p className="flex text-orange-500">
                      <FaStar />
                      <FaStar />
                      <FaStarHalf />
                    </p>
                    <p className="flex justify-center items-center text-zinc-800">
                      <FaIndianRupeeSign />
                      500
                    </p>
                  </span>
                </div>
                <div className="md:w-[30%] w-[40%] mt-10">
                  <img src={product9} alt="" className="rounded-xl" />
                  <span className="flex justify-center items-center flex-col gap-1 pt-2">
                    <p>Groceries</p>
                    <p>Hand Sanitizer</p>
                    <p className="flex text-orange-500">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalf />
                    </p>
                    <p className="flex justify-center items-center text-zinc-800">
                      <FaIndianRupeeSign />
                      150
                    </p>
                  </span>
                </div>
                <div className="md:w-[30%] w-[40%] mt-10">
                  <img src={product10} alt="" className="rounded-xl" />
                  <span className="flex justify-center items-center flex-col gap-1 pt-2">
                    <p>Groceries</p>
                    <p>handpicked Red Chillies</p>
                    <p className="flex text-orange-500">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </p>
                    <p className="flex justify-center items-center text-zinc-800">
                      <FaIndianRupeeSign />
                      200
                    </p>
                  </span>
                </div>
                <div className="md:w-[30%] w-[40%] mt-10">
                  <img src={product8} alt="" className="rounded-xl" />
                  <span className="flex justify-center items-center flex-col gap-1 pt-2">
                    <p>Groceries</p>
                    <p>Natural Extracted Edible Oil</p>
                    <p className="flex text-orange-500">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </p>
                    <p className="flex justify-center items-center text-zinc-800">
                      <FaIndianRupeeSign />
                      500
                    </p>
                  </span>
                </div>
              </div>
              <div className="md:w-[70%] md:mt-32 py-4 w-[90%] flex justify-center items-center flex-col">
                <h1 className="text-2xl font-semibold m-5">
                  {" "}
                  Customers Reviews{" "}
                </h1>
                <img src={Leaf} alt="" />
                <div className="mt-14 flex justify-center items-center md:items-end gap-4 text-center md:flex-row flex-col">
                  <div className="bg-white w-[80%] md:w-[32%] flex justify-center items-center flex-col gap-3 rounded-md border-2 shadow-md p-7 ">
                    <p className="flex text-orange-300">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />
                      <FaRegStar />
                    </p>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing,
                      dolores sequi voluptatem deserunt magni cupiditate error
                      maiores!
                    </p>
                    <span className="flex justify-center items-center gap-5">
                      <img src={Client1} alt="" className="w-[30%]" />
                      <p className="font-semibold italic">Mila Kunis</p>
                    </span>
                  </div>
                  <div className="relative w-[80%] md:w-[32%] h-[50vh] flex justify-center items-center flex-col gap-3 rounded-md border-2 shadow-md ">
                    <img src={BgImage} alt="" className="w-[100%] h-[100%] opacity-80 rounded-md"/>
                    <div className=" text-white absolute h-[100%] left-0 top-0 flex justify-center items-center flex-col bg-black/30 py-10">
                      <h1 className="text-2xl font-bold">Deal Of The Day 15%</h1>
                      <h1 className="text-2xl font-bold">Off On All</h1>
                      <h1 className="text-2xl font-bold">Vegetables!</h1>
                      <p className="w-[90%] p-2 pt-4 pb-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Dolorem, eum.
                      </p>
                      <button className="rounded-md p-2 px-4 bg-lime-700 flex justify-center items-center gap-2 text-white">
                        <IoCart className="text-xl" />
                        Shop Now
                      </button>
                    </div>
                  </div>
                  <div className="bg-white w-[80%] md:w-[32%] flex justify-center items-center flex-col gap-3 rounded-md border-2 shadow-md p-7 ">
                    <p className="flex text-orange-300">
                      <FaStar />
                      <FaStar /> <FaStar />
                      <FaStar />
                      <FaStar />
                    </p>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing,
                      dolores sequi voluptatem deserunt magni cupiditate error
                      maiores!
                    </p>
                    <span className="flex justify-center items-center gap-5">
                      <img src={Client2} alt="" className="w-[30%]" />
                      <p className="font-semibold italic">Mike Sendler</p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center w-[90%] md:w-[80%] py-10  flex-wrap">
                <img src={LogoImage1} alt="" className="w-[35%] md:w-[20%]"/>
                <img src={LogoImage2} alt="" className="w-[35%] md:w-[20%]"/>
                <img src={LogoImage3} alt="" className="w-[35%] md:w-[20%]"/>
                <img src={LogoImage4} alt="" className="w-[35%] md:w-[20%]"/>
                <img src={LogoImage5} alt="" className="w-[35%] md:w-[20%]"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default App;
