"use client";

import { Breadcrumb, Typography, Table, Layout } from 'antd';

const { Header, Content } = Layout;
const { Title } = Typography;

export default function Dashboard() {
  const empresas = [];

  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'nombre',
      key: 'nombre',
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ padding: '24px' }}>
        <Breadcrumb style={{ marginBottom: 8 }}>
          <Breadcrumb.Item>lorem ipsum</Breadcrumb.Item>
          <Breadcrumb.Item>Lista de empresas</Breadcrumb.Item>
        </Breadcrumb>

        <Title level={2} style={{ marginBottom: 24 }}>
          Lista de empresas
        </Title>
      </Content>
    </Layout>
  );
}
