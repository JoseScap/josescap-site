import { IconFileInvoice, IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react'

interface ContactProps {
  url?: string | undefined
}

export default function Contact({ url }: ContactProps) {
  return <section className={$contactContainer} id='contact'>
    <h2 className={$contactSectionTitle}>Contacto</h2>
    <p className={$callToAction}>
      Si estás buscando un <span className={$highlight}>desarrollador con habilidades técnicas y creativas</span>, ¡no dudes en contactarme!
    </p>
    <div className={$heroSocials}>
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
    <h3 className='text-lg font-semibold text-center mb-10'>O sino, <span className={$highlight}>enviame un mensaje abajo!</span></h3>
    <form className="grid grid-cols-1 max-w-4xl gap-4 mx-auto">
      <input type="email" name='mail' placeholder="Mail de contacto" className="input input-bordered input-accent border-2" />
      <input type="text" name='subject' placeholder="Asunto" className="input input-bordered input-accent border-2" />
      <textarea className="textarea textarea-accent border-2" placeholder="Mensaje"></textarea>
      <div className='text-center'>
        <button className='btn btn-accent w-full mt-6 max-w-2xl'>Enviar</button>
      </div>
    </form>
  </section>
}

const $contactContainer = 'w-11/12 max-w-7xl mx-auto py-12'

const $contactSectionTitle = 'text-center text-5xl text-info font-bold'

const $callToAction = 'font-semibold mb-6 mt-6 text-center'

const $highlight = 'text-white'

const $heroSocials = 'mt-6 text-center mb-6'

const $heroResumeButton = 'btn btn-secondary btn-outline gap-2 mx-2 border-2 transform hover:scale-110 transition duration-300'
const $heroLinkedinButton = 'btn btn-info btn-outline gap-2 mx-2 mt-2 md:mt-0 border-2 transform hover:scale-110 transition duration-300'
const $heroGithubButton = 'btn-github gap-2 mx-2 mt-2 md:mt-0 transform hover:scale-110 transition duration-300'

const $disabledHeroResumeButton = 'btn mx-2'
