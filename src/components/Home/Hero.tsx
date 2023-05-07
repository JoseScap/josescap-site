interface HeroProps {
  url?: string | undefined
}

export default function Hero({ url }: HeroProps) {
  return <main className={$heroContainer}>
    <div className={$hero}>
      <div className={$heroContent}>
        <div>
          <h1 className={$heroTitle}>Hola! Me llamo Jose Puente.</h1>
          <p className={$heroDescription}>
            Soy un desarrollador de software con más de <span className={$highlight}>2 años de experiencia en el campo</span>. Mi enfoque principal es
            en el desarrollo de <span className={$highlight}>aplicaciones web y móviles</span>, utilizando tecnologías como <span className={$highlight}>ReactJS, ReactNative</span>. Tambien el
            desarrollo de <span className={$highlight}>APIs REST y GraphQL</span>. Además, tengo amplios conocimientos en Javascript, NodeJS, Java y
            Springboot. Me enorgullezco de ofrecer soluciones de software eficientes y personalizadas que satisfacen
            las necesidades específicas de cada cliente.
          </p>
          <p className={$heroCallToAction}>
            Si estás buscando un <span className={$highlight}>desarrollador con habilidades técnicas y creativas</span>, ¡no dudes en contactarme!
          </p>
          <div>
            {
              url ? (
                <a className={$heroResumeButton} href={url} target='_blank'>Ver CV</a>
              ) : (
                <button className={$disabledHeroResumeButton} disabled>Sin CV</button>
              )
            }
            <button className={$disabledWorkTogetherButton} disabled>Trabajemos juntos!</button>
          </div>
        </div>
      </div>
    </div>
  </main>
}

const $heroContainer = 'flex min-h-screen flex-col items-center justify-between'

const $hero = 'hero min-h-screen bg-base-200'

const $heroContent = 'hero-content text-center'

const $heroTitle = 'text-5xl font-bold text-info'

const $heroDescription = 'font-semibold max-w-3xl mx-auto mt-6 text-center'
const $heroCallToAction = 'font-semibold mb-6 mt-2'

const $highlight = 'text-white'

const $heroResumeButton = 'btn btn-info btn-outline mx-2'
const $disabledHeroResumeButton = 'btn btn-outline mx-2'

const $WorkTogetherButton = 'btn btn-secondary btn-outline mx-2'
const $disabledWorkTogetherButton = 'btn btn-secondary btn-outline mx-2'