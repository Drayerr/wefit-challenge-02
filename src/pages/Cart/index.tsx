import { ContentPlaceHolder } from '../../components/ContentPlaceHolder'
import { OrderBox } from '../../components/OrderBox'
import { Container } from './styles'

export function Cart() {
  const cartEmpty = false

  return (
    <Container>
      {/* Exibindo PlaceHolder caso não tenha conteúdo */}
      {cartEmpty ? (
        <ContentPlaceHolder
          actionButtonContent={'Voltar'}
          onClick={() => console.log('Teste')}
        />
      ) : (
        <OrderBox />
      )}
    </Container>
  )
}
