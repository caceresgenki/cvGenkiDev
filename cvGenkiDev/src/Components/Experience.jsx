import React from 'react'
import Section from './Section'
import {work} from '../cv.json'
import '../StyleCss/Experience.css'




function Experience() {
   return (
   <>
     <Section title='Experiencia'>
        <ul>
          {work.map(
            ({ name, startDate, endDate, position, summary, highlights, url, id }) => {
              const startYear = new Date(startDate).getFullYear();
              const endYear = endDate != null ? new Date(endDate).getFullYear() : "Actual";
              const years = `${startYear} - ${endYear}`;

              return (
                <li className= 'list-experience' key={name + startDate}>
                  <article>
                    <header>
                      <div>
                        <h3>
                          <a href={url} title={`Ver ${name}`} target="_blank">
                            {name}
                          </a>
                        </h3>
                        <h4>{position}</h4>
                      </div>
                      <time>{years}</time>
                    </header>
                    <footer>
                      <p>{summary}</p>
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