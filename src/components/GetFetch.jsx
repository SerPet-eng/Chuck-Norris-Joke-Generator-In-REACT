import {useState, useEffect} from 'react'

function JokeGenerator() {
    const [jokes, setJokes] = useState(['Welcome to Chuck Norris Joke Generator! Come on, have a little smile by reading and clicking the button below'])
    const [currentJokeIndex, setCurrentJokeIndex] = useState(0)

    useEffect(() => {
        const fetchJokes = async () => {
          const jokeURL = 'https://api.chucknorris.io/jokes/random';
          const response = await fetch(jokeURL);
          const data = await response.json();
          setJokes([...jokes, data.value]);
        };
    
        // Fetch jokes when the component mounts
        fetchJokes();
      }, []);

    const nextJoke = () => {
        setCurrentJokeIndex((currentJokeIndex + 1) % jokes.length)
    }

    return (
        <>
            <div className="screen" id="screen">
                <div className="monitor" id="monitor">{jokes[currentJokeIndex]}</div>
            </div>
            <button className="hero--button" id="hero--button" onClick={nextJoke}>Generate</button>  
        </>
    )
}

export default JokeGenerator