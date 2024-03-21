import React, { useState, useEffect } from 'react';
import { Layout, Button, Table, message, Collapse } from 'antd';
import Nav from '../../components/Nav';

const { Content } = Layout;
const { Panel } = Collapse;

export const DataPage = () => {
  const [data, setData] = useState([]);
  const [tables, setTables] = useState([]);
  const [selectedTables, setSelectedTables] = useState([]);
  const [selectedColumns, setSelectedColumns] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const localStorageData = localStorage.getItem('tabelas_colunas');
    if (localStorageData) {
      const parsedData = JSON.parse(localStorageData);
      setData(parsedData);
      const tableNames = Object.keys(parsedData);
      setTables(tableNames);
    }
  }, []);

  const handleTableSelect = tableName => {
    setSelectedTables(prevSelectedTables => {
      if (!prevSelectedTables.includes(tableName)) {
        return [...prevSelectedTables, tableName];
      }
      return prevSelectedTables;
    });
    setSelectedColumns(prevSelectedColumns => {
      if (!prevSelectedColumns[tableName]) {
        return { ...prevSelectedColumns, [tableName]: [] };
      }
      return prevSelectedColumns;
    });
  };

  const handleColumnSelect = (tableName, columnName, isChecked) => {
    setSelectedColumns(prevSelectedColumns => ({
      ...prevSelectedColumns,
      [tableName]: isChecked
        ? [...prevSelectedColumns[tableName], columnName]
        : prevSelectedColumns[tableName].filter(col => col !== columnName),
    }));
  };

  const handlePostData = () => {
    if (selectedTables.length > 0) {
      selectedTables.forEach(selectedTable => {
        const postData = { table: selectedTable, columns: selectedColumns[selectedTable] };
        console.log('Dados a serem postados:', postData);
      });
      message.success('Dados selecionados enviados com sucesso!');
    } else {
      message.error('Por favor, selecione as tabelas para enviar.');
    }
  };

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const renderTables = () => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = Math.min(currentPage * itemsPerPage, tables.length);
    return tables.slice(startIdx, endIdx).map(table => (
      <Panel header={table} key={table}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {data[table].map(column => (
            <li key={column}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedColumns[table] && selectedColumns[table].includes(column)}
                  onChange={e => handleColumnSelect(table, column, e.target.checked)}
                />
                {column}
              </label>
            </li>
          ))}
        </ul>
   
      </Panel>
    ));
  };

  const columns = selectedTables.flatMap(tableName =>
    selectedColumns[tableName].map(column => ({
      title: column,
      dataIndex: column,
    }))
  );

  return (
    <Nav render={
      <Content style={{ padding: '50px', textAlign: 'center' }}>
        <h2>Selecione as tabelas e colunas a serem análisadas</h2>
        <Collapse accordion onChange={key => handleTableSelect(key)}>
          {renderTables()}
        </Collapse>
        <div style={{ marginTop: '20px' }}>
          <Button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
            Anterior
          </Button>
          <span style={{ margin: '0 10px' }}>{currentPage}</span>
          <Button
            disabled={tables.length <= currentPage * itemsPerPage}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Próximo
          </Button>
        </div>
        {selectedTables.map(selectedTable => (
          <div key={selectedTable}>
            <Button type="primary" style={{ marginTop: '26px' }} onClick={handlePostData}>
              Enviar Dados
            </Button>
            <h3>Tabela: {selectedTable}</h3>
            <Table
              dataSource={data[selectedTable]}
              columns={columns.filter(col => col.dataIndex && selectedColumns[selectedTable].includes(col.dataIndex))}
              bordered
              pagination={{ pageSize: 5 }}
            />
          </div>
        ))}
      </Content>} />
  );
};

export default DataPage;
