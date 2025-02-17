import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {PlantacionesProviderWrapper} from "./context/plantaciones.context.jsx";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <PlantacionesProviderWrapper>
            <App />
          </PlantacionesProviderWrapper>
      </BrowserRouter>
  </StrictMode>,
)
