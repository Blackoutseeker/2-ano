import { useState, FormEvent } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { UTTERANCES, PAGES } from '@utils/constants'
import Head from 'next/head'
import PageContainer from '@components/PageContainer'
import Utterance from '@components/Utterance'
import FormCard from '@components/01/FormCard'
import TextField from '@components/01/TextField'
import SubmitButton from '@components/01/SubmitButton'
import Contact from '@root/src/models/contact'
import addNewContactIntoDatabase from '@database/contactActions'

const Question1Page: NextPage = () => {
  const router = useRouter()
  const [name, setName] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [city, setCity] = useState<string>('')

  const navigateToHomePage = async () => {
    await router.push(PAGES.HOMEPAGE)
  }

  const notifyUser = async () => {
    alert('Cadastro realizado com sucesso!')
    await navigateToHomePage()
  }

  const handleFormSubmittion = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const newContact: Contact = {
      name,
      address,
      phone,
      city
    }
    await addNewContactIntoDatabase(newContact, notifyUser)
  }

  return (
    <PageContainer>
      <Head>
        <title>Questão 1</title>
      </Head>
      <Utterance utteranceText={UTTERANCES.QUESTION_1} />
      <FormCard onSubmit={handleFormSubmittion}>
        <TextField value={name} setValue={setName} placeholder={'Nome'} />
        <TextField
          value={address}
          setValue={setAddress}
          placeholder={'Endereço'}
        />
        <TextField value={phone} setValue={setPhone} placeholder={'Telefone'} />
        <TextField value={city} setValue={setCity} placeholder={'Cidade'} />
        <SubmitButton />
      </FormCard>
    </PageContainer>
  )
}

export default Question1Page
