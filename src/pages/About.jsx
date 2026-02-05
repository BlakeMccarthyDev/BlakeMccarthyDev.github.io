import NavBar from "../Components/NavBar";
import "./About.css";

export default function About() {
  return (
    <>
      <NavBar />
      <div className="about content">
        <h1>About Me</h1>
        <h3>
          I'm Blake, I am an aspiring developer looking to further my skills in
          game & software development as well as technical art. While my
          portfolio may not be full of projects, Im always ready to learn
          something new, no matter what it is. I have found technical art to be
          a great passion of mine, with a specialty in programming shaders in
          the GLSL Shader Language. Some of the games that have inspired me
          include Animal Crossing: New Horizons and New Leaf, The Last of Us
          Part 2, and Marvel’s Spiderman. I am able to program in Python, C#,
          Unreal Blueprints, and React, which was used to make this very
          website! I especially love to use C# to program since it can be
          applied to both game and software development projects.{" "}
        </h3>
        <div className="info-cont">
          <div className="about-info games">
            <h2>My Favorite Games</h2>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/7/7f/Honkai_Star_Rail_%28logo%29.png"
              alt=""
            />
            <img
              src="https://s-stats-platform-cdn.op.gg/app-router/assets/images/marvel-rivals/logo.png?image=q_auto:good,f_webp,w_674&v=1769077867"
              alt=""
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Animal_Crossing_Leaf.svg/330px-Animal_Crossing_Leaf.svg.png"
              alt=""
            />
          </div>
          <div className="about-info engines">
            <h2>My Favorite Game Engines</h2>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Official_unity_logo.png"
              alt=""
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/20/UE_Logo_Black_Centered.svg"
              alt=""
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Godot_icon_reimagined.svg/960px-Godot_icon_reimagined.svg.png?20230919084909"
              alt=""
            />
          </div>
          <div className="about-info langs">
            <h2>My Favorite Programming Languages</h2>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/960px-Python-logo-notext.svg.png"
              alt=""
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/500px-Logo_C_sharp.svg.png"
              alt=""
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/960px-HTML5_logo_and_wordmark.svg.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
