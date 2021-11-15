import { MdKeyboardArrowDown } from 'react-icons/md'
import styled, { css } from 'styles'

export const Wrapper = styled.div``

export const Header = styled.div`
  display: flex;
  height: 24px;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.gray[500]};
  padding: 2px 0;
  margin-bottom: 4px;
`

export const Panel = styled.div<{ $collapsed: boolean }>`
  overflow: hidden;
  transition: height 0.1s;
  height: calc(100% - 28px);

  ${({ $collapsed }) =>
    $collapsed &&
    css`
      height: 0px;
    `}
`
export const CollapsedArrow = styled(MdKeyboardArrowDown)<{
  $collapsed: boolean
}>`
  cursor: pointer;
  transition: transform 0.1s;
  ${({ $collapsed }) =>
    $collapsed &&
    css`
      transform: rotate(-90deg);
    `}
`
