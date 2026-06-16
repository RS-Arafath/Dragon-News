'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
  const pathName = usePathname()
  console.log(pathName);
  return <Link href={href}>{children}</Link>
};

export default NavLink;