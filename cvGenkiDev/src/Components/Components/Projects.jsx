
import Section from './Section'
import GitHub from '../Icons/GitHub'
import {projects} from '../../cv.json'
import '../../StyleCss/Projects.css'


function Projects() {
   return (
   <>
     <Section title='Proyectos'>
      <ul className='ulProjects'>
          {
            projects.map(
              ({ url, description, highlights, name, isActive, github }) => {
                return (
                  <li>
                    <article className='artProjects'>
                      <header className='headProjects'>
                        <h3 className='nameProject'>
                          <a href={url} target="_blank" title={`Ver el proyecto ${name}`}>
                            {name}
                          </a>
                          {isActive && <span>•</span>}
                          {github && (
                            <a
                              class="github-code-link"
                              href={github}
                              target="_blank"
                              title={`Ver código fuente del proyecto ${name}`}
                            >
                              <GitHub />
                            </a>
                          )}
                        </h3>
                        <p>{description}</p>
                      </header>
                      <footer>
                        {highlights.map((highlight) => {
                          return <span>{highlight}</span>
                        })}
                      </footer>
                    </article>
                  </li>
                )
              }
            )
          }
        </ul>  
     </Section>
   </>
   )
  }

export default Projects