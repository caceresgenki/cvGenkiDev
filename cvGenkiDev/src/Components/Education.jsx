import Section from './Section'
import {education} from '../cv.json'
import '../StyleCss/Education.css'


function Education() {
   return (
   <>
     <Section title='Estudios Realizados'>
        <ul className='listEducation'>
          {
            education.map(({ institution, startDate, endDate, area, url, summary }) => {
              const startYear = new Date(startDate).getFullYear()
              const endYear =
                endDate != null ? new Date(endDate).getFullYear() : "Actual"
              const years = `${startYear} - ${endYear}`

              const urlUniversity = url ? <a title={`Ver ${institution}`} href={url} target="_blank">web</a> : "";

              return (
                <li key={institution}>
                  <article>
                    <header>
                      <div>
                        <h3 className='nameInstitution'>{institution}{urlUniversity}
                        </h3>
                      </div>

                      <time>{years}</time>
                      
                    </header>

                    <footer className='carrer'>
                      <div><p>{area}</p></div>
                      <div><p>{summary}</p></div>
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