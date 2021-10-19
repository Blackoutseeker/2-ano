import { NextPage } from 'next'
import Head from 'next/head'
import PageContainer from '@components/PageContainer'
import Title from '@components/HomePage/Title'
import FlexWrapContainer from '@components/HomePage/FlexWrapContent'
import QuestionButton from '@components/HomePage/NavigationButton'
import { PAGES } from '@utils/constants'

const HomePage: NextPage = () => {
  return (
    <PageContainer>
      <Head>
        <title>Atividade de Lineker</title>
        <meta name="description" content="Questões do 2° ano" />
      </Head>
      <Title />
      <FlexWrapContainer>
        <QuestionButton href={PAGES.QUESTION_1} buttonText={'Questão 1'} />
        <QuestionButton href={PAGES.QUESTION_2} buttonText={'Questão 2'} />
        <QuestionButton href={PAGES.QUESTION_3} buttonText={'Questão 3'} />
        <QuestionButton href={PAGES.QUESTION_4} buttonText={'Questão 4'} />
        <QuestionButton href={PAGES.QUESTION_5} buttonText={'Questão 5'} />
      </FlexWrapContainer>
    </PageContainer>
  )
}

export default HomePage
