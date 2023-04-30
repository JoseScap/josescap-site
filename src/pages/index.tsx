export default function Home() {
  return (
    <main className={$heroContainer}>
      <div className={$hero}>
        <div className={$heroContent}>
          <div>
            <h1 className={$heroTitle}>Hola! Me llamo Jose.</h1>
            <p className={$heroDescription}>Fullstack developer con +2 años de experiencia en desarrollo Web, Movil & BE APIs.</p>
            <div>
              <button className={$heroResumeButton}>Ver CV</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

const $heroContainer = 'flex min-h-screen flex-col items-center justify-between'

const $hero = 'hero min-h-screen bg-base-200'

const $heroContent = 'hero-content text-center'

const $heroTitle = 'text-5xl font-bold text-info'

const $heroDescription = 'py-6'

const $heroResumeButton = 'btn btn-info btn-outline'