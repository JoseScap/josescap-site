import client from '@/graphql/client'
import { resumeQuery, ResumeType, ResumeQueryType } from '@/graphql/resume'
import { Hero } from '@/components'

interface HomeProps {
  resumes: ResumeType
}

export default function Home({ resumes }: HomeProps) {
  return (
    <>
      <Hero url={resumes?.docs[0]?.url}/>
    </>
  )
}

export async function getServerSideProps(): Promise<{
  props: HomeProps
}> {
  const { data } = await client.query<ResumeQueryType>({
    query: resumeQuery,
    fetchPolicy: 'no-cache'
  })

  return {
    props: {
      resumes: data.Resumes
    }
  }
}