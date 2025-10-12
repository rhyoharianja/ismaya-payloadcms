import React from 'react';
import logodefault from './ismaya-dark.png'; // Make sure you have your correct images referenced here
import logoDark from './ismaya-dark.png';  // Make sure you have your correct images referenced here
import Image from 'next/image';

export default function logo() {
  return (
    <div>
      <Image className="h-20 object-contain dark:hidden" src={logodefault} alt="" /> 
      <Image className="h-20 object-contain hidden dark:block" src={logoDark} alt="" />
    </div>
  );
}