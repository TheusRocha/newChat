import { getUser } from 'common/recoil/selectors'
import Main from 'components/PageLayouts/Main'
import { useRecoilValue } from 'recoil'

export default function MainPage() {
  const user = useRecoilValue(getUser)

  if (!user) return null

  return <Main user={user} />
}
