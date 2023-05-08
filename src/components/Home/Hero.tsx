import { IconFileInvoice, IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react'

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
                <a className={$heroResumeButton} href={url} target='_blank'>
                  Ver CV
                  <IconFileInvoice />
                </a>
              ) : (
                <button className={$disabledHeroResumeButton} disabled>Sin CV</button>
              )
            }
            <a className={$heroLinkedinButton} href='https://www.linkedin.com/in/josescap/' target='_blank'>
              Linkedin
              <IconBrandLinkedin />
            </a>
            <a className={$heroGithubButton} href='https://github.com/JoseScap' target='_blank'>
              Github
              <IconBrandGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
}

const $heroContainer = 'flex min-h-screen flex-col items-center justify-between'

const $hero = 'hero min-h-screen hero-bottom'

const $heroContent = 'hero-content text-center'

const $heroTitle = 'text-3xl sm:text-4xl md:text-5xl font-bold text-info'

const $heroDescription = 'font-semibold max-w-3xl mx-auto mt-2 md:mt-6 text-center'
const $heroCallToAction = 'font-semibold mb-6 mt-2'

const $highlight = 'text-white'

const $heroResumeButton = 'btn btn-secondary btn-outline gap-2 mx-2 border-2 transform hover:scale-110 transition duration-300'
const $heroLinkedinButton = 'btn btn-info btn-outline gap-2 mx-2 mt-2 md:mt-0 border-2 transform hover:scale-110 transition duration-300'
const $heroGithubButton = 'btn-github gap-2 mx-2 mt-2 md:mt-0 transform hover:scale-110 transition duration-300'

const $disabledHeroResumeButton = 'btn mx-2'