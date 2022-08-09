import data from "./JSON"
import './App.css';

function App() {
  return (
    <div className="App ">
      <div className='container '>
        <div className='drum-container'>
          <div className='col-md-6'>
            <div className='hori-1'>

              {data.map((e,i) => {
                const audio = new Audio(e.url);
                return (
                  <>
                    <div key={i} className="hori-1">
                      <input key={i} className="box" type="button" value={e.aplhabet} onClick={()=>audio.play()} />
                    </div>

                  </>
                )

              })}
            </div>
          </div>
          <div className='col-md-6'>hwwww</div>
        </div>
      </div>
    </div>
  );
}

export default App;


