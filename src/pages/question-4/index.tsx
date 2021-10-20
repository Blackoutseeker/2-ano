import { useState } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { ColumnContainer, Divider, ItemList, Item, ItemText } from './styles'
import PageContainer from '@components/PageContainer'
import TextField from '@components/02/TextField'
import Utterance from '@components/Utterance'
import { UTTERANCES } from '@utils/constants'

const Question4Page: NextPage = () => {
  const [airplanes, setAirplanes] = useState<string[] | null>(null)
  const [addInputValue, setAddInputValue] = useState<string>('')
  const [searchInputValue, setSearchInputValue] = useState<string>('')

  const addNewAirplane = () => {
    const newAirplane = airplanes
      ? [...airplanes, addInputValue]
      : [addInputValue]
    setAirplanes(newAirplane)
  }

  const handleEnterKeyDown = (event: any) => {
    const isEnterKeyPressed = event.key === 'Enter'
    if (isEnterKeyPressed) addNewAirplane()
  }

  const renderAirplanesAdded = airplanes?.map(
    (airplane: string, index: number) => (
      <Item key={index}>
        <ItemText>{airplane}</ItemText>
      </Item>
    )
  )

  const airplanesFiltered = airplanes?.filter(airplane =>
    airplane.toLowerCase().includes(searchInputValue.toLowerCase())
  )

  const renderAirplanesFiltered = airplanesFiltered?.map(
    (airplane: string, index: number) => (
      <Item key={index}>
        <ItemText>{airplane}</ItemText>
      </Item>
    )
  )

  return (
    <PageContainer>
      <Head>
        <title>Questão 4</title>
      </Head>
      <Utterance utteranceText={UTTERANCES.QUESTION_4} />
      <ColumnContainer>
        <TextField
          value={addInputValue}
          setValue={setAddInputValue}
          label={'Adicionar modelo de avião'}
          onKeyDown={handleEnterKeyDown}
        />
        <ItemList>{renderAirplanesAdded}</ItemList>
        <Divider />
        <TextField
          value={searchInputValue}
          setValue={setSearchInputValue}
          label={'Buscar por modelo de avião'}
        />
        {searchInputValue !== '' ? (
          <ItemList>{renderAirplanesFiltered}</ItemList>
        ) : null}
      </ColumnContainer>
    </PageContainer>
  )
}

export default Question4Page
