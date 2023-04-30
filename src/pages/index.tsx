import client from '@/graphql/client'
import { resumeQuery, ResumeType, ResumeQueryType } from '@/graphql/resume'

interface HomeProps {
  resumes: ResumeType
}

export default function Home({ resumes }: HomeProps) {
  return (
    <main className={$heroContainer}>
      <div className={$hero}>
        <div className={$heroContent}>
          <div>
            <h1 className={$heroTitle}>Hola! Me llamo Jose Puente.</h1>
            <p className={$heroDescription}>Fullstack developer con +2 años de experiencia en desarrollo Web, Movil & BE APIs.</p>
            <div>
              {
                resumes.docs.length ? (
                  <a className={$heroResumeButton} href={resumes.docs[0].url} target='_blank'>Ver CV</a>
                ) : (
                  <button className={$disabledHeroResumeButton} disabled>Sin CV</button>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </main>
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

const $heroContainer = 'flex min-h-screen flex-col items-center justify-between'

const $hero = 'hero min-h-screen bg-base-200'

const $heroContent = 'hero-content text-center'

const $heroTitle = 'text-5xl font-bold text-info'

const $heroDescription = 'py-6'

const $heroResumeButton = 'btn btn-info btn-outline'
const $disabledHeroResumeButton = 'btn btn-outline'