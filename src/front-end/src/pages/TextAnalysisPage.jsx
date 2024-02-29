import React, { useState } from 'react';
import { Layout, Typography, Input, Button } from 'antd';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const { TextArea } = Input;

export const TextAnalysisPage = () => {
  const [textAreas, setTextAreas] = useState([<TextArea key={0} placeholder="Digite seu texto aqui" autosize={{ minRows: 4, maxRows: 8 }} />]);

  const handleAddTextArea = () => {
    const newKey = textAreas.length;
    setTextAreas([...textAreas, <TextArea key={newKey} placeholder="Digite seu texto aqui" autosize={{ minRows: 4, maxRows: 8 }} />]);
  };

  return (
    <Layout>
      <Header style={{ backgroundColor: '#001529', padding: '100px 0', textAlign: 'center', display: 'flex', alignItems: 'center' }}>
  <Title style={{ color: '#fff', marginBottom: "20px", width: "100%" }}>Análise de Textos</Title>
</Header>
      <Content style={{ padding: '50px' }}>
        <div style={{ marginBottom: '20px' }}>
          <Button type="primary" onClick={handleAddTextArea} style={{ marginBottom: '20px' }}>Adicionar Área de Texto</Button>
        </div>
        <div>
          {textAreas.map((textArea, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              {textArea}
            </div>
          ))}
        </div>
        <div style={{ marginTop: '20px' }}>
          <Button type="primary">Analisar Texto</Button>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>© 2024 Análise de Texto</Footer>
    </Layout>
  );
};

export default TextAnalysisPage;
