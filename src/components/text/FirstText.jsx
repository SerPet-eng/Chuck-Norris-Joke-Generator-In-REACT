import ImageOne from "../../images/Chuck_Norris-.png"
import ImageTwo from "../../images/Bruce Lee and Chuck Norris.jpg"

export default function FirstText() {
  return (
    <>
      <h3 className="first--sub-title">Chuck Norris is...</h3>
      <p className="first--text">
        Carlos Ray Chuck Norris &#40;born March 10, 1940&#41; is an American
        martial artist and actor. After serving in the United States Air Force,
        he began his rise to fame as a martial artist and has since founded his
        own school, Chun Kuk Do.
      </p>
      <figure>
        <img
          className="first--image-one"
          src={ImageOne}
          alt="Chuck Norris Picture"
          loading="lazy"
        />
        <figcaption>THIS is Chuck Norris!</figcaption>
      </figure>
      <p className="first--text">
        Norris appeared in a number of action films, such as Way of the Dragon
        in which he starred alongside Bruce Lee and was The Cannon Group&apos;s
        leading star in the 1980&apos;s.
      </p>
      <figure>
        <img
          className="first--image-two"
          src={ImageTwo}
          alt="Bruce Lee and Chuck Norris in the Way of the Dragon"
          loading="lazy"
        />
        <figcaption>
          Bruce Lee and Chuck Norris from the Way of the Dragon Movie
        </figcaption>
      </figure>
    </>
  )
}
