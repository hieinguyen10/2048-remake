import React from "react"
import BoardView from "./components/BoardView"
import "./main.css"
import "./styles.css"
import backgroundVideo from "./assets/img/background-app.mp4"
import { Footer } from "./components/Footer"

const App = () => {
    return (
        <div className="App">
            <video autoPlay muted loop className="backgroundVideo">
                <source src={backgroundVideo} type="video/mp4"></source>
            </video>
            <div className="jumping-header">
                <span>2</span><span>0</span><span>4</span><span>8</span>
            </div>
            <BoardView />
            <Footer/>
        </div>
    )
}

export default App
