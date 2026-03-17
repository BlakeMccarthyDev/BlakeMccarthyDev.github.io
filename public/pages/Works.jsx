import NavBar from "../components/NavBar"
import './Works.css'
import ArticleCard from "../components/ArticleCard"

export default function Works() {
    return (
        <>
            <NavBar />
            <div className="works content">
                <h1>My Works</h1>
                <h3>Here you can find a library of my works, click on them to read their dedicated article.</h3>
                <div className="works-cards">
                    <ArticleCard title={"Whirlpool Shader"} description={"A Whirlpool shader made using Unity's Built-in Shader Graph and Universal Render Pipeline"} imgpath={"../src/assets/WhirlpoolRender.gif"} pageurl={"/works/whirlpool"}/>
                    <ArticleCard title={"Movement System"} description={"A Point and Click style movement system made in C# utilising Unity's Built-in Navigation System"} imgpath={"../src/assets/work2.png"} pageurl={"/works/movement"}/>
                    <ArticleCard title={"RPS Game"} description={"A Rock Paper Scissors Game Developed in Unity and Published on Itch.io"} imgpath={"../src/assets/work3.png"} pageurl={"/works/rpsgame"}/>
                </div>
            </div>
        </>
    )
}