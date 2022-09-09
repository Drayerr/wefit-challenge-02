import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<div>Home</div>} />
          <Route path="cart" element={<div>Cart</div>} />
          <Route path="success" element={<div>Cart</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
