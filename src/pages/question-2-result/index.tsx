import { NextPage, NextPageContext } from 'next'
import Head from 'next/head'
import { KeywordsList, Label, Checkbox } from '@components/02-result/styles'
import PageContainer from '@components/PageContainer'

interface Question2ResultPageProps {
  keywords: string[]
}

const Question2ResultPage: NextPage<Question2ResultPageProps> = ({
  keywords
}) => {
  const renderCheckboxes = keywords.map((keyword: string, index: number) => (
    <Label key={index}>
      {keyword}
      <Checkbox type={'checkbox'} id={keyword} name={keyword} value={keyword} />
    </Label>
  ))

  return (
    <PageContainer>
      <Head>
        <title>Resultado da questão 2</title>
      </Head>
      <KeywordsList>{renderCheckboxes}</KeywordsList>
    </PageContainer>
  )
}

Question2ResultPage.getInitialProps = async (context: NextPageContext) => {
  const keywordsFromParam = context.query.keywords ?? 'Assembly'
  const keywords: string[] =
    typeof keywordsFromParam === 'string'
      ? keywordsFromParam.split(',')
      : keywordsFromParam

  return {
    keywords
  }
}

export default Question2ResultPage
