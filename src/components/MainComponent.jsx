
import ChuckLeft from   "../images/Chuck Norris With Two SMG.png"
import JokeGenerator from "./GetFetch"

function MainComponent() {
    return (
        <div className="main">
            <h1 className="main--title">Chuck Norris</h1>
            <h2 className="main--sub-title">Joke Generator</h2>
            <div className="main--hero">
                <img src={ChuckLeft} alt="Chuck Norris Holding Two SMG" className='chuckLeft'/>
                <img src={ChuckLeft} alt="Chuck Norris Holding Two SMG" className='chuckRight'/>
                
                <JokeGenerator />
                
            </div>
        </div>
    )
}

export default MainComponent