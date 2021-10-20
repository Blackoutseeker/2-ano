import styled from 'styled-components'

export const Button = styled.button`
  outline: none;
  width: 100%;
  height: 60px;
  margin-top: 10px;
  background-color: transparent;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.disabled};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  cursor: pointer;
  transition: 200ms;
  :hover {
    background-color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`
