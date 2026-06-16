
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import userAvatar from '@/assets/user.png';
import NavLink from './NavLink';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center my-5">
      <div>{/* //fake div */}</div>
      <div className=" ">
        <ul className="flex justify-center items-center gap-3 md:gap-5 text-gray-500">
          <li className="hover:text-red-600 duration-200">
            <NavLink href={'/'}>Home</NavLink>
          </li>
          <li className="hover:text-red-600 duration-200">
            <NavLink href={'/about-us'}>About</NavLink>
          </li>
          <li className="hover:text-red-600 duration-200">
            <NavLink href={'/career'}>Career</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex gap-1 sm:gap-2 px-2">
        <Image src={userAvatar} width={40} alt="user_img"></Image>

        <button className="btn bg-black text-white">LogIn</button>
      </div>
    </div>
  );
};

export default Navbar;
