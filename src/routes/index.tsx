import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { Home } from '../pages/Home'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<div>Cart</div>} />
          <Route path="success" element={<div>Cart</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
