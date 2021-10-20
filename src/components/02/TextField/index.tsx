import { FC } from 'react'
import { Label, Input } from './styles'

interface TextFieldProps {
  value: string
  setValue: (value: string) => void
  label: string
  onKeyUp?: () => void
  onKeyDown?: (key: any) => void
}

const TextField: FC<TextFieldProps> = ({
  value,
  setValue,
  label,
  onKeyUp,
  onKeyDown
}) => {
  return (
    <Label>
      {label}
      <Input
        required
        value={value}
        onChange={({ target }) => setValue(target.value)}
        onKeyUp={onKeyUp}
        onKeyDown={onKeyDown}
      />
    </Label>
  )
}

export default TextField
