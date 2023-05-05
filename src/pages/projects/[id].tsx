import client from '@/graphql/client'
import { ProjectByIdQueryType, ProjectByIdType, projectByIdQuery } from '@/graphql/projects'

interface ProjectProps {
    project: ProjectByIdType
}

export default function Project({ project: { id, name, description } }: ProjectProps) {
  return <div>
    <p>{id}</p>
    <p>{name}</p>
    <p>{description}</p>
  </div>
}

export async function getServerSideProps(context: any): Promise<{
  props: ProjectProps
}> {
  const id = context.params.id as string
  const { data: { Project } } = await client.query<ProjectByIdQueryType>({
    query: projectByIdQuery,
    variables: { id: id }
  })
  return {
    props: {
      project: Project
    }
  }
}