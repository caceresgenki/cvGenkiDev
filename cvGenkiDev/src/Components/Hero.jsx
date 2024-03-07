import React from 'react'
import {basics} from '../cv.json'
import Section from './Section'

const {name, label, image, location, profiles, phone, email} = basics
const {city, region} = location


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
                      Email Icono
                  </a>
                )
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