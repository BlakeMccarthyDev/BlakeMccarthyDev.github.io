import { useNavigate } from "react-router-dom";
import "../App.css"
import Card from "./WorkCard";

function Gallery()
{
    return(
        <>
            <div className="gallery">
                <Card title={"Work 1"} desc={"The first Work"} imgpath={"../src/assets/work1.png"} articlepath={"/works/whirlpool"}/>
                <Card title={"Work 2"} desc={"The second Work"} imgpath={"../src/assets/work1.png"} articlepath={"/works/website"}/>
                <Card title={"Work 3"} desc={"The third Work"} imgpath={"../src/assets/work1.png"} articlepath={"/works/movement"}/>
            </div>
        </>
    )
}

export default Gallery;