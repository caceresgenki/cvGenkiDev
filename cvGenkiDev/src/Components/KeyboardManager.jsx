import 'ninja-keys'
// import { type SocialIcon } from ""
import { basics } from "../cv.json"
import LinkedIn from './Icons/LinkedIn'
import GitHub from './Icons/GitHub'
import '../StyleCss/KeyboardManager.css'

const {name, label, image, location, profiles, phone, email} = basics


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
          <ninja-keys>
            <h2>hola mundo</h2>
          </ninja-keys>
        )
   }


   
export default KeyBoard

