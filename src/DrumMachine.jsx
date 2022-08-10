import "./App.css"
import drumMode from "./JSON";
import DrumPad from "./DrumPad"

const DrumMachine = () => {
    return (
        <div className="App">
            <div className='container'>
                <div className='drum-container'>
                    <h3 className="header">DRUMMACHINE</h3>
                    <div className="machine">
                        <div className='col-md-6'>
                            <div className='hori-1'>
                                {drumMode.map((clip) => {
                                    return <DrumPad clip={clip} />
                                })}
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="hori-2">nimflr</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DrumMachine;
