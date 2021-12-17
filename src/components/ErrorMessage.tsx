import styled from 'styles'

const ErrorMessageContainer = styled.span`
  color: ${({ theme }) => theme.colors.red[400]};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`

const ErrorMessage = ({
  fieldName,
  errors
}: {
  fieldName: string
  errors: Record<string, { message: string }>
}) => (
  <ErrorMessageContainer>{errors[fieldName]?.message}</ErrorMessageContainer>
)
export default ErrorMessage
