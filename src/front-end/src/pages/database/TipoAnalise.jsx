import React from 'react';
import { Layout, Button, Card, Divider } from 'antd';
import Nav from '../../components/Nav';

const { Content } = Layout;

export const TipoAnalise = () => {
  return (
    <Nav render={
    <Content style={{ padding: '50px', textAlign: 'center' }}>
      <h2>Escolha tipo de análise</h2>

      <Divider />

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
        <Card
          title="Analise Automática"
          style={{ width: 300, marginRight: '20px', border: '1px solid #e8e8e8' }}
          actions={[<Button type="primary">Selecionar</Button>]}
        >
        
          <p><strong>Analise Automática</strong></p>
          <p>Varredura do banco de dados</p>
       
        </Card>
        <Card
          title="Analise Semi-auto"
          style={{ width: 300, marginRight: '20px', border: '1px solid #e8e8e8' }}
          actions={[<Button type="primary" href='./DataPage'>Selecionar</Button>]}
        >
        
          <p><strong>Analise Semi-auto</strong></p>
          <p>escolha as tabelas e as colunas para começar as análises</p>
        </Card>
      </div>


    </Content>}/>
  );
};

export default TipoAnalise;
