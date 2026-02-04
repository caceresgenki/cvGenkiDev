import { competencies, skills } from "../../cv.json";
import "../../StyleCss/Skills.css";
import Section from "./Section";

function Skills() {
  return (
    <Section id="skills" title="Habilidades Técnicas">
      <div className="skillsContainer">
        {/* Habilidades Técnicas */}
        <div className="skillSection">
          {/* <h3 className='skillSectionTitle'>Habilidades Técnicas</h3> */}
          {skills.map((category) => (
            <div key={category.name} className="skillCategory">
              <h3 className="categoryTitle">{category.name}:</h3>
              <div className="ulSkills">
                {category.items.map((item) => (
                  <ul key={item}>
                    <li className="listSkills">
                      <span>{item}</span>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Competencias Clave */}
        <div className="skillSection">
          <h3 className="skillSectionTitle">{competencies[0].title}</h3>
          <ul className="competenciesList">
            {competencies[0].items.map((competency, index) => (
              <li key={index} className="competencyItem">
                {competency}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default Skills;
