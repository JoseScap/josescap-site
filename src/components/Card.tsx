import Image from 'next/image'

interface CardProps {
  name: string
  description: string
  technologies: {
    technology: {
      name: string
    }
  }[]
  mainImage: {
    url: string
  }
}

export default function Card({ name, description, technologies, mainImage: { url } }: CardProps) {
  return <div className="card w-96 bg-base-100 shadow-xl shadow-neutral-900">
    <figure className="px-10 pt-10">
      <Image src={url} width={200} height={200} alt="Shoes" className="rounded-xl w-full" />
    </figure>
    <div className="card-body text-center items-center">
      <h2 className="card-title">{name}</h2>
      <p className="line-clamp-3 mb-2">{description}</p>

      <div className="card-actions w-full">
        <button className="btn btn-info btn-outline w-3/4 mx-auto">Ver más</button>
      </div>

      <div className="card-badges mt-6">
        {
          technologies.slice(0, 5).map(({ technology }, idx) => (
            <div className="badge badge-outline badge-accent mx-2" key={idx}>{technology.name}</div>
          ))
        }
        {
          technologies.length > 5 && (
            <div className="badge badge-outline badge-accent mx-2">...</div>
          )
        }
      </div>
    </div>
  </div>
}