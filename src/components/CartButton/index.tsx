import { Amount, Container, CustomLink, LeftSide } from './styles'

import { ReactComponent as Basket } from '../../assets/Basket.svg'
import { useCart } from '../../hooks/useCart'

export function CartButton() {
  const { cart } = useCart()

  return (
    <Container>
      <CustomLink to="/cart">
        <LeftSide>
          <div>Meu Carrinho</div>
          <Amount>{cart.length} items</Amount>
        </LeftSide>
        <Basket />
      </CustomLink>
    </Container>
  )
}
