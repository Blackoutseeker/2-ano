import styled from 'styled-components'

export const RemoveButton = styled.div`
  width: 80%;
  max-width: 400px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.disabled};
  border-radius: 4px;
  margin: 10px 0;
  padding: 0 14px;
  cursor: pointer;
  transition: 200ms;
  :hover {
    background-color: ${({ theme }) => theme.colors.disabled};
    border-color: transparent;
  }
  :hover > span {
    color: #fff;
  }
  :last-child {
    margin-bottom: 40px;
  }
`

export const RemoveButtonText = styled.span`
  color: ${({ theme }) => theme.colors.disabled};
  font-size: 16px;
  transition: 200ms;
`
