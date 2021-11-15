import ContentEditable from 'components/ContentEditable'
import { RiSendPlaneFill } from 'react-icons/ri'
import styled from 'styles'

export const Wrapper = styled.div`
  position: relative;
  margin: 24px 48px;
`

export const UserInputField = styled(ContentEditable)`
  display: flex;
  align-items: center;
  min-height: 48px;
  background: ${({ theme }) => theme.colors.gray[800]};
  padding: 14px 52px;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  word-wrap: break-word;
  outline: none;
  flex-shrink: 0;
`

export const SendMessageIcon = styled(RiSendPlaneFill)`
  cursor: pointer;
  position: absolute;
  bottom: 12px;
  right: 14px;
  font-size: 24px;

  &.sending {
    animation: sampleanimation 0.5s forwards;
  }

  @keyframes sampleanimation {
    0% {
      bottom: 12px;
      right: 14px;
      font-size: 24px;
    }
    100% {
      bottom: 44px;
      right: 4px;
      font-size: 0px;
    }
  }
`
