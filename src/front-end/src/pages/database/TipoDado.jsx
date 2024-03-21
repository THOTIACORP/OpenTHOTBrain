import React from 'react';
import { Layout, Button, Card, Divider, List } from 'antd';
import { FileOutlined, DatabaseOutlined } from '@ant-design/icons'; // Importe os ícones
import Nav from '../../components/Nav';

const { Content } = Layout;

export const TipoDado = () => {

  // Tipos de arquivos que o Pyachemi pode manipular
  const tiposArquivos = [
    { nome: 'CSV', descricao: 'Comma-separated values', icon: <FileOutlined /> },
    { nome: 'Excel', descricao: 'Microsoft Excel', icon: <FileOutlined /> },
    { nome: 'JSON', descricao: 'JavaScript Object Notation', icon: <FileOutlined /> },
    { nome: 'Parquet', descricao: 'Apache Parquet', icon: <FileOutlined /> },
    { nome: 'PDF', descricao: 'Portable Document Format', icon: <FileOutlined /> },
    { nome: 'XML', descricao: 'Extensible Markup Language', icon: <FileOutlined /> },
    { nome: 'HTML', descricao: 'Hypertext Markup Language', icon: <FileOutlined /> },
    { nome: 'SQL', descricao: 'Structured Query Language', icon: <FileOutlined /> },
    { nome: 'AVRO', descricao: 'Apache AVRO', icon: <FileOutlined /> },
    { nome: 'ORC', descricao: 'Optimized Row Columnar', icon: <FileOutlined /> },
 ];

  // Tipos de banco de dados que o Pyachemi pode manipular
  const tiposBancoDados = [
    { nome: 'MySQL', descricao: 'MySQL Database', icon: <DatabaseOutlined /> },
    { nome: 'PostgreSQL', descricao: 'PostgreSQL Database', icon: <DatabaseOutlined /> },
    { nome: 'SQLite', descricao: 'SQLite Database', icon: <DatabaseOutlined /> },
    { nome: 'SQL Server', descricao: 'Microsoft SQL Server Database', icon: <DatabaseOutlined /> },
    { nome: 'Oracle', descricao: 'Oracle Database', icon: <DatabaseOutlined /> },
    { nome: 'MongoDB', descricao: 'MongoDB Document Database', icon: <DatabaseOutlined /> },
    { nome: 'Cassandra', descricao: 'Apache Cassandra Database', icon: <DatabaseOutlined /> },
    { nome: 'DynamoDB', descricao: 'Amazon DynamoDB Database', icon: <DatabaseOutlined /> },
    { nome: 'Redis', descricao: 'Redis Key-value Database', icon: <DatabaseOutlined /> },
    { nome: 'Neo4j', descricao: 'Neo4j Graph Database', icon: <DatabaseOutlined /> },
    { nome: 'IBM Db2', descricao: 'IBM Db2 Database', icon: <DatabaseOutlined /> },
    { nome: 'IBM Informix', descricao: 'IBM Informix Database', icon: <DatabaseOutlined /> },

  ];

  return (
    <Nav render={
      <Content style={{ padding: '50px', textAlign: 'center' }}>
        <h2>Escolha o tipo de dados</h2>
        <Divider />
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
          <Card
            title={<><FileOutlined /> Arquivos</>}
            style={{ width: 300, marginRight: '20px', border: '1px solid #e8e8e8' }}
          >
            <List
              dataSource={tiposArquivos} // Mostra apenas os três primeiros itens
              renderItem={item => (
                <List.Item style={{textAlign:'left'}}>
                  {item.icon} {item.nome}
                </List.Item>
              )}
              pagination={{ // Adiciona paginação
                pageSize: 4, // Número de itens por página
              }}
            />
            <Button type="primary" style={{ marginTop: '20px' }}>Selecionar</Button>
          </Card>
          <Card
            title={<><DatabaseOutlined /> Banco de Dados</>}
            style={{ width: 300, marginRight: '20px', border: '1px solid #e8e8e8' }}
          >
            <List
              dataSource={tiposBancoDados} // Mostra apenas os três primeiros itens
              renderItem={item => (
                <List.Item style={{textAlign:'left'}}>
                  {item.icon} {item.nome}
                </List.Item>
              )}
              pagination={{ // Adiciona paginação
                pageSize: 4, // Número de itens por página
              }}
            />
            <Button type="primary" style={{ marginTop: '20px' }} href='./DatabaseConfigForm'>Selecionar</Button>
          </Card>
        </div>
      </Content>
    }/>
  );
};

export default TipoDado;
