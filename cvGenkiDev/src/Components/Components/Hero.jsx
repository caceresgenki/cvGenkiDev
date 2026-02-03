import {basics} from '../../cv.json'
import Section from './Section'
import Mail from '../Icons/Mail'
import Phone from '../Icons/Phone'
import LinkedIn from '../Icons/LinkedIn'
import GitHub from '../Icons/GitHub'
import WorldMap from '../Icons/WorldMap'
import Whatsapp from '../Icons/Whatsapp'
import '../../StyleCss/Hero.css'
import Image from '../../Image/ImageProfile.jpg'



const {name, label, location, profiles, phone, email, page} = basics
const {city, region} = location

const SOCIAL_ICONS = {
  GitHub,
  LinkedIn,
  Whatsapp,
};

const printInfo = [email, phone, page].filter(Boolean).join(" • ")

function Hero() {
    return   (
      <>
      <Section id='hero' className='hero'>
        <div className='container'>
          <div className='info'>
            <h2 className='nameHero'>
              {name}
            </h2>
            <h1 className='labelHero'>
              {label}
            </h1>
            <span>
              <WorldMap />
              {city}, {region}
            </span>
            <footer className="print">
              {printInfo}
            </footer>
            <footer className='noPrint'>
              {
                email && (
                  <a
                    href={`mailto:${email}`}
                    title={`Enviar un correo electrónico a ${name} al correo ${email}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    >
                      <Mail />
                  </a>
                )
              }

              {
                phone && (
                  <a
                    href={`tel:${phone}`}
                    title={`Llamar por teléfono a ${name} al número ${phone}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    >
                      <Phone />
                  </a>
                )
              }

              {
                profiles.map(({ network, url, username }) => {
                  const Icon = SOCIAL_ICONS[network];
                
                  return (
                    <a
                      key={network}
                      href={url}
                      title={`Visitar el perfil de ${username} en ${network}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon />
                    </a>
                  );
                })
              }


             
            </footer>
          </div>

          <figure>
            <img src={Image} alt={name} />
          </figure>

        </div>

      </Section>
      </>
        )
   }

export default Hero