'use client';
import { SidebarLink } from '@/data/dashboardLinks';
import { MdChevronRight  } from 'react-icons/md';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export function SidebarLinks({ item }: { item: SidebarLink }) {
  const pathname = usePathname();
  const isActive = item.path === pathname;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Main link */}
      <li
        className={`flex items-center mb-4 w-56 justify-between cursor-pointer rounded-md px-3 py-3 duration-300 ${
          isActive ? 'bg-custom-orange text-white' : 'text-custom-orange/60 hover:text-white hover:bg-custom-orange'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Link
            href={item.path || '#'}   
            className="flex items-center gap-2"
        >
          <span className="text-xl">{item.icon}</span>
          <span>{item.label}</span>
        </Link>

        {/* Chevron for sublinks */}
        {item.subLinks && (
          <MdChevronRight 
            className={`text-xl cursor-pointer duration-300 ${
              isOpen ? 'rotate-90' : ''
            }`}
            
          />
        )}
      </li>

      {/* Sublinks */}
      {item.subLinks && (
        <ul
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-32' : 'max-h-0'
          }`}
        >
          {item.subLinks.map((subLink) => (
            <li
              key={subLink.key}
              className={`flex items-center gap-2 text-sm transition-all ease-in-out text-custom-orange/60 hover:text-white hover:bg-custom-orange rounded-md`}
            >
              <Link href={subLink.path} className="flex items-center gap-2 px-3 py-2">
                {subLink.icon && <span className="text-lg">{subLink.icon}</span>}
                <span>{subLink.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
