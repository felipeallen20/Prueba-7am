'use client';

import { Table, Tag, Dropdown, Button, Space, MenuProps } from 'antd';
import { DownOutlined, EditOutlined, DeleteOutlined, StopOutlined } from '@ant-design/icons';
import { MoreOutlined } from '@ant-design/icons';

interface Empresa {
  id: string;
  nombre: string;
  estado: 'Activo' | 'Inactivo';
}

const data: Empresa[] = [
  { id: '01', nombre: 'Empresa nombre ABC', estado: 'Activo' },
  { id: '02', nombre: 'Empresa nombre ABC', estado: 'Activo' },
  { id: '03', nombre: 'Empresa nombre ABC', estado: 'Activo' },
  { id: '04', nombre: 'Empresa nombre ABC', estado: 'Activo' },
  { id: '05', nombre: 'Empresa nombre ABC', estado: 'Inactivo' },
];

export default function DashboardTable() {
  const items: MenuProps['items'] = [
    {
      key: 'edit',
      label: 'Editar empresa',
      icon: <EditOutlined />,
    },
    {
      key: 'deactivate',
      label: 'Desactivar empresa',
      icon: <StopOutlined />,
    },
    {
      key: 'delete',
      label: 'Eliminar empresa',
      icon: <DeleteOutlined style={{ color: 'red' }} />,
      danger: true,
    },
  ];

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 80,
    },
    {
      title: 'Nombre de empresa',
      dataIndex: 'nombre',
      key: 'nombre',
    },
    {
      title: 'Estado de oficina',
      dataIndex: 'estado',
      key: 'estado',
      render: (estado: 'Activo' | 'Inactivo') => (
        <Tag
          color={estado === 'Activo' ? 'green' : 'red'}
          style={{ display: 'flex', alignItems: 'center', gap: 6 }}
        >
          <span
            style={{
              display: 'inline-block',
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: estado === 'Activo' ? 'green' : 'red',
            }}
          />
          {estado}
        </Tag>
      ),
    },
    {
      title: 'Acciones',
      key: 'acciones',
      render: () => (
        <Dropdown menu={{ items }} trigger={['click']}>
          <Button>
            Acciones <MoreOutlined />
          </Button>
        </Dropdown>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      rowKey="id"
    />
  );
}
