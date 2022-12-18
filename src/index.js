import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AdhesionBanner from "./components/AdhesionBanner/AdhesionBanner";
import CardList from './components/CardList/CardList';
import Footer from "./components/Footer/Footer";
import IconsContener from "./components/IconsContener/IconsContener";
import MainCard from "./components/MainCard/MainCard";
import Movie from "./components/Movie/Movie";
import NavBar from "./components/NavBar/NavBar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <AdhesionBanner></AdhesionBanner>
        <Card></Card>
        <Footer></Footer>
        <IconsContener></IconsContener>
        <MainCard></MainCard>
        <Movie></Movie>
        <NavBar></NavBar>
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
