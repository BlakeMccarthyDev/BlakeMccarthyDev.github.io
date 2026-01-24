import "../App.css"


function Card({title, desc, imgpath})
{
    return(
        <>
            <div className="card">
                <h1>{title}</h1>
                <h2>{desc}</h2>
                <img src={imgpath}/>
            </div>
        </>
    )
}

function Gallery()
{
    return(
        <>
            <div className="gallery">
                <Card title={"Work 1"} desc={"The first Work"} imgpath={"../src/assets/work1.png"}/>
                <Card title={"Work 2"} desc={"The second Work"} imgpath={"../src/assets/work1.png"}/>
                <Card title={"Work 3"} desc={"The third Work"} imgpath={"../src/assets/work1.png"}/>
            </div>
        </>
    )
}

export default Gallery;