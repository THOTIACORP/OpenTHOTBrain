import React, { useState } from 'react';
import { Input, Button } from 'antd';
import Nav from '../components/Nav';

export const DatabaseConfigForm = () => {
  const [databaseConfig, setDatabaseConfig] = useState({
    host: '',
    port: '',
    database: '',
    user: '',
    password: '',
    dialect: ''
  });

  const handleChange = (key, value) => {
    setDatabaseConfig({
      ...databaseConfig,
      [key]: value
    });
  };

  const handleSave = () => {
    fetch('http://localhost:5000/correlation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(databaseConfig)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Response from server:', data);
        alert("Conectado com sucesso")
        localStorage.setItem('tabelas_colunas', JSON.stringify(data.correlation));
        // window.location.href = './TipoAnalise'

      })
      .catch(error => {
        console.error('Error:', error);
        // Aqui você pode lidar com os erros de requisição
      });
  };

  return (
  
  <Nav render={<>

    <div style={styles.container}>
      <Input
        style={styles.input}
        placeholder="Host"
        value={databaseConfig.host}
        onChange={e => handleChange('host', e.target.value)}
      />
      <Input
        style={styles.input}
        placeholder="Porta"
        value={databaseConfig.port}
        onChange={e => handleChange('port', e.target.value)}
      />
      <Input
        style={styles.input}
        placeholder="Nome do banco de dados"
        value={databaseConfig.database}
        onChange={e => handleChange('database', e.target.value)}
      />
      <Input
        style={styles.input}
        placeholder="Usuário"
        value={databaseConfig.user}
        onChange={e => handleChange('user', e.target.value)}
      />
      <Input.Password
        style={styles.input}
        placeholder="Senha"
        value={databaseConfig.password}
        onChange={e => handleChange('password', e.target.value)}
      />
      <Input
        style={styles.input}
        placeholder="Dialect"
        value={databaseConfig.dialect}
        onChange={e => handleChange('dialect', e.target.value)}
      />
      <Button type="primary" onClick={handleSave}>Salvar</Button>
    </div>
  </>}/>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    marginBottom: 10,
  },
};

export default DatabaseConfigForm;
