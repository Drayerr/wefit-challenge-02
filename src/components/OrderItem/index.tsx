import { Amount, Container, Product, SubTotal } from './styles'

import { ReactComponent as PlusButtonSvg } from '../../assets/PlusButton.svg'
import { ReactComponent as MinusButtonSvg } from '../../assets/MinusButton.svg'
import { ReactComponent as TrashSvg } from '../../assets/Trash.svg'

export function OrderItem() {
  return (
    <Container>
      <div>
        <img
          src="https://www.imagemhost.com.br/images/2022/07/10/spider-man.png"
          alt={'Homem Aranha'}
        />
      </div>

      <Product>
        <div>Homem Aranha</div>
        <div>R$ {'29,90'}</div>
      </Product>

      <Amount>
        <PlusButtonSvg />
        <input type="Amount" value={1} disabled />
        <MinusButtonSvg />
      </Amount>

      <SubTotal>R$ {'29,90'}</SubTotal>

      <TrashSvg />
    </Container>
  )
}
