import { useNavigate } from "react-router-dom";
import "../pages/Works.css"
function ArticleCard({title, description, imgpath, pageurl}) 
{
    var nav = useNavigate();
    return (
    <>
        <div className="article-card">
            <h2>{title}</h2>
            <h3>{description}</h3>
            <img src={imgpath} alt="" />
            <button onClick={()=>{nav({pageurl})}}>See More</button>
        </div>
    </>
    )
}

export default ArticleCard;