import React from 'react';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import { format, compareAsc } from 'date-fns';
const Header = () => {
  return (
    <div className="my-3 md:my-5 mx-auto max-w-11/12 text-center">
      <Image
        className="mx-auto"
        src={logo}
        height={300}
        width={200}
        alt="logo"
      ></Image>
      <p className="text-[10px] italic">Journalism Without Fear or Favour</p>
      <p className="text-[10px] font-semibold text-gray-500">
        {format(new Date(), 'EEEE, MMMM dd YYY')}{' '}
      </p>
    </div>
  );
};

export default Header;
