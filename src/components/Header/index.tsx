import React from 'react'
import { CartButton } from '../CartButton'

import { Container, Logo } from './styles'

export function Header() {
  return (
    <Container>
      <Logo>WeMovies</Logo>

      <CartButton />
    </Container>
  )
}
