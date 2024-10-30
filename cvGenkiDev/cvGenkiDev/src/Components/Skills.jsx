import React from 'react'
import Section from './Section'
import {skills} from '../cv.json'
import CSS from './Icons/CSS'
import Git from './Icons/Git'
import HTML from './Icons/HTML'
import GitHub from './Icons/GitHub'
import iReact from './Icons/iReact'
import JS from './Icons/JavaScript'
import Node from './Icons/Node'
import Office from './Icons/Office'
import Excel from './Icons/Excel'
import '../StyleCss/Skills.css'


const SOCIAL_ICONS = {
  Office,
  Excel,
  HTML,
  CSS,
  JS,
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
            <ul key={name}>
              <li className= 'listSkills'>
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