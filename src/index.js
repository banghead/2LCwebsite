import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./views/Home/Home";
import Actualities from "./views/Actualities/Actualities";
import CulturalActions from "./views/CulturalActions/CulturalActions";
import SocialActions from "./views/SocialActions/SocialActions";
import WhoWeAre from "./views/WhoWeAre/WhoWeAre";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className={"bg-primary"}>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="accueil" element={<Home/>}/>
                <Route path="actualite" element={<Actualities/>}/>
                <Route path="action-culturelle" element={<CulturalActions/>}/>
                <Route path="action-sociales" element={<SocialActions/>}/>
                <Route path="qui-sommes-nous" element={<WhoWeAre/>}/>
                {/*<Route path='dofus/:id' element={<PageDetail/>}/>*/}
                <Route path="*" element={<p> ERREUR 404 </p>}/> {/*futur 404*/}
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
