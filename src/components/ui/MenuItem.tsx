"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuItem as MenuItemType } from '@/types/menu';

interface MenuItemProps {
  item: MenuItemType;
}

export default function MenuItem({ item }: MenuItemProps) {
  const pathname = usePathname();
  const Icon = item.icon;
  const isActive = pathname === item.path;
  
  return (
    <Link 
      href={item.path}
      style={{ textDecoration: 'none' }}
      title={item.label} // Tooltip para accesibilidad
    >
      <div
        style={{
          padding: 10,
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          background: isActive ? '#262776' : 'transparent',
          boxShadow: isActive ? '0 2px 4px rgba(43, 46, 140, 0.2)' : 'none',
        }}
        className="menu-item"
        role="button"
        tabIndex={0}
        aria-label={`Navigate to ${item.label}`}
      >
        <Icon 
          style={{ 
            fontSize: 22, 
            color: isActive ? '#fff' : '#888',
            transition: 'color 0.2s ease'
          }} 
        />
      </div>
    </Link>
  );
}