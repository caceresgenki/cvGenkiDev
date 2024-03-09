import React from 'react';
import '../StyleCss/navBar.css'

const moon = (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-moon" width="24" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" /> </svg>)

function NavBar() {
    return   (
    <>
      <nav className='navbar'>
        <div className='logo'>{`<GC/>`}</div>
        <div className='moon'>
          {moon}
        </div>
      </nav>
    </>)
   }



export default NavBar