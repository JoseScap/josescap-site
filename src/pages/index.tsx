import client from '@/graphql/client'
import { resumeQuery, ResumeType, ResumeQueryType } from '@/graphql/resume'
import { Hero, Projects } from '@/components/Home'
import { ProjectQueryType, projectQuery, ProjectType } from '@/graphql/projects'

interface HomeProps {
  resumes: ResumeType
  projects: ProjectType
}

export default function Home({ resumes, projects }: HomeProps) {
  return (
    <>
      <Hero url={resumes?.docs[0]?.url}/>
      <Projects projects={projects}/>
    </>
  )
}

export async function getServerSideProps(): Promise<{
  props: HomeProps
}> {
  const { data: { Resumes } } = await client.query<ResumeQueryType>({
    query: resumeQuery,
    fetchPolicy: 'no-cache'
  })
  const { data: { Projects } } = await client.query<ProjectQueryType>({
    query: projectQuery,
    fetchPolicy: 'no-cache'
  })

  return {
    props: {
      resumes: Resumes,
      projects: Projects
    }
  }
}