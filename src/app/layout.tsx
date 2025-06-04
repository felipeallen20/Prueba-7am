"use client";

import 'antd/dist/reset.css';
import "./globals.css";
import { Layout, Avatar } from 'antd';
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
                <MailOutlined 
                  style={{ 
                    fontSize: 20, 
                    color: '#888',
                    cursor: 'pointer',
                    transition: 'color 0.2s'
                  }} 
                />
                <EyeOutlined 
                  style={{ 
                    fontSize: 20, 
                    color: '#888',
                    cursor: 'pointer',
                    transition: 'color 0.2s'
                  }} 
                />
                <div
                  style={{
                    background: '#2B2E8C',
                    padding: 10,
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                    boxShadow: '0 2px 4px rgba(43, 46, 140, 0.2)'
                  }}
                >
                  <RocketOutlined style={{ fontSize: 20, color: '#fff' }} />
                </div>
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
