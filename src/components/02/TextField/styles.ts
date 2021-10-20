import styled from 'styled-components'

export const Label = styled.label`
  width: 100%;
  color: ${({ theme }) => theme.colors.utterance};
  font-size: 20px;
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  outline: none;
  width: 100%;
  max-width: 500px;
  height: 60px;
  color: #fff;
  font-size: 18px;
  background-color: transparent;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.disabled};
  border-radius: 4px;
  margin: 20px 0;
  padding: 0px 14px;
  transition: 200ms;
  ::placeholder {
    color: ${({ theme }) => theme.colors.disabled};
  }
  :focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
  :hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`
