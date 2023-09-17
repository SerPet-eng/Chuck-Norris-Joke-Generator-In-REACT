export default function FifthText() {
  return (
    <>
      <h3 className="fifth--sub-title">
        Go Ahead and Give this Joke Generator a Go!
      </h3>
      <p className="fifth--text">
        Chuck Norris Facts were so popular that{" "}
        <strong>Chuck Norris himself</strong> created his own facts about him.
      </p>
      <img
        className="fifth--image"
        src="https://forumus-uploads-production.s3-us-west-2.amazonaws.com/original/3X/f/4/f4c33b0c7fd32bafd68165609f65b1427a3a4fa0.gif"
        alt="Chuck Approves Gif"
      />
      <p className="fifth--text">
        {" "}
        <strong>Don&apos;t worry</strong>, Chuck Norris had a lot of fun
        discussing these facts and came up with his own facts to tell. As seen
        in the video:
      </p>
      <div className="fifth--video-container">
        <iframe
          src="https://www.youtube.com/embed/kQmPMZeN7JQ"
          title='Chuck Norris - Top 10 "Facts" - 2006'
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </>
  )
}
