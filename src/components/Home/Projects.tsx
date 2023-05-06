import { Card } from '@/components'
import { ProjectType } from '@/graphql/projects'

interface ProjectsProps {
    projects: ProjectType
}

export default function Projects({ projects }: ProjectsProps) {
  return <section className="w-11/12 max-w-7xl mx-auto py-12">
    <h2 className="text-center text-5xl text-info font-bold">Proyectos</h2>
    <p className="max-w-3xl mx-auto mt-6 mb-10 text-center">
        Aqui mis proyectos personales con los cuales estoy desarollando mis habilidades.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {
        projects.docs.map(({id, name, description, technologies, mainImage}, idx) => (
          <Card id={id} name={name} description={description} technologies={technologies} mainImage={mainImage} key={idx}/>
        ))
      }
    </div>
  </section>
}

