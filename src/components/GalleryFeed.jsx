import { useNavigate } from "react-router-dom";
import "../App.css"


function Card({title, desc, imgpath, articlepath})
{
    const nav = useNavigate();
    return(
        <>
            <button className="card">
                <h1><a href="" onClick={()=>{nav(articlepath)}}>{title}</a></h1>
                <h2>{desc}</h2>
                <img src={imgpath}/>
            </button>
        </>
    )
}

function Gallery()
{
    return(
        <>
            <div className="gallery">
                <Card title={"Work 1"} desc={"The first Work"} imgpath={"../src/assets/work1.png"} articlepath={"/works/whirlpool"}/>
                <Card title={"Work 2"} desc={"The second Work"} imgpath={"../src/assets/work1.png"}/>
                <Card title={"Work 3"} desc={"The third Work"} imgpath={"../src/assets/work1.png"}/>
            </div>
        </>
    )
}

export default Gallery;