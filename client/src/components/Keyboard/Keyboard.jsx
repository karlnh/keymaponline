import BaseBlock from './BoardSections/BaseBlock/BaseBlock'
import NavBlock from './BoardSections/NavBlock/NavBlock'
import NumPad from './BoardSections/NumPad/NumPad'

import '../../styles/Keyboard.css'

export default function Keyboard() {
    return (
        <div id="keyboard">
            <BaseBlock/>
            <NavBlock/>
            <NumPad/>
        </div>

    )
}