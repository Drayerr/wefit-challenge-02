import { Route, Routes, BrowserRouter } from 'react-router-dom'

import { MainLayout } from '../layouts/MainLayout'
import { Cart } from '../pages/Cart'
import { Home } from '../pages/Home'
import { Success } from '../pages/Success'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="success" element={<Success />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
