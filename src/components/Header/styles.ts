import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: collumn;

  justify-content: space-between;

  height: 72px;
  border: 1px solid black;
`

export const Logo = styled.div`
  display: inline-block;

  color: ${props => props.theme.textWhite};
  font-size: 1.25rem;

  margin: 24px 0;
  line-height: 27px;
`
