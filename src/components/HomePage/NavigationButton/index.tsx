import { FC } from 'react'
import Link from 'next/link'
import { Button } from './styles'

interface QuestionButtonProps {
  href: string
  buttonText: string
}

const QuestionButton: FC<QuestionButtonProps> = ({ href, buttonText }) => {
  return (
    <Link href={href} passHref>
      <Button href={href}>{buttonText}</Button>
    </Link>
  )
}

export default QuestionButton
