import 'ninja-keys'
import { basics } from "../cv.json"
import Section from './Section'
import LinkedIn from './Icons/LinkedIn'
import GitHub from './Icons/GitHub'
import '../StyleCss/KeyboardManager.css'

const {profiles} = basics


const SOCIAL_ICONS = {
  GitHub,
  LinkedIn,
};


const profilesInfo = profiles.map(({ network, url }) => {
  const icon = SOCIAL_ICONS[network]
  const firstLetter = network[0].toUpperCase()

  return {
    id: network,
    section: "Social",
    title: `Visitar ${network}`,
    url,
    icon,
    hotkey: `ctrl+${firstLetter}`
  }
})



function KeyBoard() {
    return   (
        <section className='footerKeys'>  
          <footer id="normalFooter" className="no-print">
            Pulsa <kbd>Cmd</kbd> ó <kbd>Ctrl</kbd>+ <kbd>K</kbd> para abrir la paleta de comandos.
          </footer>
          <div id="footerButton" className="no-print">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-command"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#777"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10"
              ></path>
            </svg>
          </div>
          <ninja-keys></ninja-keys>
        </section>
        )
   }


   
export default KeyBoard

