import styled from 'styles'
import { FiMoreHorizontal } from 'react-icons/fi'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 72px;
  padding: 16px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.gray[700]};
`

export const ProfileName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  line-height: 90%;
`

export const ProfileNameContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  flex-direction: column;
  padding: 2px 16px;
`

export const MoreIcon = styled(FiMoreHorizontal)`
  cursor: pointer;
`

export const ProfileStatusContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ProfileStatusText = styled.div`
  color: ${({ theme }) => theme.colors.gray[500]};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 500;
  line-height: 90%;
`
