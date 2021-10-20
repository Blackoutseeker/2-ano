import { useState, FormEvent } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import PageContainer from '@components/PageContainer'
import Utterance from '@components/Utterance'
import FormCard from '@components/02/FormCard'
import TextField from '@components/02/TextField'
import SubmitButton from '@components/02/SubmitButton'
import { UTTERANCES, PAGES } from '@utils/constants'

const Question2Page: NextPage = () => {
  const router = useRouter()
  const [keywords, setKeywords] = useState<string>('')

  const navigateToResultPage = async () => {
    await router.push({
      pathname: PAGES.QUESTION_2_RESULT,
      query: { keywords }
    })
  }

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const isKeywordsNotEmpty = keywords.length > 0
    if (isKeywordsNotEmpty) await navigateToResultPage()
  }

  const handleBlankSpace = () => {
    const keywordsHaveBlankSpaces = keywords.includes(' ')
    if (keywordsHaveBlankSpaces) {
      const keywordsWithoutBlankSpaces = keywords.replaceAll(' ', '')
      setKeywords(keywordsWithoutBlankSpaces)
    }
  }

  const handleEnterKeyDown = (event: any) => {
    const isEnterKeyPressed = event.key === 'Enter'
    if (isEnterKeyPressed) navigateToResultPage()
  }

  return (
    <PageContainer>
      <Head>
        <title>Questão 2</title>
      </Head>
      <Utterance utteranceText={UTTERANCES.QUESTION_2} />
      <FormCard onSubmit={handleFormSubmit}>
        <TextField
          value={keywords}
          setValue={setKeywords}
          label={'Insira 15 palavras chaves (separadas por vírgula)'}
          onKeyUp={handleBlankSpace}
          onKeyDown={handleEnterKeyDown}
        />
        <SubmitButton />
      </FormCard>
    </PageContainer>
  )
}

export default Question2Page
