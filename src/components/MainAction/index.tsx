import { ReactNode } from 'react'
import { Tag } from '@chakra-ui/react'
import * as S from './styles'

interface MainActionProps {
  icon: ReactNode
  text: ReactNode
  bubbleCount?: number
}

const MainAction = ({ icon, text, bubbleCount }: MainActionProps) => (
  <S.Wrapper>
    <S.TitleContainer>
      {icon}
      <S.MainActionText>{text}</S.MainActionText>
    </S.TitleContainer>
    {!!bubbleCount && <Tag borderRadius="full"> {bubbleCount} </Tag>}
  </S.Wrapper>
)

export default MainAction
