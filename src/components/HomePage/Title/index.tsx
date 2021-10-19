import { FC } from 'react'
import Link from 'next/link'
import { SimpleTitle, LinkText } from './styles'
import { PAGES } from '@utils/constants'

const Title: FC = () => {
  return (
    <SimpleTitle>
      Atividade de{' '}
      <Link href={PAGES.LINEKER_WEBSITE} passHref>
        <LinkText>Lineker</LinkText>
      </Link>
    </SimpleTitle>
  )
}

export default Title
