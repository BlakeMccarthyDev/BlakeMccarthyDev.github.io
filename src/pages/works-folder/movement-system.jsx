import NavBar from "../../components/NavBar";
import "./Article.css";

function MovementArticle() {
  return (
    <>
      <NavBar />
      <div className="content">
        <div className="article">
          <h1>Project Breakdown: Movement System</h1>
          <img src="../src/assets/work1.png" alt="" />
          <p>
            For my Portfolio, I decided to create a
            system which would showcase my ability to produce scaleable code
            which I could then implement into a number of personal projects: A
            Movement System. Movement is the core mechanic of virtually any
            videogame, and is a good system to implement to establish my skills
            in creating foundational mechanics for games. Before developing this
            system, however, I needed to plan specifically what would need to be
            made, in order to streamline the process as best as possible. The
            system would be composed of two parts: A point-and-click movement
            using a NavMesh, and the Camera rotation around the player using the
            A and D Keys. 
            <br /><br /><b>Point-And-Click Movement</b><br />
            For the Movement Itself, I
            needed to set up the scene in Unity so that it could utilise the
            Navigation Agent System. This allows for movement based upon a
            pathfinding algorithm, without the need for continuous input from
            the WASD Keys or a joystick like many games do. To implement this
            into my scene, I first added a Navigation Mesh Component onto the
            floor plane, so that when the scene is ran, it will generate all the
            possible areas that the player can move to or cannot move to. I also
            added a Navigation Agent component to my Player Capsule in order to
            allow for it to move across the floor when ran. After this was done,
            I could begin to develop the script for the player movement. I began
            by implementing an Input detection statement for the Left Mouse
            Button, so that the program would only trigger a change in movement
            when the screen is clicked. Then, I used a Ray Cast in order to find
            the position that the mouse is clicking on in the 3D Space, and set
            the destination property of the Player's Navigation Agent to said
            position so that the player will begin to move using Unity's
            pathfinding algorithm. One issue I noticed with this was that the
            player would not look towards the position they were moving, which
            made the movement look unfinished. To stop this, I used the Math
            functions to calculate the angle at which the player would need to
            rotate in order to face the direction they are moving in, then used
            the DOTween Manager to make this rotation smoothly occur over
            multiple frames to look better. After this, I felt that the gameplay
            didnt have enough emphasis on the movement to make it feel important
            to the player, so I created a quick VFX using the Unity Particle
            System and Animation System that would be instantiated on the point
            the player would move to; this finished the movement portion of the
            system. 
            <br /><br /><b>Camera Rotation </b> <br />
            For the Rotation of the camera, I decided to
            organise my code by separating the Movement into a separate function
            that would be called every frame, and a new function for the camera
            movement. This function, CamRot, would take an InputActionCallback
            context in order to be used with the unity Input Action System, so
            that the function would always be called whenever the WASD keys were
            used. I then took this input, and mapped it into a float for the A
            and D values from -1 to 1 respectively, and then used the Math
            functions similar to the player rotation in the movement function to
            calculate where the camera would need to be positioned depending on
            the key pressed. I then used the DOTween Manager again to smooth
            this translation. To make sure the camera looked at the player, I
            added a Look At Constraint component which took the player object as
            an input. 
            <br /><br />Overall, coding a movement system was not new for me, but
            the implementation of it in this instance was due to my limited
            experience with the Navigation Mesh system in Unity. This took
            around 9-10 hours total, with ~1.5 hours to setting up the
            Navigation system, ~6 for coding and polishing the movement and the
            camera rotation, and ~1.5 for the VFX effect instanced on click. One
            thing I would change if I were to create this again would be the way
            in which the camera rotates, I would likely set this up so that
            either it uses the legacy scripted input system like the movement
            does, or convert the movement into a Input Actions implementation in
            the name of simplicity. This also would prevent against any future
            issues if the legacy input system is fully deprecated - this also
            helps to make the system as scalable as possible amongst multiple
            projects.
          </p>
        </div>
      </div>
    </>
  );
}

export default MovementArticle;
