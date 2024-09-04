import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RecoilRoot } from 'recoil'
import Add from './Add.tsx'
import TodoCounter from './TodoCounter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecoilRoot>
      <TodoCounter />
      <App />
      <Add />
    </RecoilRoot>
  </StrictMode>,
)
