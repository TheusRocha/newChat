import { gql } from '@apollo/client'

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id: _id
      username
      email
      token
    }
  }
`
export const REGISTER = gql`
  mutation Register($email: String!, $password: String!, $username: String!) {
    register(email: $email, password: $password, username: $username) {
      id: _id
      username
      email
      token
    }
  }
`

export const SEND_MESSAGE = gql`
  mutation SendMessage(
    $text: String!
    $senderUserId: String!
    $sessionId: String!
    $sendAt: String!
    $quoteMessageId: String
  ) {
    sendMessage(
      text: $text
      senderUserId: $senderUserId
      sessionId: $sessionId
      sendAt: $sendAt
      quoteMessageId: $quoteMessageId
    ) {
      id: _id
      senderUser {
        email
        username
        id: _id
      }
      text
      sendAt
      quotedMessage {
        id: _id
      }
    }
  }
`
