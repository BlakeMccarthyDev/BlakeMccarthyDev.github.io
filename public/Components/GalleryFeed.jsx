import { useNavigate } from "react-router-dom";
import "../App.css"
import Card from "./WorkCard";

function Gallery()
{
    return(
        <>
            <div className="gallery">
                <Card title={"Work 1"} desc={"The first Work"} imgpath={"../assets/work2.png"} articlepath={"/works/whirlpool"}/>
                <Card title={"Work 2"} desc={"The second Work"} imgpath={"Assets/work2.png"} articlepath={"/works/rpsgame"}/>
                <Card title={"Work 3"} desc={"The third Work"} imgpath={"../public/Assets/work3.png"} articlepath={"/works/movement"}/>
            </div>
        </>
    )
}

export default Gallery;