import React from 'react';
// import React, { useState, useEffect } from 'react';
import '../StyleCss/navBar.css'

const luna = () => { return (<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
</svg>)};

const sol = () => { return (<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun-high" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z" />
<path d="M6.343 17.657l-1.414 1.414" />
<path d="M6.343 6.343l-1.414 -1.414" />
<path d="M17.657 6.343l1.414 -1.414" />
<path d="M17.657 17.657l1.414 1.414" />
<path d="M4 12h-2" />
<path d="M12 4v-2" />
<path d="M20 12h2" />
<path d="M12 20v2" />
</svg>)};

// const DarkModeToggle = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
//     setDarkMode(isDarkMode);
//     if (isDarkMode) {
//       document.body.classList.add('dark-mode');
//     }
//   }, []);

//   const handleDarkModeToggle = () => {
//     if (!darkMode) {
//       document.body.classList.add('dark-mode');
//       localStorage.setItem('darkMode', 'enabled');
//     } else {
//       document.body.classList.remove('dark-mode');
//       localStorage.setItem('darkMode', 'disabled');
//     }
//     setDarkMode(!darkMode);
//   };

//   return (
//     <div>
//       <input
//         type="checkbox"
//         id="darkModeToggle"
//         checked={darkMode}
//         onChange={handleDarkModeToggle}
//       />
//       <label htmlFor="darkModeToggle">Dark Mode</label>
//     </div>
//   );
// };



function NavBar() {
    return   (
    <>
    <nav>
        <div>{`<GC/>`}</div>
        <div className="dark-mode-toggle">
          <label htmlFor="darkModeToggle">
              <img src={sol} alt="Modo Claro" />
              <input type="checkbox" id="darkModeToggle"/>
              <img src={luna} alt="Modo Oscuro" />
          </label>
        </div>
      </nav>
    </>)
   }



export default NavBar