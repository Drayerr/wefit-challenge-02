import { Amount, Container, Product, SubTotal } from './styles'

import { ReactComponent as PlusButtonSvg } from '../../assets/PlusButton.svg'
import { ReactComponent as MinusButtonSvg } from '../../assets/MinusButton.svg'
import { ReactComponent as TrashSvg } from '../../assets/Trash.svg'

interface OrderItemProps {
  image: string
  title: string
  price: number
  amount: number
}

export function OrderItem({ amount, image, price, title }: OrderItemProps) {
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

      <TrashSvg />
    </Container>
  )
}
