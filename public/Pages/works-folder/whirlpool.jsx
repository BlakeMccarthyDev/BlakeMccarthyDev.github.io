import NavBar from "../../Components/NavBar"
import "./Article.css"

function WhirlpoolArtice() {
    return (
        <>
            <NavBar />
            <div className="content">
                <div className="article">
                    <h1>Shader Breakdown: Whirlpool</h1>
                    <img src="../public/Assets/WhirlpoolRender.gif"/>
                    <p>For this portfolio, I decided to create a select few works to showcase my abilities in a variety of areas. One of these select works is a Whirlpool Shader. I decided upon this specifically as it seemed to be the best way to show my technical art skills while also playing into my strengths of programming and thinking analytically. I was inspired to make this shader by the developer Cyanilux, who can be found <a href="https://www.cyanilux.com/tutorials/whirlpool-shader-breakdown/">here.</a> The shader can be broken down into 3 main sections: Vertex Deformation, Noise Creation, and Coloring.

                        <br /><br /><b>Vertex Deformation</b> <br />
                        For the vertex deformation, I took a polar coordinates node, extracted only the Red value of the texture to get a radial gradient, then used the power and saturate nodes to make it larger and blurred to my liking to act as a circle mask. I then replaced the Y value of the existing vertex position with the value from the circle mask, which then deforms the mesh to make a whirlpool effect, with a large divot in the middle smoothly transitioning outwards to the base level of the water.

                        <br /><br /><b>Noise Creation</b> <br />
                        For this shader, I had to create one 'base noise' texture to serve as a foundation for both the vortex and foam textures, as well as a 'detail noise' texture for the intricacies of the non-whirlpool water. For the base noise, I started by taking the same set of polar coordinates from the vertex deformation, and using it as the UVs for a tileable noise texture sample. I then multiplied the UVs by the scene time, to make the noise spin and appear to move inwards, creating a vortex effect. Then for the foam noise, i took this output and used a step node in order to make the noise smaller and more opaque, which creates a foam effect that sits upon the existing base noise. I then used the circular mask made in the vertex deformation node group, and multiplied it by the foam noise to make it fade out around the edges, as a whirlpool would only have noticeable amounts of foam in the areas of high movement in the water. After this, I made the Detail Noise, which involved using a Voronoi noise node, and then using the power and multiply nodes to tweak how much of the detail would appear in the stagnant water.

                        <br /><br /><b>Coloring</b> <br />
                        For the last step of the process, I had to composite all the noise together and then color it. I started this by using the Lerp (Linear Interpolation) Node in order to change whether a colored version of the detail noise or a simple height-based gradient would be used, depending on the position of each vertex once deformed by the vertex shader function. After this, I used an add and blend node (using the Burn Blend Mode) in order to composite the base noise with the combined noise from the previous step. I then clamped this composition in order to remove any NaN results that appeared from using the Burn Blend Mode. Finally, I used this output for the Base Color input of the shader's fragment function, and the shader was complete.

                        <br /><br />Overall, this took me around 5 hours to complete from start to finish, with the majority of my time going towards planning and researching the theory of this shader, as well as studying the reference material linked at the top of the page. If I were to do this again, I would change how I composited the noise and colored it, instead I would likely use a gradient map at the end of the shader than a separate Lerp node and Blend node.
                    </p>
                </div>
            </div>
        </>
    )
}

export default WhirlpoolArtice;