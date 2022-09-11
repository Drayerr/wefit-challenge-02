import { OrderItem } from '../OrderItem'

import { useCart } from '../../hooks/useCart'

import { useNavigate } from 'react-router-dom'

import { Container, FinishOrderButton, Footer, Header } from './styles'

export function OrderBox() {
  const { cart, clearCart } = useCart()
  const navigate = useNavigate()
  const total = cart.reduce((sum, item) => {
    return sum + item.amount * item.price
  }, 0)

  function finishOrder() {
    clearCart()
    // O Replace faz sumir do topo do navegador a opção de voltar à página anterior
    navigate('/success', { replace: true })
  }

  return (
    <Container>
      <Header>
        <div>PRODUTO</div>
        <div>QTD</div>
        <div>SUBTOTAL</div>
      </Header>
      {cart.map(item => (
        <OrderItem key={item.id} {...item} />
      ))}

      <Footer>
        <FinishOrderButton onClick={finishOrder}>
          FINALIZAR PEDIDO
        </FinishOrderButton>
        <div>
          TOTAL
          <span>R$ {total.toFixed(2)}</span>
        </div>
      </Footer>
    </Container>
  )
}
