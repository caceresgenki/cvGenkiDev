import Section from './Section'
import {skills} from '../../cv.json'
import CSS from '../Icons/Css'
import HTML from '../Icons/Html'
import GitHub from '../Icons/GitHub'
import Tailwind from '../Icons/Tailwind'
import iReact from '../Icons/iReact'
import JS from '../Icons/JavaScript'
import Office from '../Icons/Office'
import Excel from '../Icons/Excel'
import '../../StyleCss/Skills.css'


const SOCIAL_ICONS = {
  Office,
  Excel,
  HTML,
  CSS,
  JS,
  Tailwind,
  iReact,
  GitHub,
};

function Skills() {
   return (
   <>
     <Section id='skills' title='Habilidades'>
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