import NavBar from "../../Components/NavBar"

function RPSArticle() {
    return (
        <>
            <NavBar />
            <div className="content">
                <div className="article">
                    <h1>Project Breakdown: Rock Paper Scissors in Unity</h1>
                    <img src="../public/assets/work3.png" alt="" />
                    <p>
                        For my Portfolio, I decided upon creating a Game to show my problem-solving skills and my ability to create an entire project from start to finish. I decided upon making a simple game known by many - Rock, Paper Scissors. I chose this as it was a realistic project to create from scratch fully independently, but had enough gameplay to still function and be a full game. Before beginning this project, I decided to split the tasks into 3 main sections: Asset Creation, Scripting, and UI Implementation. I planned to do these in this order so that once the step is complete, there is no need to revisit the previous work rather than constantly switch between creating new assets, scripting, and then implementing them into the project, which would be too confusing mid-development. I published this game to Itch.io, and it can be played in browser here.

                        <br /><br /><b>Asset Creation</b><br />
                        For the Assets, there were 6 key images needed to be produced -- A Button Background Image, A Background Image for the entire game, A Game Icon, A Rock Icon, A Paper Icon, and A Scissors Icon. I made them in Adobe Illustrator, making cartoon style icons that all share similar features, such as a thick border and bright colours reminiscent of old flash games. I ensured they all fit a standard of image sizes, basing on a unit system of 256*256 pixels that would be expanded as necessary. This meant that all the icons had a similar appearance under Unity's Bilinear image processing, which would blur the image slightly equally across all images. I then imported all the images into Unity as sprites and was ready to script the logic for the game.

                        <br /><br /><b>Scripting</b><br />
                        For the scripts, I needed to do make three major functions: The turn selection (rock, paper, or scissors), the scene management, and the opponent AI. Firstly, I started with the turn selection. I made a class called PlayerSelection which would hold the choice as one of four states, one for each choice and an Unselected option. I then made a function in a player script to select a choice based on a string input. Then, for the Enemy AI, I made the enemy script and made it choose a random number and a choice based on said number, which would be handled by a game script that would either output a win or a loss depending on the two choices. For Scene Management, I had to create a script that would load the main menu, one that would exit the game completely, and one that would load the game scene, using Unity's built-in SceneManager system. With this complete, I had all I needed to link the scripting to the UI.

                        <br /><br /><b>UI Implementation</b><br />
                        For the UI Implementation, I used Unity's built in UI controls and the assets I had made previously. On the main menu, I added two buttons, one for loading the game scene and one for exiting the game. I then applied the button background asset to them and changed the text accordingly. I then started on the game scene. I added four buttons on the left hand side, two images to show the player and opponent output on the right, a text label on the bottom right to show the outcome, and the background image on both scenes at a Z-Index of -1 so it will always be below the elements. I applied the button texture like before, hooked each button to the choice select function and made the string input that for each corresponding choice. I also changed the variables of the game script so it would update the labels and images when choices were selected and the outcome was calculated. With this, I was complete.

                        <br /><br />Overall, this project was a good way to showcase my abilities overall in game development. I found this easy to create, but more of a challenge in the pre-planning stage in order to avoid too much confusion when developing, while also ensuring there was a streamlined outcome envisioned. One thing I would change if given the chance to redo this would be to create a simpler game script that held all the logic for the main gameplay loop instead of separate scripts.


                    </p>
                </div>
            </div>
        </>
    )
}

export default RPSArticle;