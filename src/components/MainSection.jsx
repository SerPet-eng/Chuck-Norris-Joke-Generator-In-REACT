import FirstText from "./text/FirstText"
import SecondText from "./text/SecondText"
import ThirdText from "./text/ThirdText"
import FourthText from "./text/FourthText"
import FifthText from "./text/FifthText"

export default function MainSection() {
  return (
    <section className="main--section">
      <div className="first--section">
        <h1 className="first--title">
          Who is <span>Chuck Norris?</span>
        </h1>
        <FirstText />
      </div>
      <div className="second--section">
        <h1 className="second--title">
          How it became a <span>Thing?</span>
        </h1>
        <SecondText />
      </div>
      <div className="third--section">
        <h1 className="third--title">Well...</h1>
        <ThirdText />
      </div>
      <div className="fourth--section">
        <h1 className="fourth--title">Where did it came from?</h1>
        <FourthText />
      </div>
      <div className="fifth--section">
        <h1 className="fifth--title">That&apos;s why!</h1>
        <FifthText />
      </div>
    </section>
  )
}
