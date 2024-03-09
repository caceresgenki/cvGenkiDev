import React from 'react'
import Section from './Section'
import {skills} from '../cv.json'
import CSS from './Icons/CSS'
import Git from './Icons/Git'
import HTML from './Icons/HTML'
import GitHub from './Icons/GitHub'
import iReact from './Icons/iReact'
import JavaScript from './Icons/JavaScript'
import Node from './Icons/Node'
import '../StyleCss/Skills.css'


const SOCIAL_ICONS = {
  HTML,
  CSS,
  JavaScript,
  iReact,
  Node,
  Git,
  GitHub,
};

function Skills() {
   return (
   <>
     <Section title='Habilidades'>
        <div className='ulSkills'>
        {
          skills.map(({ name }) => {
          const iconName = name === "Git.jsx" ? "Git" : name
          const nameReact = name === "iReact" ? "React" : name
          const Icon = SOCIAL_ICONS[iconName];
                
          return (
            <ul >
              <li key={name}>
                {Icon && <Icon />} <span>{nameReact}</span>
              </li>
            </ul>
            
            );
            })
         }  
         </div>
     </Section>
   </>
   )
  }

export default Skills