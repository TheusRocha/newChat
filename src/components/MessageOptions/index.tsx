import { FiMoreHorizontal } from 'react-icons/fi'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import * as S from './styles'

const MessageOptions = ({ isMe }: { isMe: boolean }) => {
  return (
    <Menu>
      <MenuButton style={{ height: '100%' }}>
        <S.Wrapper className="message-menu-button" isMe={isMe}>
          <FiMoreHorizontal size={16} />
        </S.Wrapper>
      </MenuButton>
      <MenuList>
        <MenuItem>teste</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default MessageOptions
