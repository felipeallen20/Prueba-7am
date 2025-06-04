"use client";

import 'antd/dist/reset.css';
import "./globals.css";
import { Layout, Avatar } from 'antd';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import MenuItem from '@/components/ui/MenuItem';
import { MenuItem as MenuItemType } from '@/types/menu';
import {
  MailOutlined,
  EyeOutlined,
  RocketOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Sider, Content } = Layout;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Configuración de los elementos del menú
  const menuItems: MenuItemType[] = [
    {
      key: 'activity',
      icon: MailOutlined,
      path: '/activity',
      label: 'Activity'
    },
    {
      key: 'analytics',
      icon: EyeOutlined,
      path: '/analytics',
      label: 'Analytics'
    },
    {
      key: 'dashboard',
      icon: RocketOutlined,
      path: '/dashboard',
      label: 'Dashboard'
    }
  ];

  // Función para determinar si un item está activo
  const isActive = (path: string) => pathname === path;
  return (
    <html lang="en">
      <body>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            width={72}
            style={{
              background: '#fff',
              borderRadius: '0 12px 12px 0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '2px 0 8px rgba(0,0,0,0.05)',
              position: 'relative',
            }}
          >
            {/* Contenedor superior con logo y menú */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              paddingTop: 16 
            }}>
              {/* Logo superior */}
              <Avatar
                src="/img/logo/logo 2.png"
                size={40}
                style={{ marginBottom: 32 }}
              />

              {/* Menú de íconos */}
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 24, 
                alignItems: 'center' 
              }}>
                {menuItems.map((item) => (
                  <MenuItem key={item.key} item={item} />
                ))}
              </div>
            </div>

            {/* Settings en la parte inferior */}
            <div style={{ 
              position: 'absolute',
              bottom: 150,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <div style={{ 
                borderTop: '1px solid #f0f0f0', 
                width: 40, 
                marginBottom: 20 
              }} />
              <SettingOutlined 
                style={{ 
                  fontSize: 20, 
                  color: '#888',
                  cursor: 'pointer',
                  transition: 'color 0.2s'
                }} 
              />
            </div>
          </Sider>

          <Layout>
            <Content style={{ padding: 24, background: '#f5f5f5' }}>
              {children}
            </Content>
          </Layout>
        </Layout>
      </body>
    </html>
  );
}