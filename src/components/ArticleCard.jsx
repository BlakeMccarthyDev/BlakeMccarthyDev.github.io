import { useNavigate } from "react-router-dom";
import "../pages/Works.css"
function ArticleCard({ title, description, imgpath, pageurl }) {
    var nav = useNavigate();
    return (
        <>
            <div className="article-card">
                <img src={imgpath} alt="" />
                <div className="text-cont">
                    <h2>{title}</h2>
                    <h3>{description}</h3>
                    <button onClick={() => {nav(pageurl)}}>See More</button>
                </div>
            </div>
        </>
    )
}

export default ArticleCard;