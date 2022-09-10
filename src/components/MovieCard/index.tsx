import { Button } from '../Button'
import { Container, Price, Title } from './styles'

import { ReactComponent as Cart } from '../../assets/Cart.svg'

export function MovieCard() {
  return (
    <Container>
      <img
        src="https://www.imagemhost.com.br/images/2022/07/10/viuva-negra.png"
        alt="Viúva Negra"
      />
      <Title>Título no centro</Title>
      <Price>R$ 9,99</Price>
      <Button>
        <span>
          <Cart />1
        </span>
        ADICIONAR AO CARRINHO
      </Button>
    </Container>
  )
}
