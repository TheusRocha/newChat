import styled from 'styles'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 644px;
  padding: 80px 0 0 0;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 500;
`
export const TitleContainer = styled.div`
  width: 380px;
  margin-bottom: 38px;
  & > *:not(:last-child) {
    margin-bottom: 12px;
  }
  font-weight: normal;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 380px;

  & > *:not(:last-child) {
    margin-bottom: 32px;
  }
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: 500;
`

export const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.gray[400]};
`

export const Input = styled.input`
  height: 52px;
  width: 100%;
  border-radius: 26px;
  background-color: ${({ theme }) => theme.colors.gray[700]};
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.gray[200]};
  padding: 0 24px;
`

export const LoginButton = styled.button`
  height: 52px;
  width: 100%;
  border-radius: 26px;
  font-weight: Bold;
  background-color: ${({ theme }) => theme.colors.blue[600]};
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.gray[200]};
`

export const Label = styled.label`
  & > *:last-child {
    margin-top: 8px;
  }
`
