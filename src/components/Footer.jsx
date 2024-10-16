import React from 'react'
import Logo from '../assets/Images/organic-store-white-logo.png'
import appImg1 from '../assets/Images/app-store.png'
import appImg2 from '../assets/Images/play-store.png'

const Footer = () => {
  return (
    <div className='flex justify-center items-center md:items-start gap-4 md:flex-row flex-col bg-gray-900 text-white py-10'>
      <div className='md:w-[40%] w-[80%]'>
        <img src={Logo} alt="" />
        <p className='text-sm my-8 w-[80%] italic'>Lorem ipsum Lorem ipsum dolor sit amet. dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, molestias! corporis unde a porro maiores animi eveniet? Magni.</p>
      </div>
      <div className='flex justify-start items-start gap-4 md:w-[20%] w-[80%] md:flex-col flex-row'>
        <ul>
            <h1 className='font-semibold my-4 text-xl'>Quick Links</h1>
            <li className='text-sm'>About</li>
            <li className='text-sm'>Cart</li>
            <li className='text-sm'>Checkout</li>
            <li className='text-sm'>Contact</li>
            <li className='text-sm'>Home</li>
            <li className='text-sm'>My Account</li>
            <li className='text-sm'>Shop</li>
        </ul>
        <ul>
            <h1 className='font-semibold my-4 text-xl'>Site Links</h1>
            <li className='text-sm'>Peivacy Policy</li>
            <li className='text-sm'>Shipping Details</li>
            <li className='text-sm'>Offers Coupons</li>
            <li className='text-sm'>Terms & Conditions</li>
        </ul>
      </div>
      <div className='md:w-[20%] w-[80%] md:ml-20'>
      <h1 className='font-semibold my-4 text-xl'>Download Our Mobile App</h1>
      <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima pariatur repellat perferendis at deleniti. Ipsa at sint minima accusamus fuga?</p>
        <span className='flex justify-start items-center gap-2 my-4'>
            <img src={appImg1} alt="" className='w-[40%]'/>
            <img src={appImg2} alt="" className='w-[40%]'/>
        </span>
      </div>
    </div>
  )
}

export default Footer
