import styled from 'styles'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const UserContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 8px;
  height: 40px;
  border-radius: 4px;
  margin-bottom: 4px;
  :hover {
    background-color: ${({ theme }) => theme.colors.gray[700]};
  }
`
