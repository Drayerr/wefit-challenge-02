import { ActionButton, Container, CustomLink } from './styles'

import { ReactComponent as NoContent } from '../../assets/NoContent.svg'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ContentPlaceHolderProps {
  actionButtonContent: ReactNode
}

export function ContentPlaceHolder({
  actionButtonContent,
}: ContentPlaceHolderProps) {
  return (
    <Container>
      {'Parece que não há nada por aqui :('}
      <NoContent />
      <CustomLink to="/">
        <ActionButton>{actionButtonContent}</ActionButton>
      </CustomLink>
    </Container>
  )
}
