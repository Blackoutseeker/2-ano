import styled from 'styled-components'

export const Button = styled.a`
  text-decoration: none;
  width: 160px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.disabled};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.disabled};
  font-size: 18px;
  margin: 20px;
  transition: 200ms;
  :hover {
    background-color: ${({ theme }) => theme.colors.disabled};
    border-color: transparent;
    color: #fff;
  }
`
