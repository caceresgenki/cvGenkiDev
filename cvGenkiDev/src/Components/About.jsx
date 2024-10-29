 import React from 'react'
 import Section from './Section'
 import {basics} from '../cv.json'

 const {summary} = basics
 

function About() {
    return (
    <>
      <Section title='Sobre mí'>
        <p>{summary}</p>  
      </Section>
    </>
    )
   }

export default About

