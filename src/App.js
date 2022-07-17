import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import React, { useState, useEffect } from "react";

import Navbar from "./components/navbar/navbar"
import Search from "./components/search/search";
import Filters from "./components/filters/filters";
import Cards from "./components/cards/cards";
import Pagination from "./components/pagination/pagination";

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Episode from "./pages/episode";
import Location from "./pages/location";

function App(){
  return (
    <Router> 
    <div className="App background-img">
    <Navbar/>
    </div>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Episode" element={<Episode/>} />
      <Route path="/Location" element={<Location/>} />
    </Routes>
    </Router>
  )
}

const Home = ()=> {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App  background-img">
    <Search setPageNumber={setPageNumber} setSearch={setSearch} />
    <div className="container">
      <div className="row">
        <Filters setStatus={setStatus} setSpecies={setSpecies} setGender={setGender} setPageNumber={setPageNumber} />
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards results={results} />
          </div>
        </div>
      </div>
    </div>
    <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
};

export default App;
