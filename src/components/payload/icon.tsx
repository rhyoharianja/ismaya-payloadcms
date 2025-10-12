import React from 'react';
import logo from './favicon.ico';
import Image from 'next/image';

export default function icon() {
  return (
    <div>
      <Image className="w-60" src={logo} alt="" />
    </div>
  );
}