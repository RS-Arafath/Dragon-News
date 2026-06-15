import Navbar from '@/components/shared/Navbar';
import React from 'react';

const AuthLayoutPage = ({children}) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default AuthLayoutPage;