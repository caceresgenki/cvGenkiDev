import Section from './Section'
import {work} from '../../cv.json'
import '../../StyleCss/Experience.css'

function Experience() {

  return (
   <>
     <Section id='experience' title='Experiencia Laboral'>
        <ul>
          {work.map(
            ({ name, startDate, endDate, position, summary, url }) => {
              const startMonth = new Date(startDate).getMonth()+1+"/" ;
              const endMonth = endDate != null ? new Date(endDate).getMonth()+1+"/" : "";
              
              const startYear = new Date(startDate).getFullYear();
              const endYear = endDate != null ? new Date(endDate).getFullYear() : "Actual";
              const years = `${startMonth}${startYear} - ${endMonth}${endYear}`;

              const urlCompany = url ? <a className='urlWeb' title={`Ver ${name}`} href={url} target="_blank">web</a> : "";
              
              return (
                <li className= 'list-experience' key={name + startDate}>
                  <article>
                    <header>
                      <div>
                        <h3 className='company noPrint' >{name} {urlCompany}
                        </h3>
                        <h3 className='company print' >{name}
                        </h3>
                        <h4>{position}</h4>
                      </div>
                      <time>{years}</time>
                    </header>
                    <footer className='descriptionExperience'>
                      <ul className='summary-list'>
                        {summary.map((item, index) => (
                          <li key={index}>
                            <strong>{item.highlight}</strong> {item.description}.
                          </li>
                        ))}
                      </ul>
                    </footer>
                  </article>
                </li>
              );
            }
          )}
        </ul> 
     </Section>
   </>
   )
}

export default Experience