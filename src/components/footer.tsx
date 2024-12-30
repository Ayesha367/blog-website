import React from 'react'
import { FaRegCopyright } from "react-icons/fa";
import Link from 'next/link';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='flex md:w-full sm:w-full w-full h-[60px] pt-4 justify-around mt-4 bg-slate-900'>
        <h1 className='text-white md:text-lg text-sm flex '>Next.JS Version &nbsp;<FaRegCopyright className='md:mt-1 mt-0 text-[22px]'/>&nbsp; Made by Ayesha Farooq</h1>
        <div className=' md:flex gap-3 text-white md:text-xl sm:text-sm hidden'>
<Link href="https://github.com/Ayesha367"><FaGithub /></Link>
<Link href="https://www.linkedin.com/in/ayesha-farooq-0b66b42ba/"><FaLinkedin /></Link>
<Link href="https://www.instagram.com/ayeshafarooq125/?igsh=MjFkc3kxdGxqdjRxv"><FaInstagram /></Link>
        </div>
    </div>
  )
}

export default Footer