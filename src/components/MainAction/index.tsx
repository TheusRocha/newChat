import Bubble from 'components/Bubble'
import { ReactNode } from 'react'
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
    {!!bubbleCount && <Bubble count={bubbleCount} />}
  </S.Wrapper>
)

export default MainAction
