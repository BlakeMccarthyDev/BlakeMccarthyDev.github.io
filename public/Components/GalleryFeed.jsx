import { useNavigate } from "react-router-dom";
import "../App.css"
import Card from "./WorkCard";

function Gallery()
{
    return(
        <>
            <div className="gallery">
                <Card title={"Whirlpool"} desc={"A custom shader in Unity"} imgpath={"Assets/WhirlpoolRender.gif"} articlepath={"/works/whirlpool"}/>
                <Card title={"Movement System"} desc={"A scalable gameplay system"} imgpath={"Assets/work2.png"} articlepath={"/works/rpsgame"}/>
                <Card title={"RPS Game"} desc={"A full game on Itch.io"} imgpath={"Assets/work3.png"} articlepath={"/works/movement"}/>
            </div>
        </>
    )
}

export default Gallery;