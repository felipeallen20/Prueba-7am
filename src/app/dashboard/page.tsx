'use client';

import { useEffect, useState } from 'react';
import { Breadcrumb, Typography, Layout } from 'antd';
import FilterTable from '@/components/dashboard/FilterTable';
import DashboardTable from '@/components/dashboard/DashboardTable';

const { Content } = Layout;
const { Title } = Typography;

interface Empresa {
  id: string;
  nombre: string;
  estado: 'Activo' | 'Inactivo';
}

export default function Dashboard() {
  const [empresas, setEmpresas] = useState<Empresa[]>([]);

  const fetchEmpresas = async (search: string = '') => {
    const endpoint = search
      ? `/api/enterprise/search?nombre=${encodeURIComponent(search)}`
      : `/api/enterprise`;

    const res = await fetch(endpoint);
    const data = await res.json();
    setEmpresas(data);
  };

  useEffect(() => {
    fetch('/api/enterprise')
      .then((res) => res.json())
      .then((data) => setEmpresas(data))
      .catch((err) => console.error('Error al cargar empresas:', err));
  }, []);

   useEffect(() => {
    fetchEmpresas();
  }, []);

  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      <Content style={{ padding: '24px' }}>
        <Breadcrumb style={{ marginBottom: 8 }}>
          <Breadcrumb.Item>lorem ipsum</Breadcrumb.Item>
          <Breadcrumb.Item>Lista de empresas</Breadcrumb.Item>
        </Breadcrumb>

        <Title level={2} style={{ marginBottom: 24 }}>
          Lista de empresas
        </Title>

        <FilterTable
          totalEmpresas={empresas.length}
          onSearch={(value) => fetchEmpresas(value)}
          onCreate={() => console.log('Crear nueva empresa')}
        />

        <DashboardTable empresas={empresas} />
      </Content>
    </Layout>
  );
}
