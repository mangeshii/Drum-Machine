import "./App.css"
import { drumMode, synthMode } from "./JSON";
import DrumPad from "./DrumPad"
import { useState } from "react";

const DrumMachine = () => {
    const [displayName, setDisplayName] = useState('LOADING PRESETS')
    const [volumeInput, setVolumeInput] = useState({volume:"0.5"})

    const changeVolume = (e) => {
        const volume = e.target.value / 100;
        const message = "Volume: " + e.target.value;
        setVolumeInput({
            volume: volume,
            currentSound: message,
            volumeValue: e.target.value,
            message: message
        })
    }

    return (
        <div className="App">
            <div className='container'>
                <div className='drum-container'>
                    <h3 className="header">DRUMMACHINE</h3>
                    <div className="machine">
                        <div className='col-md-6 left-section'>
                            <div className='hori-1'>
                                {drumMode.map((clip) => {
                                    return <DrumPad clip={clip} setDisplayName={setDisplayName} volumeInput={volumeInput} key={clip.alphabet} />

                                })}
                            </div>
                        </div>
                        <div className="col-md-6 right-section">
                            <div className="hori-2">
                                {displayName}
                            </div>
                            <input
                                value={volumeInput.volumeValue}
                                type="range"
                                min="1"
                                max="100"
                                onChange={changeVolume}
                                name="output"
                            >
                            </input>
                            <section>
                                <p contenteditable="true">{`Volume: ${Math.round(volumeInput.volume*100)}%`}</p>
                            </section>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default DrumMachine;

