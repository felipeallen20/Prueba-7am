'use client';

import { Table, Tag, Dropdown, Button } from 'antd';
import { EditOutlined, DeleteOutlined, StopOutlined, MoreOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';

interface Empresa {
  id: string;
  nombre: string;
  estado: 'Activo' | 'Inactivo';
}

interface Props {
  empresas: Empresa[];
}

export default function DashboardTable({ empresas }: Props) {
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
          style={{ display: 'flex', alignItems: 'center', gap: 6, border: "none", background: "transparent" }}
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
      dataSource={empresas}
      pagination={false}
      rowKey="id"
    />
  );
}
