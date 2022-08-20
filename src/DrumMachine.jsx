import "./App.css"
import { drumMode } from "./JSON";
import DrumPad from "./DrumPad"
import { useState } from "react";
import ControlDisplay from "./ControlDisplay";
import ModeButton from "./ModeButton";
import Header from "./Header";
import {Displaystyle,buttonStyleDrum,buttonStyleSynth} from "./OffStyle";


const DrumMachine = () => {
    const [displayName, setDisplayName] = useState('LOADING PRESETS...')
    const [volumeInput, setVolumeInput] = useState({ volume: "0.5" })
    const [power, setPower] = useState(true)
    const [displayMode, setDisplayMode] = useState('DRUM');
 

    const DrumMode = drumMode.map((clipDrum) => {
        return (
            <DrumPad clipDrum={clipDrum}
                setDisplayName={setDisplayName}
                volumeInput={volumeInput}
                key={clipDrum.alphabet}
                power={power}
                displayMode={displayMode}
            />);

    });

    
    const deactivatedisplay = !power ? (Displaystyle.Active) : (Displaystyle.Inactive)
    const deactivatedbuttonDrum = !power ? (buttonStyleDrum.Active) : (buttonStyleDrum.Inactive)
    const deactivatedbuttonSynth = !power ? (buttonStyleSynth.Active) : (buttonStyleSynth.Inactive)



    return (
        <div className="App">
            <div className='container'>
                <div className='drum-container'>
                    <div className="header">
                        <Header power={power} setPower={setPower}/>
                    </div>

                    <div className="machine">
                        <div className='col-md-6 left-section'>
                            <div className='hori-1' >
                                {DrumMode}
                            </div>
                        </div>
                        <div className="col-md-6 right-section">
                            <ControlDisplay displayName={displayName}
                                volumeInput={volumeInput}
                                setVolumeInput={setVolumeInput}
                                deactivatedisplay={deactivatedisplay}
                                displayMode={displayMode}
                            />
                            <div className="chg-mode">
                                <ModeButton setDisplayMode={setDisplayMode} power={power} deactivatedbuttonDrum={deactivatedbuttonDrum} deactivatedbuttonSynth={deactivatedbuttonSynth}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default DrumMachine;




