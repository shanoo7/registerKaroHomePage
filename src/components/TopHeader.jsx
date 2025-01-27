import React from 'react'
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
function TopHeader() {
  return (
    <>
      <div className='bg-[#1C4670] text-white font-bold gap-5 flex justify-end pr-10 items-center h-10'>
   <span className='flex items-center'>< MdEmail /><a target='_blank' href="https://www.figma.com/design/BWtutOCqSUinQiqoSCDQ0c/Register-Karo-Home-Page-(Copy)?node-id=0-1&p=f&t=8Ztre4wjL2liy2jS-0">www.registerkaro.in</a></span>
     <span className='flex items-center'><IoCall />+919853914057</span>
     <span className='flex gap-3 items-center'>
     <FaInstagramSquare />
     <FaFacebookSquare />
     <FaTwitter />
     <FaPinterestSquare />
     </span>
      </div>
    </>
  )
}

export default TopHeader
