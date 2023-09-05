import {useState, useEffect} from 'react'
import { fetchData } from './units/fetchData'

function JokeGenerator() {
    const [jokes, setJokes] = useState(null)
    const [currentJokeIndex, setCurrentJokeIndex] = useState(0)

    const jokeURL = 'https://api.chucknorris.io/jokes/random'
    const maxRequest = 20
    let requestCount = 0

    useEffect(() => {
        async function fetchJoke() {
            const jokeData = await fetchData(jokeURL, maxRequest)
            setJokes(jokeData)
        }
        fetchJoke()
      }, [requestCount])

    const nextJoke = () => {
        if(requestCount < maxRequest) {
            setCurrentJokeIndex(index => (index + 1) % jokes.length)
            requestCount++
        } else {
            console.log('Maximum number of request reached')
        }
    }

    return (
        <>
            <div className="screen" id="screen">
                <div className="monitor" id="monitor">
                    {jokes ? jokes[currentJokeIndex] : 'Loading...'}
                </div>
            </div>
            <button className="hero--button" id="hero--button" onClick={nextJoke}>Generate</button>  
        </>
    )
}

export default JokeGenerator
