import { useState, useRef, useEffect } from "react";
import 'ninja-keys'
import { basics } from "../cv.json"
import LinkedIn from './Icons/LinkedIn'
import GitHub from './Icons/GitHub'


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
      hotkey: `ctrl+${firstLetter}`,
      handler: () => {
        window.open(url, '_blank')
      }
    }
  })


function NinjaKeys() {
    const ninjaKeys = useRef(null);
    const [hotkeys, setHotkeys] = useState([
        
      {
        id: "print",
        title: "Imprimir",
        hotkey: "ctrl+P",
        icon: `<svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        style="margin-right: 8px;"
        width="16"
        height="16"
        viewBox="0 0 24 24" 
        strokeLidth="1.5" 
        stroke="currentColor" 
        className="">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
      </svg>`,
        handler: () => {
          window.print();
        }
      },
      {
        id: "linkedin",
        title: "LinkedIn",
        section: "Social",
        hotkey: "ctrl+L",
        icon: `<svg
        height="16"
        width="16"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        ><title>LinkedIn</title><path
          fill="currentColor"
          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        ></path></svg>`,
        handler: () => {
          window.open( `https://www.linkedin.com/in/genki-c%C3%A1ceres-49154696/`, '_blank')
        }
      },
    ]);
  
    useEffect(() => {
      if (ninjaKeys.current) {
        ninjaKeys.current.data = hotkeys;
      }
    }, []);
  
    return (
      <div className="App">
        {/* <h1>Hello from Ninja Keys</h1>
        <h2>Hit "Cmd+K" or "Ctrl+K"</h2>
        <h3>Actions logged to console in demo</h3> */}
        <ninja-keys ref={ninjaKeys}
        placeholder= "Buscar comando"
        hideBreadcrumbs
        ></ninja-keys>
      </div>
    );
  }

  export default NinjaKeys