'use client';

import { Input, Button, Typography, Space } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';

const { Text } = Typography;

interface FilterTableProps {
  totalEmpresas: number;
  onSearch: (value: string) => void;
  onCreate: () => void;
}

export default function FilterTable({ totalEmpresas, onSearch, onCreate }: FilterTableProps) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
      <Input
        placeholder="Buscar por nombre"
        allowClear
        onPressEnter={(e) => {
          const inputValue = (e.target as HTMLInputElement).value;
          onSearch(inputValue);
        }} 
        style={{ maxWidth: 250 }}
        prefix={<SearchOutlined />}
        className="custom-search"
      />

      <Space size="middle">
        <Text type="secondary">{String(totalEmpresas).padStart(2, '0')} empresas</Text>
        <Button type="primary" onClick={onCreate} style={{ backgroundColor: '#1E1F8A' }}>
          Crear nueva empresa
          <PlusOutlined />
        </Button>
      </Space>
    </div>
  );
}