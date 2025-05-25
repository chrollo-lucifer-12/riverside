import { NavbarItems_1, NavbarItems_2 } from '@/lib/definitions'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-transparent p-[20px] pl-[12px] flex items-center justify-between'>
      <div className='flex items-center'>
        <Image color='white' src={"https://cdn.prod.website-files.com/5f996b22b00afe35a55e6f79/63c7db55c443b0eaaf0fe9c5_navbar-logo-updated-black.svg"} alt='' width={133} height={20} className='text-white' />
        <div className='flex items-center ml-[24px] gap-x-10 font-[300] text-[16px] leading-[22px] text-gray-5 '>
        {
            NavbarItems_1.map((item) => <Link className='hover:text-gray-6 transition duration-150' key={item.name} href={"/"}>{item.name}</Link>)
        }
        </div>
      </div>
      <div className='flex items-center'>
        <div className='flex items-center ml-[24px] gap-x-10 font-[300] text-[16px] leading-[22px] text-gray-5 '>
        {
            NavbarItems_2.map((item) => <Link className='hover:text-gray-6 transition duration-150' key={item.name} href={"/"}>{item.name}</Link>)
        }
        </div>
        <Link href={"/"} className='ml-[25px] text-center text-[13px] font-[700] line-[16px] rounded-[4px] border border-white pt-[15.5px] pb-[15.5px] pl-[14px] pr-[14px] hover:bg-white hover:text-black transition duration-150'>
            Start for Free
        </Link>
      </div>
    </div>
  )
}

export default Navbar
