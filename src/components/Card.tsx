import Image from 'next/image'
import Link from 'next/link'

interface CardProps {
  id: string
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

export default function Card({ id, name, description, technologies, mainImage: { url } }: CardProps) {
  return <div className={$card}>
    <figure className={$cardImageWrapper}>
      <Image src={url} width={200} height={200} alt="Shoes" className={$cardImage} />
    </figure>
    <div className={$cardBody}>
      <h2 className={$cardTitle}>{name}</h2>
      <p className={$cardDescription}>{description}</p>
      <div className={$cardBadgesWrapper}>
        {
          technologies.slice(0, 5).map(({ technology }, idx) => (
            <div className={$cardBadge} key={idx}>{technology.name}</div>
          ))
        }
        {
          technologies.length > 5 && (
            <div className={$cardBadge}>...</div>
          )
        }
      </div>
      <div className={$cardActions}>
        <Link
          href={`/projects/${id}`}
          className={$cardLink}
        >
          Ver más
        </Link>
      </div>
    </div>
  </div>
}

const $card = 'card w-full max-w-sm mx-auto bg-base-100 shadow-xl shadow-neutral-900 hover:shadow-neutral-700'

const $cardImageWrapper = 'px-10 pt-10'
const $cardImage = 'rounded-xl w-full'

const $cardBody = 'card-body text-center items-center'

const $cardTitle = 'card-title'

const $cardDescription = 'line-clamp-3 mb-2'

const $cardBadgesWrapper = 'card-badges'
const $cardBadge = 'badge badge-outline badge-accent mx-2'

const $cardActions = 'card-actions mt-4 w-full'

const $cardLink = 'btn btn-info btn-outline w-3/4 mx-auto'