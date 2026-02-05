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

export default Card;