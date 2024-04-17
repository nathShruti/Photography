import About from "./About"
import Contact from "./Contact"
import Gallery from "./Gallery"
import Home from "./Home"
import Work from "./Work"

export default function homePage() {
    return (
        <div>
            <Home />
            <About />
            <Work />
            <Gallery />
            <Contact />
        </div>
    )
}