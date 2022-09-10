import { OrderItem } from '../OrderItem'
import { Container, FinishOrderButton, Footer, Header } from './styles'

export function OrderBox() {
  return (
    <Container>
      <Header>
        <div>PRODUTO</div>
        <div>QTD</div>
        <div>SUBTOTAL</div>
      </Header>
      <OrderItem />
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
