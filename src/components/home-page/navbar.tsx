'use client';
import { NavbarItems_1, NavbarItems_2 } from '@/lib/definitions';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {AlignJustifyIcon, ScanEyeIcon} from "lucide-react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10); // Adjust the scroll threshold as needed
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`fixed w-full flex items-center justify-between p-[20px] pl-[12px] transition-all duration-300 z-50 ${
                isScrolled ? 'bg-white shadow-md text-gray-11' : 'bg-white md:bg-transparent'
            }`}
        >
            <div className='flex items-center'>
                <Image
                    src="https://cdn.prod.website-files.com/5f996b22b00afe35a55e6f79/63c7db55c443b0eaaf0fe9c5_navbar-logo-updated-black.svg"
                    alt=''
                    width={133}
                    height={20}
                />
                <div className='lg:flex items-center ml-[24px] gap-x-10 font-[300] text-[16px] leading-[22px] text-gray-5 hidden'>
                    {NavbarItems_1.map((item) => (
                        <Link
                            className={` ${isScrolled ? "text-gray-9" : "hover:text-gray-6"} transition duration-150`}
                            key={item.name}
                            href='/'
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
            <ScanEyeIcon className={"sm:hidden text-black"} />
            <div className='sm:flex items-center hidden'>
                <div className='flex items-center ml-[24px] sm:gap-x-10 gap-x-2 font-[300] sm:text-[16px] sm:leading-[22px] text-xs sm:text-gray-5 text-gray-9'>
                    {NavbarItems_2.map((item) => (
                        <Link
                            className={` ${isScrolled ? "text-gray-9" : "hover:text-gray-6"} transition duration-150`}
                            key={item.name}
                            href='/'
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <Link
                    href='/dashboard'
                    className={`sm:ml-[25px] text-center text-[13px] font-[700] line-[16px] sm:text-gray-5 text-gray-9 rounded-[4px] border  sm:pt-[15.5px] sm:pb-[15.5px] sm:pl-[14px] sm:pr-[14px]  transition duration-150 ${isScrolled ? "bg-black text-white hover:bg-gray-900" : "border-white hover:bg-white hover:text-black"} `}
                >
                    Start for Free
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
