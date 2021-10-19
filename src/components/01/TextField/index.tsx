import { FC } from 'react'
import { Input } from './styles'

interface TextFieldProps {
  value: string
  setValue: (value: string) => void
  placeholder: string
}

const TextField: FC<TextFieldProps> = ({ value, setValue, placeholder }) => {
  return (
    <Input
      required
      placeholder={placeholder}
      value={value}
      onChange={({ target }) => setValue(target.value)}
    />
  )
}

export default TextField
