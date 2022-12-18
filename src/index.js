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
import imageTest from "./images/photo-test.jpg";

const root = ReactDOM.createRoot(document.getElementById('root'));
const cardList = [
    { image: imageTest, date: Date.now(), title: "Title1", details: "Details", onClick: () => console.log("coucou1") },
    { image: imageTest, date: Date.now(), title: "Title2", details: "Details", onClick: () => console.log("coucou2") },
    { image: imageTest, date: Date.now(), title: "Title3", details: "Details", onClick: () => console.log("coucou3") },
    { image: imageTest, date: Date.now(), title: "Title4", details: "Details", onClick: () => console.log("coucou4") },
    { image: imageTest, date: Date.now(), title: "Title5", details: "Details", onClick: () => console.log("coucou5") },
    { image: imageTest, date: Date.now(), title: "Title6", details: "Details", onClick: () => console.log("coucou6") }
];

root.render(
    <div>
        <AdhesionBanner></AdhesionBanner>
        <CardList cardList={cardList} />
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
