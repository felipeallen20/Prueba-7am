import { ComponentType } from 'react';

export interface MenuItem {
  key: string;
  icon: ComponentType<any>; // Para íconos de Ant Design
  path: string;
  label: string;
}

export interface MenuItemProps {
  item: MenuItem;
}