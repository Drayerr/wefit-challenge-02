import { Button } from '../Button'
import { Container, Price, Title } from './styles'

import { ReactComponent as Cart } from '../../assets/Cart.svg'
import { useCart } from '../../hooks/useCart'

interface MovieCardProps {
  id: number
  title: string
  price: number
  image: string
}

export function MovieCard({ title, price, image, id }: MovieCardProps) {
  const { addProduct, cart } = useCart()

  const amount = cart.find(c => c.id === id)?.amount || 0

  function handleAddProduct(id: number) {
    addProduct(id)
  }

  return (
    <Container>
      <img src={image} alt="Viúva Negra" />
      <Title>{title}</Title>
      <Price>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price)}
      </Price>
      <Button onClick={() => handleAddProduct(id)}>
        <span>
          <Cart />
          {amount}
        </span>
        ADICIONAR AO CARRINHO
      </Button>
    </Container>
  )
}
