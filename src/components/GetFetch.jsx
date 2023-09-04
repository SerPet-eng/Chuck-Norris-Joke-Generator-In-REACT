import {useState, useEffect} from 'react'

function JokeGenerator() {
    const [jokes, setJokes] = useState(['Welcome to Chuck Norris Joke Generator! Come on, have a little smile by reading and clicking the button below'])
    const [currentJokeIndex, setCurrentJokeIndex] = useState(0)

    const jokeURL = 'https://api.chucknorris.io/jokes/random'
    const maxRequestPerHour = 50
    const requestInterval = 720000
    let requestCount = 0

    useEffect(() => {
        async function fetchJoke() {
            try {
                const responses = await Promise.all(Array.from({ 
                    length: maxRequestPerHour },
                    () => fetch(jokeURL))
                )
                const jsonData = await Promise.all(responses.map(response => response.json()))
                setJokes(jsonData.map(data => data.value))

            } catch (error) {
                console.log(error)
            }
        }
        fetchJoke()
      }, [requestCount]);

    const nextJoke = () => {
        if(requestCount < maxRequestPerHour) {
            setCurrentJokeIndex(index => (index + 1) % jokes.length)
            requestCount++
        } else {
            console.log('Maximum number of request reached')
        }
    }

    setInterval( () => {
        requestCount = 0
    }, requestInterval)

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