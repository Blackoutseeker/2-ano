import styled from 'styled-components'

export const FlexWrapContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const Card = styled.div`
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

export const AccountsList = styled.div`
  width: 100%;
  max-height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 4px;
    background-color: ${({ theme }) => theme.colors.dp4};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`

export const Item = styled.div`
  width: 100%;
  display: flex;
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 14px;
  background-color: ${({ theme }) => theme.colors.dp3};
  border: 1px solid transparent;
  border-top-color: ${({ theme }) => theme.colors.disabled};
  border-bottom-color: ${({ theme }) => theme.colors.disabled};
  overflow: hidden;
  cursor: pointer;
  transition: 200ms;
  :hover {
    background-color: ${({ theme }) => theme.colors.disabled};
  }
  :hover > span {
    color: #fff;
  }
`

export const ItemText = styled.span`
  color: ${({ theme }) => theme.colors.utterance};
  font-size: 16px;
  margin: 10px 0;
`
