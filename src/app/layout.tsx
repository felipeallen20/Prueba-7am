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
        {children}
      </body>
    </html>
  );
}
