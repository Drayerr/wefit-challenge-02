import { ActionButton, Container } from './styles'

import { ReactComponent as SuccessSvg } from '../../assets/Success.svg'

export function Success() {
  return (
    <Container>
      <div>Compra realizada com sucesso!</div>
      <SuccessSvg />
      <ActionButton>VOLTAR</ActionButton>
    </Container>
  )
}
