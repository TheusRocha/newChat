import styled from 'styles'

export const Wrapper = styled.div<{ $size: number }>`
  position: relative;
  height: ${({ $size }) => $size}px;
  flex-shrink: 0;
  ::after {
    content: '';
    position: absolute;
    background: ${({ theme }) => theme.colors.green[500]};
    height: ${({ $size }) => $size / 3.2}px;
    width: ${({ $size }) => $size / 3.2}px;
    border-radius: ${({ $size }) => $size / 6.4}px;
    bottom: 0;
    right: 0;
  }
`

export const StyledImage = styled.img<{ $size: number }>`
  height: ${({ $size }) => $size}px;
  border-radius: ${({ $size }) => $size / 2}px;
`
