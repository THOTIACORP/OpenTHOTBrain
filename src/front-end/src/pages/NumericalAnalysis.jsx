import React, { useState } from 'react';
import { Upload, Button, message, Spin, Typography, Row, Col, Divider } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { Dragger } = Upload;

export const NumericalAnalysis = () => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);

  const props = {
    name: 'file',
    multiple: false,
    showUploadList: false,
    beforeUpload: file => {
      if (file.type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        message.error('Por favor, selecione um arquivo .xlsx.');
        return false;
      }
      setLoading(true);
      setFile(file);
      return false;
    },
  };

  const handleUpload = () => {
    if (!file) {
      message.error('Por favor, selecione um arquivo .xlsx.');
      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    // Aqui você pode implementar a lógica para enviar o arquivo para o servidor
    // e lidar com a resposta conforme necessário
    // Por enquanto, apenas vamos exibir uma mensagem
    message.success('Arquivo enviado com sucesso!');
    setLoading(false);
  };

  return (
    <div className="container text-center">
      <Title>Correlações</Title>
      <Row justify="center" style={{ marginBottom: '20px' }}>
        <Col>
          <Dragger {...props} disabled={loading}>
            <p className="ant-upload-drag-icon"><InboxOutlined /></p>
            <p className="ant-upload-text">Clique ou arraste um arquivo .xlsx para esta área para enviar</p>
          </Dragger>
        </Col>
      </Row>
      {loading && (
        <Row justify="center" style={{ marginBottom: '20px' }}>
          <Spin size="large" />
        </Row>
      )}
      {file && !loading && (
        <Row justify="center" style={{ marginBottom: '20px' }}>
          <Col>
            <Paragraph><strong>Arquivo Selecionado:</strong> {file.name}</Paragraph>
            <Button type="primary" onClick={handleUpload}>Enviar Arquivo</Button>
          </Col>
        </Row>
      )}
      <Divider />
      <Row justify="center">
        <Col>
          <Title level={2}>Correlação de Pearson</Title>
          <Paragraph>A correlação de Pearson mede o grau de relação linear entre duas variáveis contínuas.</Paragraph>
          {/* Adicione aqui mais conteúdo sobre correlação de Pearson */}
        </Col>
      </Row>
      <Divider />
      <Row justify="center">
        <Col>
          <Title level={2}>Correlação de Spearman</Title>
          <Paragraph>A correlação de Spearman mede o grau de relação monotônica entre duas variáveis.</Paragraph>
          {/* Adicione aqui mais conteúdo sobre correlação de Spearman */}
        </Col>
      </Row>
    </div>
  );
};

export default NumericalAnalysis;
