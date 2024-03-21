import React from "react";
import "./App.css";
import AppRoutes from "./routes/routes";
import { ConfigProvider } from "antd";

export function App() {
  return (
    <div className="App">
      <ConfigProvider >
        <AppRoutes />
      </ConfigProvider>
    </div>
  );
}

export default App;
