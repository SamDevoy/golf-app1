import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "../components/nav/navbar";
import Home from "../components/home/home";

function Main(){
    return(
        <div>
            <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/Golf" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Main;