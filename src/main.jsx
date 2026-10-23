import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { Productos } from '../src/Components/Productos'
import './index.css'
import ProductosComponet from './Components/ProductosComponet'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductosComponet />
  </StrictMode>,
)
