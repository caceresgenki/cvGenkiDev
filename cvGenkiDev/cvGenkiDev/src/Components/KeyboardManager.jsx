import 'ninja-keys'
import '../StyleCss/KeyboardManager.css'
import NinjaKeys from './NinjaKeys'
import ButtonCtrl from './ButtonCtrl'


function KeyBoard() {
    return   (
        <section className='footerKeys'>  
          <footer id="normalFooter" className="no-print">
            Pulsa <kbd>Cmd</kbd> ó <kbd>Ctrl</kbd>+ <kbd>K</kbd> para abrir la paleta de comandos.
          </footer>
          <ButtonCtrl />
          <NinjaKeys />
        </section>
        )
   }


   
export default KeyBoard

