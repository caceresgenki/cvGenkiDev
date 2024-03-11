import React from 'react'
import Section from './Section'
import {education} from '../cv.json'
import '../StyleCss/Education.css'


function Education() {
   return (
   <>
     <Section title='Estudios Realizados'>
        <ul className='listEducation'>
          {
            education.map(({ institution, startDate, endDate, area, url }) => {
              const startYear = new Date(startDate).getFullYear()
              const endYear =
                endDate != null ? new Date(endDate).getFullYear() : "Actual"
              const years = `${startYear} - ${endYear}`

              return (
                <li>
                  <article>
                    <header>
                      <div>
                        <h3 className='nameInstitution'><a href={url} title={`Ver ${institution}`} target="_blank">{institution}</a></h3>
                      </div>

                      <time>{years}</time>
                    </header>

                    <footer>
                      <p>{area}</p>
                    </footer>
                  </article>
                </li>
              )
            })
          }
        </ul>  
     </Section>
   </>
   )
  }

export default Education