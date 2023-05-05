import client from '@/graphql/client'
import { ProjectByIdQueryType, ProjectByIdType, projectByIdQuery } from '@/graphql/projects'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { ParsedUrlQuery } from 'querystring'

interface ProjectProps {
    project: ProjectByIdType
}

interface ProjectUrlParams extends ParsedUrlQuery {
  id: string
}

export default function Project({ project }: ProjectProps) {
  return <div>
    {project.id}
    {project.name}
    {project.description}
  </div>
}

export async function getServerSideProps(context: GetServerSidePropsContext<ProjectUrlParams>): Promise<GetServerSidePropsResult<ProjectProps>> {
  if (!context.params?.id)
    return {
      redirect: {
        destination: 'error',
        permanent: false
      }
    }

  if (context.params.id.length < 24)
    return {
      redirect: {
        destination: 'error',
        permanent: false
      }
    }

  try {
    const { id } = context.params
    const { data: { Project }, errors } = await client.query<ProjectByIdQueryType>({
      query: projectByIdQuery,
      variables: { id: id },
      fetchPolicy: 'no-cache'
    })

    if (errors)
      return {
        redirect: {
          destination: 'error',
          permanent: false
        }
      }

    return {
      props: {
        project: Project
      }
    }
  } catch (error) {
    return {
      redirect: {
        destination: 'error',
        permanent: false
      }
    }
  }

  

  
}