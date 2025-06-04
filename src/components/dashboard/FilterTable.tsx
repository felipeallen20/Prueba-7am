'use client';

import { Input, Button, Typography, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Text } = Typography;

interface FilterTableProps {
  totalEmpresas: number;
  onSearch: (value: string) => void;
  onCreate: () => void;
}

export default function FilterTable({ totalEmpresas, onSearch, onCreate }: FilterTableProps) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
      <Input.Search
        placeholder="Buscar por nombre"
        allowClear
        onSearch={onSearch}
        style={{ maxWidth: 250 }}
      />

      <Space size="middle">
        <Text type="secondary">{String(totalEmpresas).padStart(2, '0')} empresas</Text>
        <Button type="primary" icon={<PlusOutlined />} onClick={onCreate} style={{ backgroundColor: '#1E1F8A' }}>
          Crear nueva empresa
        </Button>
      </Space>
    </div>
  );
}