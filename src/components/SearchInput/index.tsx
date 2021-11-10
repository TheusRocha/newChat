import { username } from 'common/recoil/atoms'
import { useRecoilState } from 'recoil'
import { Input } from '@chakra-ui/react'

const SearchInput = () => {
  const [name, setName] = useRecoilState(username)

  return (
    <Input
      value={name}
      variant="filled"
      size="lg"
      onChange={(e) => setName(e.target.value)}
      placeholder="Encontre qualquer coisa"
    />
  )
}

export default SearchInput
