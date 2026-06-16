
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import userAvatar from '@/assets/user.png';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center my-5">
      <div>{/* //fake div */}</div>
      <div className=" ">
        <ul className="flex justify-center items-center gap-3 md:gap-5 text-gray-500">
          <li className="hover:text-red-600 duration-200">
            <Link href={'/'}>Home</Link>
          </li>
          <li className="hover:text-red-600 duration-200">
            <Link href={'/about-us'}>About</Link>
          </li>
          <li className="hover:text-red-600 duration-200">
            <Link href={'/career'}>Career</Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-1 sm:gap-2 px-2">
        <Image src={userAvatar}width={40} alt="user_img"></Image>

        
        <button className="btn bg-black text-white">LogIn</button>
      </div>
    </div>
  );
};

export default Navbar;
