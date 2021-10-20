import { useState } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { RemoveButton, RemoveButtonText } from './styles'
import PageContainer from '@components/PageContainer'
import Utterance from '@components/Utterance'
import { UTTERANCES } from '@utils/constants'
import CloseIcon from '@assets/icons/close.svg'

const Question3Page: NextPage = () => {
  const defaultServices: string[] = [
    'Desenvolvimento Desktop',
    'Desenvolvimento Mobile',
    'Desenvolvimento Web',
    'Criar uma Style Guide',
    'Elaborar Briefing',
    'Elaborar Wireframes',
    'Elaborar protótipos Hi-Fi',
    'Fazer deploy',
    'Fazer manutenção',
    'Modelar dados'
  ]
  const [services, setServices] = useState<string[]>(defaultServices)

  const unset = (serviceToRemoveIndex: number) => {
    const newServices = services.filter(
      (_, serviceIndex) => serviceIndex !== serviceToRemoveIndex
    )
    setServices(newServices)
  }

  const renderServices = services.map((service: string, index: number) => (
    <RemoveButton
      key={index}
      onClick={() => {
        unset(index)
      }}
      title={'Remover'}
    >
      <RemoveButtonText>{service}</RemoveButtonText>
      <Image src={CloseIcon} alt={'Remover'} width={15} height={15} />
    </RemoveButton>
  ))

  return (
    <PageContainer>
      <Head>
        <title>Questão 3</title>
      </Head>
      <Utterance utteranceText={UTTERANCES.QUESTION_3} />
      {renderServices}
    </PageContainer>
  )
}

export default Question3Page
