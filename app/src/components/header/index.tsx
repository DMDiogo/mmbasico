import Link from 'next/link';
import React from 'react';

export function header() {
  return (
    <header className='flex px-4 py-4 bg-blue-500 text-white'>
      <div className='flex items-center justify-between w-full mx-auto max-w-7xl'>
        <div>Texte.com</div>
        <nav>
          <ul className='flex items-center justify-center gap-4'>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/login">Login.</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
