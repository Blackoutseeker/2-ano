import styled from 'styled-components'

export const Card = styled.form`
  width: 80%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.dp1};
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.elevations.dp1};
`
