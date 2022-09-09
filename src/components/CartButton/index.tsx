import { Amount, Container, LeftSide } from './styles'

import { ReactComponent as Basket } from '../../assets/Basket.svg'

export function CartButton() {
  return (
    <Container>
      <LeftSide>
        <div>Meu Carrinho</div>
        <Amount>0 items</Amount>
      </LeftSide>
      <Basket />
    </Container>
  )
}
