import { BrowserRouter, Route, Routes } from "react-router-dom";
// Para importar páginas use a mesma sequência de nome das pastas para facilitar à correção
import {
  LandingPage,
  DatabaseConfigForm,
  NumericalAnalysis,
  TextAnalysisPage,
  DataPage,
  TipoAnalise,
  PricingPage,
  TipoDado

} from "../pages/index.js"

const AppRoutes = () => {
  return (
    <BrowserRouter>
  
        <Routes>
          {/* PÚBLICAS colocar na sequencia de nome das pastas facilitar correção*/}
          <Route exact path="/" element={<LandingPage />} />
          
          <Route exact path="/TipoDado" element={<TipoDado />} />
          <Route exact path="/DatabaseConfigForm" element={<DatabaseConfigForm />} />
          <Route exact path="/NumericalAnalysis" element={<NumericalAnalysis />} />
          <Route exact path="/TextAnalysisPage" element={<TextAnalysisPage />} />
          <Route exact path="/DataPage" element={<DataPage />} />
          <Route exact path="/TipoAnalise" element={<TipoAnalise />} />
          <Route exact path="/PricingPage" element={<PricingPage />} />
        
        </Routes>
      
    </BrowserRouter>
  )
}
export default AppRoutes