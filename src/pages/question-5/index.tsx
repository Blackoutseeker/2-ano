import { FormEvent, useState, useEffect, useCallback } from 'react'
import { NextPage } from 'next'
import Client from '@models/client'
import Head from 'next/head'
import Image from 'next/image'
import { FlexWrapContainer, Card, AccountsList, Item, ItemText } from './styles'
import PageContainer from '@components/PageContainer'
import FormCard from '@components/01/FormCard'
import TextField from '@components/01/TextField'
import SubmitButton from '@components/01/SubmitButton'
import QuestionButton from '@components/HomePage/QuestionButton'
import Utterance from '@components/Utterance'
import { UTTERANCES, PAGES } from '@utils/constants'
import firebase from '@utils/firebase'
import {
  addNewClientIntoDatabase,
  deleteClientFromDatabase
} from '@database/actions'
import CloseIcon from '@assets/icons/close.svg'

const Question5Page: NextPage = () => {
  const [accountNumber, setAccountNumber] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [balance, setBalance] = useState<string>('')
  const [searchInputValue, setSearchInputValue] = useState<string>('')
  const [clients, setClients] = useState<Client[] | null>(null)
  const databaseClientsRef = firebase.database().ref('clients')

  const notifyClient = () => {
    alert('Cliente adicionado com sucesso!')
  }

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const newClient: Client = {
      accountNumber,
      name,
      balance
    }

    addNewClientIntoDatabase(newClient, notifyClient)
  }

  const clientsFiltered = clients?.filter(client =>
    client.name.toLowerCase().includes(searchInputValue.toLowerCase())
  )

  const renderClientsFiltered = clientsFiltered?.map(
    (client: Client, index: number) => (
      <Item
        key={index}
        onClick={() => {
          deleteClientFromDatabase(client)
        }}
      >
        <ItemText>
          {client.name} <br />
          Conta: {client.accountNumber} - Saldo: {client.balance}
        </ItemText>
        <Image src={CloseIcon} alt={'Excluir'} />
      </Item>
    )
  )

  const getClientsFromDatabase = useCallback(() => {
    const getClients: Client[] = []
    databaseClientsRef.on('value', snapshot => {
      snapshot.forEach(childSnapshot => {
        const client = childSnapshot.val()
        getClients.push(client)
      })
      setClients(getClients)
    })
  }, [databaseClientsRef])

  useEffect(() => {
    getClientsFromDatabase()
    return () => {
      databaseClientsRef.off()
    }
  }, [getClientsFromDatabase, databaseClientsRef])

  return (
    <PageContainer>
      <Head>
        <title>Questão 5</title>
      </Head>
      <Utterance utteranceText={UTTERANCES.QUESTION_5} />
      <FlexWrapContainer>
        <FormCard onSubmit={handleFormSubmit}>
          <TextField
            value={accountNumber}
            setValue={setAccountNumber}
            placeholder={'Número da conta'}
          />
          <TextField
            value={name}
            setValue={setName}
            placeholder={'Nome Completo'}
          />
          <TextField
            value={balance}
            setValue={setBalance}
            placeholder={'Saldo'}
          />
          <SubmitButton />
        </FormCard>
        <Card>
          <TextField
            value={searchInputValue}
            setValue={setSearchInputValue}
            placeholder={'Consultar cliente'}
          />
          {searchInputValue !== '' ? (
            <AccountsList>{renderClientsFiltered}</AccountsList>
          ) : null}
        </Card>
      </FlexWrapContainer>
      <QuestionButton href={PAGES.GITHUB_USER_PROFILE} buttonText={'Sobre'} />
    </PageContainer>
  )
}

export default Question5Page
