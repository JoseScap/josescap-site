import client from '@/graphql/client'
import { resumeQuery, ResumeType, ResumeQueryType } from '@/graphql/resume'
import { Hero, Projects, Contact } from '@/components/Home'
import { ProjectQueryType, projectQuery, ProjectType } from '@/graphql/projects'
import Head from 'next/head'

interface HomeProps {
  resumes: ResumeType
  projects: ProjectType
}

export default function Home({ resumes, projects }: HomeProps) {
  return (
    <>
      <Head>
        <title>Josescap</title>
        <meta
          name="description"
          content="Soy un desarrollador de software con más de 2 años de experiencia en el campo</span>. Mi enfoque principal es
            en el desarrollo de aplicaciones web y móviles"
        />
      </Head>
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