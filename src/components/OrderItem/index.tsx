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
  const { removeProduct, updateProductAmount } = useCart()

  function amountIncrement() {
    const newAmount = amount + 1
    updateProductAmount({ productId: id, amount: newAmount })
  }

  function amountDecrement() {
    let newAmount = amount - 1
    if (newAmount < 1) {
      newAmount = 1
    }
    updateProductAmount({ productId: id, amount: newAmount })
  }

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
        <GhostButton onClick={amountDecrement} disabled={amount < 2}>
          <MinusButtonSvg />
        </GhostButton>
        <input type="Amount" value={amount} disabled />
        <GhostButton onClick={amountIncrement}>
          <PlusButtonSvg />
        </GhostButton>
      </Amount>

      <SubTotal>R$ {(price * amount).toFixed(2)}</SubTotal>

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
