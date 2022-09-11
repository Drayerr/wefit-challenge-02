import { Amount, Container, GhostButton, Product, SubTotal } from './styles'

import { ReactComponent as PlusButtonSvg } from '../../assets/PlusButton.svg'
import { ReactComponent as MinusButtonSvg } from '../../assets/MinusButton.svg'
import { ReactComponent as TrashSvg } from '../../assets/Trash.svg'

import { useCart } from '../../hooks/useCart'
interface OrderItemProps {
  id: number
  image: string
  title: string
  price: number
  amount: number
}

export function OrderItem({ amount, image, price, title, id }: OrderItemProps) {
  const { removeProduct } = useCart()

  return (
    <Container>
      <div>
        <img src={image} alt={title} />
      </div>

      <Product>
        <div>{title}</div>
        <div>R$ {price}</div>
      </Product>

      <Amount>
        <PlusButtonSvg />
        <input type="Amount" value={amount} disabled />
        <MinusButtonSvg />
      </Amount>

      <SubTotal>R$ {price * amount}</SubTotal>

      <GhostButton
        onClick={() => {
          removeProduct(id)
        }}
      >
        <TrashSvg />
      </GhostButton>
    </Container>
  )
}
