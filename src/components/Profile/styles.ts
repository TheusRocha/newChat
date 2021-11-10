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
export const ProfileImageContainer = styled.div`
  position: relative;
  height: 40px;
  flex-shrink: 0;
  ::after {
    content: '';
    position: absolute;
    background: ${({ theme }) => theme.colors.green[600]};
    border: 4px solid ${({ theme }) => theme.colors.gray[700]};
    height: 20px;
    width: 20px;
    border-radius: 10px;
    bottom: -4px;
    right: -4px;
  }
`

export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 20px;
`

export const ProfileName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
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
