import React from 'react';
import { Layout, Typography, Button, Row, Col, Space } from 'antd';
import { CheckCircleFilled, AreaChartOutlined, RadarChartOutlined, BarChartOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

export const LandingPage = () => {
  return (
    <Layout>
      <Header style={{ backgroundColor: '#001529', padding: '100px 0', textAlign: 'center', display: 'flex', alignItems: 'center' }}>
  <Title style={{ color: '#fff', marginBottom: "20px", width: "100%" }}>Sistema de Análise de Dados</Title>
</Header>

      <Content style={{ padding: '50px' }}>
        <Row gutter={[16, 16]} justify="center">
          <Col span={8}>
            <Space direction="vertical">
              <CheckCircleFilled style={{ fontSize: '50px', color: '#1890ff' }} />
              <Title level={4}>Análise Precisa</Title>
              <Paragraph>
                Utilize nossas ferramentas avançadas para analisar seus dados com precisão e confiança.
              </Paragraph>
            </Space>
          </Col>
          <Col span={8}>
            <Space direction="vertical">
              <AreaChartOutlined style={{ fontSize: '50px', color: '#1890ff' }} />
              <Title level={4}>Visualizações Gráficas</Title>
              <Paragraph>
                Explore seus dados de forma visual através de gráficos de área, barras e muito mais.
              </Paragraph>
            </Space>
          </Col>
          <Col span={8}>
            <Space direction="vertical">
              <RadarChartOutlined style={{ fontSize: '50px', color: '#1890ff' }} />
              <Title level={4}>Análise Avançada</Title>
              <Paragraph>
                Realize análises avançadas usando ferramentas de radar e métricas personalizadas.
              </Paragraph>
            </Space>
          </Col>
        </Row>
        <div style={{ marginTop: '50px', textAlign: 'center' }}>
          <Button type="primary" size="large">Comece Agora</Button>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>© 2024 Sistema de Análise de Dados</Footer>
    </Layout>
  );
};

export default LandingPage;
