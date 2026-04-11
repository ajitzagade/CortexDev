import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BcShell } from '@/components/layout/bc-shell'
import { HomePage } from '@/pages/home'

export default function App() {
  return (
    <BrowserRouter>
      <BcShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BcShell>
    </BrowserRouter>
  )
}
