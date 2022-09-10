import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 4px;

  margin-top: 30px;

  padding: 62px;

  background: ${props => props.theme.containerBackgroundColor};

  svg {
    margin-top: 50px;
  }
`
