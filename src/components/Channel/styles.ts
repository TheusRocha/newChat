import styled from 'styles'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const ChannelHeader = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 6px 8px;
  border-radius: 8px;
  :hover {
    background: ${({ theme }) => theme.colors.gray[700]};
  }
`

export const ChannelText = styled.span`
  margin-left: 8px;
  margin-bottom: 1px;
  font-size: ${({ theme }) => theme.fontSizes.xl};
`

export const VoiceChannelUser = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 4px 6px;
  margin-left: 24px;
  border-radius: 8px;
  :hover {
    background: ${({ theme }) => theme.colors.gray[700]};
  }
`

export const UserImage = styled.img`
  height: 24px;
  width: 24px;
  border-radius: 12px;
`
