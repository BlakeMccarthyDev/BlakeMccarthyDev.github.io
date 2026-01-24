import NavBar from "../../src/components/NavBar"
import '../App.css'
import Gallery from "../components/GalleryFeed"

export default function Home() {
    return(
        <>
            <NavBar />
            <div className="content">
                <h1>Hello There.</h1>
                <h2>I'm Blake, a developer from the UK.</h2>
                <h3>Look on the right to see some works I have made, or use the navbar buttons above. </h3>
            </div>
            <Gallery />
        </>
    )
}