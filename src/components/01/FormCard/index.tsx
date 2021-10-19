import { FC, FormEvent } from 'react'
import { Card } from './styles'

interface FormCardProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

const FormCard: FC<FormCardProps> = ({ onSubmit, children }) => {
  return <Card onSubmit={onSubmit}>{children}</Card>
}

export default FormCard
