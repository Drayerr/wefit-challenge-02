import { ContentPlaceHolder } from '../../components/ContentPlaceHolder'
import { Container } from './styles'

export function Cart() {
  return (
    <Container>
      {/* Exibindo PlaceHolder caso não tenha conteúdo */}
      <ContentPlaceHolder
        actionButtonContent={'Voltar'}
        onClick={() => console.log('Teste')}
      />
    </Container>
  )
}
