import { ActionButton, Container, CustomLink } from './styles'

import { ReactComponent as SuccessSvg } from '../../assets/Success.svg'

export function Success() {
  return (
    <Container>
      <div>Compra realizada com sucesso!</div>
      <SuccessSvg />
      <CustomLink to="/">
        <ActionButton>VOLTAR</ActionButton>
      </CustomLink>
    </Container>
  )
}
