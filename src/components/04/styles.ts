import styled from 'styled-components'

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.disabled};
  margin: 40px 0;
`

export const ItemList = styled.div`
  width: 100%;
  max-height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  min-height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.disabled};
  overflow: hidden;
  transition: 200ms;
  :hover {
    background-color: ${({ theme }) => theme.colors.dp4};
  }
  :hover > span {
    color: #fff;
  }
`

export const ItemText = styled.span`
  color: ${({ theme }) => theme.colors.disabled};
  font-size: 16px;
`
