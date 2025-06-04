'use client';

import { Modal, Form, Input, Upload, Button } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { useState } from 'react';

const { Dragger } = Upload;

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CreateEnterpriseModal({ open, onClose }: Props) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleOk = async () => {
    try {
      await form.validateFields();
      setLoading(true);
      // Aquí iría tu lógica para enviar la data al backend
      console.log(form.getFieldsValue());
      setTimeout(() => {
        setLoading(false);
        form.resetFields();
        onClose();
      }, 1000);
    } catch (error) {
      console.log('Errores en el formulario:', error);
    }
  };

  const uploadProps = {
    beforeUpload: () => false, // Prevenir carga automática
    accept: '.jpg,.png',
  };

  return (
    <Modal
      title="Nueva sucursal"
      open={open}
      onCancel={onClose}
      onOk={handleOk}
      confirmLoading={loading}
      okText="Crear empresa"
      cancelText="Cancelar"
      width={700}
    >
      <div style={{ paddingLeft: 72, paddingRight: 72, paddingTop: 20, paddingBottom: 20 }}>
        <Form form={form} layout="vertical">
          <Form.Item
            name="nombre"
            label="Nombre"
            rules={[{ required: true, message: 'Por favor ingresa el nombre' }]}
          >
            <Input placeholder="Escribir nombre" />
          </Form.Item>

          <Form.Item
            name="logo"
            label="Adjuntar logo completo"
            valuePropName="fileList"
            getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
            rules={[{ required: true, message: 'Por favor sube un logo' }]}
          >
            <Dragger {...uploadProps}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p>Haz clic o arrastra para subir tu archivo</p>
              <p className="ant-upload-hint">JPG, PNG</p>
            </Dragger>
          </Form.Item>

          <Form.Item
            name="isotipo"
            label="Adjuntar isotipo"
            valuePropName="fileList"
            getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
            rules={[{ required: true, message: 'Por favor sube un isotipo' }]}
          >
            <Dragger {...uploadProps}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p>Haz clic o arrastra para subir tu archivo</p>
              <p className="ant-upload-hint">JPG, PNG</p>
            </Dragger>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
}
