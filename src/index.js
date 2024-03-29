import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./views/Home/Home";
import Actualities from "./views/Actualities/Actualities";
import Workshop from "./views/Workshop/Workshop";
import SocialActions from "./views/SocialActions/SocialActions";
import WhoWeAre from "./views/WhoWeAre/WhoWeAre";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className={"bg-primary flex flex-col"}>
        <BrowserRouter>
            <NavBar/>
            <div className='grow'>
                <Routes>
                    <Route path="" element={<Home/>}/>
                    <Route path="accueil" element={<Home/>}/>
                    <Route path="actualite" element={<Actualities/>}/>
                    <Route path="atelier" element={<Workshop/>}/>
                    {/*<Route path='actualite/:id' element={<PageDetail/>}/>*/}
                    <Route path="action-sociales" element={<SocialActions/>}/>
                    <Route path="qui-sommes-nous" element={<WhoWeAre/>}/>
                    <Route path="*" element={<p> ERREUR 404 </p>}/> {/*futur 404*/}
                </Routes>
            </div>
            <Footer/>
        </BrowserRouter>
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
