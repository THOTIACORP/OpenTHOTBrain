import React, { useState } from 'react';
import { Input, Button } from 'antd';


export const DatabaseConfigForm = () => {
  const [databaseConfig, setDatabaseConfig] = useState({
    host: '',
    port: '',
    databaseName: '',
    username: '',
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
    // Aqui você pode enviar os dados do formulário para onde precisar
    console.log('Database Configuration:', databaseConfig);
    // Você pode fazer chamadas de API, salvá-los localmente, etc.
  };

  return (
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
        value={databaseConfig.databaseName}
        onChange={e => handleChange('databaseName', e.target.value)}
      />
      <Input
        style={styles.input}
        placeholder="Usuário"
        value={databaseConfig.username}
        onChange={e => handleChange('username', e.target.value)}
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
