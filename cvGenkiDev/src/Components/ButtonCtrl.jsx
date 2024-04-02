import React from 'react'
import NinjaKeys from './NinjaKeys'





function ButtonCtrl() {

  function handleNinja () {
    var event = new KeyboardEvent("keydown", {
      key: "K",
      code: "KeyK",
      keyCode: 75,
      which: 75,
      ctrlKey: true,
      altKey: false,
      shiftKey: false,
      metaKey: false
    })
  
    document.dispatchEvent(event)
  }


    return(
      <>
      <div id="footerButton" className="no-print" onClick={handleNinja}>
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
      <NinjaKeys />
      </>
    )
}

export default ButtonCtrl