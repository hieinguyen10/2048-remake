import React from "react"
import BoardView from "./components/BoardView"
import "./main.css"
import "./styles.css"
import backgroundVideo from "./assets/img/background-app.mp4"

const App = () => {
    return (
        <div className="App">
            <video autoPlay muted loop className="backgroundVideo">
                <source src={backgroundVideo} type="video/mp4"></source>
            </video>
            <h1 className="header">2048</h1>
            <BoardView />
        </div>
    )
}

export default App
