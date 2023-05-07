import { Slider } from '@/components'
import client from '@/graphql/client'
import { ProjectByIdQueryType, ProjectByIdType, projectByIdQuery } from '@/graphql/projects'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import Image from 'next/image'
import { ParsedUrlQuery } from 'querystring'
import { useMemo } from 'react'

interface ProjectProps {
    project: ProjectByIdType
}

interface ProjectUrlParams extends ParsedUrlQuery {
  id: string
}

export default function Project({ project }: ProjectProps) {
  const { name, description, technologies, repositories, demos, mainImage, images } = project
  const mappedImages = useMemo<string[]>(() => (
    images.map(({ image }) => image.url)
  ), [images])

  return <div className={$projectContainer}>
    <figure className={$projectMainImageWrapper}>
      <Image src={mainImage.url} width={1000} height={500} alt="Shoes" className={$projectMainImage} />
    </figure>
    <h1 className={$projectTitle}>{name}</h1>
    <section className={$projectSection}>
      <h2 className={$projectSectionTitle}>Descripcion</h2>
      <p className={$projectDescription}>{description}</p>
    </section>
    <section className={$projectSection}>
      <h3 className={$projectSectionTitle}>Tecnologias usadas</h3>
      <div className={$projectTechnologyWrapper}>
        {
          technologies.map(({ technology }, idx) => (
            <strong className={$projectTechnologyBadge} key={idx}>{technology.name}</strong>
          ))
        }
      </div>
    </section>
    <section className={$projectSection}>
      <h3 className={$projectSectionTitle}>Repositorios</h3>
      <div className={$projectSectionContentWrapper}>
        {
          repositories.map(({ name, url }, idx) => (<div className={idx < repositories.length - 1 ? 'mb-4' : ''} key={idx}>
            <h5>
              {name}
            </h5>
            <a className={$projectRepositoryLink} href={url} target='_blank'>Repositorio: {url}</a>
          </div>))
        }
      </div>
    </section>
    <section className={$projectSection}>
      <h3 className={$projectSectionTitle}>Demos</h3>
      <div className={$projectSectionContentWrapper}>
        {
          demos.map(({ name, url }, idx) => (<div className={idx < demos.length - 1 ? 'mb-4' : ''} key={idx}>
            <h5>
              {name}
            </h5>
            <a className={$projectRepositoryLink} href={url} target='_blank'>Demo: {url}</a>
          </div>))
        }
      </div>
    </section>
    <section className={$projectSection}>
      <h3 className={$projectSectionTitle}>Galeria</h3>
      <div className={$projectSectionContentWrapper}>
        <Slider images={mappedImages} />
      </div>
    </section>
  </div>
}

const $projectContainer = 'w-11/12 mx-auto max-w-7xl py-12 shadow-xl min-h-screen'

const $projectMainImageWrapper = 'border-b-2 border-t-2'
const $projectMainImage = 'w-full'

const $projectTitle = 'text-center font-bold text-3xl text-info mt-6'

const $projectSection = 'mx-8 mt-8'
const $projectSectionTitle = 'text-xl text-info font-semibold'

const $projectDescription = 'text-justify mt-4'

const $projectTechnologyWrapper = 'mt-4'
const $projectTechnologyBadge = 'badge badge-outline badge-accent me-2 font-normal'

const $projectSectionContentWrapper = 'mt-4'
const $projectRepositoryLink = 'hover:text-info transition-all'

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