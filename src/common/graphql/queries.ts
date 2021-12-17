import { gql } from '@apollo/client'

export const SESSIONS = gql`
  query Query($me: String!) {
    sessions(me: $me) {
      id: _id
      name
      isPrivate
      users {
        id: _id
        email
        username
      }
    }
  }
`

export const MESSAGES = gql`
  query Query($sessionId: String!) {
    messages(sessionId: $sessionId) {
      id: _id
      text
      senderUser {
        id: _id
        email
        username
      }
      sendAt
      quotedMessage {
        id: _id
        text
        senderUser {
          id: _id
          email
          username
        }
        sendAt
      }
    }
  }
`
export const ME = gql`
  query Query {
    me {
      id: _id
      email
      username
    }
  }
`
