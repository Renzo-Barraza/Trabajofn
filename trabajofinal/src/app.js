import "./app.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Navbar from "./assets/Components/Navegación/Navbar"
import Home from "./assets/Components/Pages/Home"
import Descuentos from "./assets/Components/Pages/Descuentos"




function app() {




    return(
        <div className="App">
            <Router>
                <Navbar/>
            </Router>



        </div>
    );

}



export default app;