import React from 'react'
import {basics} from '../cv.json'
import Section from './Section'
import Mail from './Icons/Mail'
import Phone from './Icons/Phone'
import LinkedIn from './Icons/LinkedIn'
import GitHub from './Icons/GitHub'
import WorldMap from './Icons/WorldMap'


const {name, label, image, location, profiles, phone, email} = basics
const {city, region} = location

const SOCIAL_ICONS = {
  GitHub,
  LinkedIn,
};



function Hero() {
    return   (
      <>
      <Section className='hero'>
        <div className='container'>
          <div className='info'>
            <h1>
              {name}
            </h1>
            <h2>
              {label}
            </h2>
            <span>
              <WorldMap />
              {city}, {region}
            </span>
            <footer>
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
            <img src={image} alt={name} />
          </figure>

        </div>

      </Section>
      </>
        )
   }

   <style>


   </style>


export default Hero