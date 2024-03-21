import React from 'react';
import { Layout, Button, Card, Divider } from 'antd';
import { WalletOutlined, ClockCircleOutlined, CalendarOutlined } from '@ant-design/icons';

const { Content } = Layout;

export const PricingPage = () => {
  return (
    <Content style={{ padding: '50px', textAlign: 'center' }}>
      <h2>Escolha o Seu Plano</h2>

      <Divider />

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
        <Card
          title="Plano Grátis"
          style={{ width: 300, marginRight: '20px', border: '1px solid #e8e8e8' }}
          actions={[<Button type="primary">Selecionar</Button>]}
        >
          <p>R$0/dia</p>
          <p>Recursos Incluídos:</p>
          <ul className='text-left'>
            <li><ClockCircleOutlined /> 1 Análise diária</li>
          </ul>
        </Card>
        <Card
          title="Plano Diário"
          style={{ width: 300, marginRight: '20px', border: '1px solid #e8e8e8' }}
          actions={[<Button type="primary">Selecionar</Button>]}
        >
          <p>R$20/dia</p>
          <p>Recursos Incluídos:</p>
          <ul>
            <li><CalendarOutlined /> Análises ilimitadas em 24H</li>
          </ul>
        </Card>
        <Card
          title="Plano Mensal"
          style={{ width: 300, marginRight: '20px', border: '1px solid #e8e8e8' }}
          actions={[<Button type="primary">Selecionar</Button>]}
        >
          <p>R$30/mês</p>
          <p>Recursos Incluídos:</p>
          <ul>
            <li><CalendarOutlined /> Análises ilimitadas por 30 dias</li>
          </ul>
        </Card>
      </div>

      <Divider />

      <div style={{ marginTop: '50px' }}>
        <h2>Análise por Uso</h2>
        <p>Faça uma análise detalhada do seu uso e pague apenas pelo que precisar.</p>
        <p>Preço: R$10 por uso</p>
        <Button type="primary">Iniciar Análise</Button>
      </div>
    </Content>
  );
};

export default PricingPage;
