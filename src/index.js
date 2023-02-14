import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Actualities from "./views/Actualities/Actualities";
import Workshop from "./views/Workshop/Workshop";
import SocialActions from "./views/SocialActions/SocialActions";
import WhoWeAre from "./views/WhoWeAre/WhoWeAre";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className={"bg-primary flex flex-col"}>
        <BrowserRouter>
            <NavBar />
            <div className='grow'>
                <Routes>
                    <Route path="/2LCwebsite" element={<Home />} />
                    <Route path="2LCwebsite/accueil" element={<Home />} />
                    <Route path="2LCwebsite/actualite" element={<Actualities />} />
                    <Route path="2LCwebsite/atelier" element={<Workshop />} />
                    {/*<Route path='2LCwebsite/actualite/:id' element={<PageDetail/>}/>*/}
                    <Route path="2LCwebsite/action-sociales" element={<SocialActions />} />
                    <Route path="2LCwebsite/qui-sommes-nous" element={<WhoWeAre />} />
                    <Route path="*" element={<p> ERREUR 404 </p>} /> {/*futur 404*/}
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
