import EscRow from './EscRow'
import TildaRow from './TildaRow'
import TabRow from './TabRow'
import CapsRow from './CapsRow'
import ShiftRow from './ShiftRow'
import CtrlRow from './CtrlRow'

export default function BaseBlock() {
    return (
        <div id="base-block">
            <EscRow/>
            <TildaRow/>
            <TabRow/>
            <CapsRow/>
            <ShiftRow/>
            <CtrlRow/>
        </div>
    )
}