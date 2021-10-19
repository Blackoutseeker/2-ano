import { FC } from 'react'
import { UtteranceTitle } from './styles'

interface UtteranceProps {
  utteranceText: string
}

const Utterance: FC<UtteranceProps> = ({ utteranceText }) => {
  return <UtteranceTitle>{utteranceText}</UtteranceTitle>
}

export default Utterance
