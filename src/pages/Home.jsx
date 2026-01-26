import NavBar from "../../src/components/NavBar"
import '../App.css'
import Gallery from "../components/GalleryFeed"

export default function Home() {
    return (
        <>
            <NavBar />
            <div className="home content">
                <h1>Hello There.</h1>
                <h2>I'm Blake, a developer from the UK.</h2>
                <h3>Look on the right to scroll through some works I have made, or use the navbar buttons above. </h3>
                <br />
                <div className="gitwidgets">
                    <img src="https://github-readme-stats.vercel.app/api/top-langs?username=BlakeMcCarthyDev&show_icons=true&locale=en&layout=compact&theme=merko&hide_border=true" alt="ovi" />
                    <img src="https://github-contributions-api.deno.dev/blakemccarthydev.svg" className="graph" />
                </div>
            </div>  
            <Gallery />
        </>
    )
}