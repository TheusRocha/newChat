import { useQuery } from '@apollo/client'
import { ME } from 'common/graphql/queries'
import Main from 'components/PageLayouts/Main'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function MainPage() {
  const router = useRouter()
  const { error, data } = useQuery(ME)

  useEffect(() => {
    error && router.push('/')
  }, [error, router])

  if (!data?.me) {
    return null
  }

  return <Main user={data.me} />
}
