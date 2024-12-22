import { useRef, useEffect } from "react";
import { lyrics, artist, audio } from "./styles.module.css";

function Home() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
    }
  }, []);

  return (
    <>
      <section className={audio}>
        <audio controls autoPlay ref={audioRef}>
          <source src="/assets/ballad-of-big-nothing.mp3" type="audio/mp3" />
        </audio>
      </section>
      <main className={lyrics}>
        <h1>Ballad of Big Nothing</h1>
        <p>
          Throwing candy out to the crowd
          <br />
          Dragging down the main
          <br />
          The helpless little thing with the dirty mouth
          <br />
          Who's always got something to say
          <br />
          You're sitting around at home now
          <br />
          Waiting for your brother to call
          <br />
          I saw him down in the alley
          <br />
          Having had enough of it all
        </p>
        <p>
          Said you can do what you want to whenever you want to
          <br />
          You can do what you want to there's no one to stop you
        </p>
        <p>
          All spit and spite you're up all night
          <br />
          And down every day
          <br />
          A tired man with only hours to go
          <br />
          Just waiting to be taken away
          <br />
          Getting into the back of a car for
          <br />
          Candy from some stranger
          <br />
          Watching the parade with pinpoint eyes
          <br />
          Full of smoldering anger
        </p>
        <p>
          You can do what you want to whenever you want to
          <br />
          You can do what you want to there's no one to stop you
          <br />
          Now you can do what you want to whenever you want to
          <br />
          Do what you want to whenever you want to
          <br />
          Do what you want to whenever you want to
          <br />
          Though it doesn't mean a thing
          <br />
          Big nothing
        </p>
      </main>
      <footer className={artist}>
        <p>
          <a href="https://en.wikipedia.org/wiki/Elliott_Smith" target="_blank">
            Elliott Smith
          </a>
        </p>
      </footer>
    </>
  );
}

export default Home;
