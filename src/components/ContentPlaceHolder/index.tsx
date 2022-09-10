import { ActionButton, Container } from './styles'

import { ReactComponent as NoContent } from '../../assets/NoContent.svg'
import { ReactNode } from 'react'

interface ContentPlaceHolderProps {
  actionButtonContent: ReactNode
  onClick: () => void
}

export function ContentPlaceHolder({
  actionButtonContent,
  onClick,
}: ContentPlaceHolderProps) {
  return (
    <Container>
      {'Parece que não há nada por aqui :('}
      <NoContent />
      <ActionButton onClick={onClick}>{actionButtonContent}</ActionButton>
    </Container>
  )
}
