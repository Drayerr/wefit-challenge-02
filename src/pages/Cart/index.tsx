import { ContentPlaceHolder } from '../../components/ContentPlaceHolder'
import { OrderBox } from '../../components/OrderBox'
import { Container } from './styles'

export function Cart() {
  const cartEmpty = true

  return (
    <Container>
      {/* Exibindo PlaceHolder caso não tenha conteúdo */}
      {cartEmpty ? (
        <ContentPlaceHolder actionButtonContent={'Voltar'} />
      ) : (
        <OrderBox />
      )}
    </Container>
  )
}
