import React from 'react';
import Link from 'next/link';

interface NavLinkProps {
  href: string;
  color: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, color, children }) => {
  return (
    <Link 
      href={href}
      className={`
        relative px-4 py-2 text-gray-300 hover:text-white 
        font-medium transition-colors duration-300 group
      `}
    >
      <span className="relative z-10">{children}</span>
      <div 
        className={`
          absolute bottom-0 left-1/2 w-0 h-0.5 
          bg-gradient-to-r ${color} 
          group-hover:w-[calc(100%-2rem)] 
          transition-all duration-300 
          -translate-x-1/2
        `}
      />
    </Link>
  );
};

export default NavLink;
