import styled from 'styled-components'

export const KeywordsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  margin: 20px;
`

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.utterance};
  font-size: 18px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin: 20px 0;
  transition: 200ms;
  :hover {
    color: #fff;
  }
`

export const Checkbox = styled.input`
  width: 25px;
  height: 25px;
  margin: 0 10px;
`
