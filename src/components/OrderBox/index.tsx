import { OrderItem } from '../OrderItem'

import { useCart } from '../../hooks/useCart'

import { Container, FinishOrderButton, Footer, Header } from './styles'

export function OrderBox() {
  const { cart } = useCart()

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
        <FinishOrderButton>FINALIZAR PEDIDO</FinishOrderButton>
        <div>
          TOTAL
          <span>R$ 29,90</span>
        </div>
      </Footer>
    </Container>
  )
}
