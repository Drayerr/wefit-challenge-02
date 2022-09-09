import styled from 'styled-components'

export const Container = styled.div`
  display: inline-block;
`

export const LeftSide = styled.div`
  flex: 1;

  color: ${props => props.theme.textWhite};
  font-weight: 600;
  line-height: 19px;
`

export const Amount = styled.div`
  color: ${props => props.theme.secondaryText};
  line-height: 19px;
  font-size: 0.75rem;
`
