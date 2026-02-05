import NavBar from "../../src/components/NavBar"
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
                    <ArticleCard title={"Whirlpool Shader"} description={"A Whirlpool shader made using Unity's Built-in Shader Graph and Universal Render Pipeline"} imgpath={"../src/assets/work1.png"} pageurl={"/works/whirlpool"}/>
                    <ArticleCard title={"Movement System"} description={"A Point and Click style movement system made in C# utilising Unity's Built-in Navigation System"} imgpath={"../src/assets/work1.png"} pageurl={"/works/movement"}/>
                    <ArticleCard title={"Portfolio Website"} description={"A Website built entirely in HTML, JS, CSS, using React JS as a framework"} imgpath={"../src/assets/work1.png"} pageurl={"/works/website"}/>
                </div>
            </div>
        </>
    )
}