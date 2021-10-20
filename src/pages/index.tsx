import { NextPage } from 'next'
import Head from 'next/head'
import PageContainer from '@components/PageContainer'
import Title from '@components/HomePage/Title'
import FlexWrapContent from '@components/HomePage/FlexWrapContent'
import QuestionButton from '@root/src/components/HomePage/QuestionButton'
import { PAGES } from '@utils/constants'

const HomePage: NextPage = () => {
  return (
    <PageContainer>
      <Head>
        <title>Atividade de Lineker</title>
        <meta name="description" content="Questões do 2° ano" />
      </Head>
      <Title />
      <FlexWrapContent>
        <QuestionButton href={PAGES.QUESTION_1} buttonText={'Questão 1'} />
        <QuestionButton href={PAGES.QUESTION_2} buttonText={'Questão 2'} />
        <QuestionButton href={PAGES.QUESTION_3} buttonText={'Questão 3'} />
        <QuestionButton href={PAGES.QUESTION_4} buttonText={'Questão 4'} />
        <QuestionButton href={PAGES.QUESTION_5} buttonText={'Questão 5'} />
      </FlexWrapContent>
    </PageContainer>
  )
}

export default HomePage
