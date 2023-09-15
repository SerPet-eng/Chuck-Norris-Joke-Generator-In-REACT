export default function ThirdText() {
  return (
    <>
      <div className="third--sub-section">
        <h4 className="third--sub-title">According to Mark Twain</h4>
        <div className="third--mid-section">
          <em className="third--paragraph">
            The human race has one really effective weapon, and that is laughter
          </em>
        </div>

        <iframe
          src="https://giphy.com/embed/Mjl0BsAgMGYTe"
          width="400"
          height="480"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
          loading="lazy"
        ></iframe>

        <p className="third--text">
          Even in the simplier times of 2005, A lot is occurring, such as the
          first video of &quot;Me at the Zoo&quot; on YouTube,
        </p>
        <iframe
          width="521"
          height="391"
          src="https://www.youtube.com/embed/jNQXAC9IVRw"
          title="Me at the zoo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <p className="third--text">
          The observation of Eris and its satellite by a Paloar Observatory-Base
          Team,
        </p>
        <figure>
          <img
            width="521"
            height="391"
            src="https://solarsystem.nasa.gov/system/stellar_items/image_files/724_feature_1600x900_eris.jpg"
            alt="The Dwarf Planet, Eris"
          />
          <figcaption>
            A Beautiful Dwarf Planet{" "}
            <a
              href="https://solarsystem.nasa.gov/planets/dwarf-planets/eris/in-depth/"
              target="_blank"
              rel="noreferrer"
            >
              &quot;Eris&quot;
            </a>
          </figcaption>
        </figure>
        <p className="third--text">
          And some sad events, such as Hurricane Katrina, which devastated South
          America.
        </p>
        <figure>
          <img
            src="https://64parishes.org/wp-content/uploads/2011/10/hurricane-katrina-ir-clouds-from-goes-on-29-aug-2005-869.jpg"
            alt="Image of Hurricane Katrina 2005"
            loading="lazy"
          />
          <figcaption>An Image of Hurrican Katrina from 2005</figcaption>
        </figure>

        <div className="third--last-section">
          <p className="third--paragraph">
            So, despite the happenings, we instinctively find something to poke
            fun of. Chuck Norris Facts is one of them.
          </p>
        </div>
      </div>
    </>
  )
}
