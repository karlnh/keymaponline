// import BaseBlock from './BoardSections/BaseBlock/BaseBlock'
// import NavBlock from './BoardSections/NavBlock/NavBlock'
// import NumPad from './BoardSections/NumPad/NumPad'

import '../../styles/Keyboard.css'

export default function Keyboard() {
    return (
        <div id="keyboard">
            <div className="keyboard-keys">
                <div>
                    <button className="keyboard-key">`~</button>
                    <button className="keyboard-key">1</button>
                    <button className="keyboard-key">2</button>
                    <button className="keyboard-key">3</button>
                    <button className="keyboard-key">4</button>
                    <button className="keyboard-key">5</button>
                    <button className="keyboard-key">6</button>
                    <button className="keyboard-key">7</button>
                    <button className="keyboard-key">8</button>
                    <button className="keyboard-key">9</button>
                    <button className="keyboard-key">0</button>
                    <button className="keyboard-key">-</button>
                    <button className="keyboard-key">=</button>
                    <button className="keyboard-key key-extra-wide">backspace</button>
                </div>
                <div>
                    <button className="keyboard-key key-medium">tab</button>
                    <button className="keyboard-key">q</button>
                    <button className="keyboard-key">w</button>
                    <button className="keyboard-key">e</button>
                    <button className="keyboard-key">r</button>
                    <button className="keyboard-key">t</button>
                    <button className="keyboard-key">y</button>
                    <button className="keyboard-key">u</button>
                    <button className="keyboard-key">i</button>
                    <button className="keyboard-key">o</button>
                    <button className="keyboard-key">p</button>
                    <button className="keyboard-key">[</button>
                    <button className="keyboard-key">]</button>
                    <button className="keyboard-key key-medium">\</button>
                </div>
                <div>
                    <button className="keyboard-key key-wide">caps</button>
                    <button className="keyboard-key">a</button>
                    <button className="keyboard-key">s</button>
                    <button className="keyboard-key">d</button>
                    <button className="keyboard-key">f</button>
                    <button className="keyboard-key">g</button>
                    <button className="keyboard-key">h</button>
                    <button className="keyboard-key">j</button>
                    <button className="keyboard-key">k</button>
                    <button className="keyboard-key">l</button>
                    <button className="keyboard-key">;</button>
                    <button className="keyboard-key">'</button>
                    <button className="keyboard-key key-wide">enter</button>
                </div>
                <div>
                    <button className="keyboard-key key-extra-wide">shift</button>
                    <button className="keyboard-key">z</button>
                    <button className="keyboard-key">x</button>
                    <button className="keyboard-key">c</button>
                    <button className="keyboard-key">v</button>
                    <button className="keyboard-key">b</button>
                    <button className="keyboard-key">n</button>
                    <button className="keyboard-key">m</button>
                    <button className="keyboard-key">,</button>
                    <button className="keyboard-key">.</button>
                    <button className="keyboard-key">/</button>
                    <button className="keyboard-key key-extra-wide">shift</button>
                </div>
                <button className="keyboard-key">ctrl</button>
                <button className="keyboard-key">win</button>
                <button className="keyboard-key">alt</button>
                <button className="keyboard-key key-spacebar">space</button>
                <button className="keyboard-key">alt</button>
                <button className="keyboard-key">win</button>
                <button className="keyboard-key">page</button>
                <button className="keyboard-key">ctrl</button>
            </div>
        </div>

    )
}