import { Card } from '@/components'
import { ProjectType } from '@/graphql/projects'

interface ProjectsProps {
    projects: ProjectType
}

export default function Projects({ projects }: ProjectsProps) {
  return <section className={$projectContainer}>
    <h2 className={$projectSectionTitle}>Proyectos</h2>
    <p className={$projectSubtitle}>
          Aqui mis proyectos personales con los cuales estoy desarollando mis habilidades.
    </p>
    <div className={$projectGrid}>
      {
        projects.docs.map(({id, name, description, technologies, mainImage}, idx) => (
          <Card id={id} name={name} description={description} technologies={technologies} mainImage={mainImage} key={idx}/>
        ))
      }
    </div>
  </section>
}

const $projectContainer = 'w-11/12 max-w-7xl mx-auto py-12'

const $projectSectionTitle = 'text-center text-5xl text-info font-bold'

const $projectSubtitle = 'max-w-3xl mx-auto mt-6 mb-10 text-center'

const $projectGrid = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'