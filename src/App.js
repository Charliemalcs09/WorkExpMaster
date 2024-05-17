import logo from './logo.svg';
import './App.css';
import DataTableList from './DataTableList.js'
import DataTableIndividual from './DataTableIndividual.js';
import DataTableGallery from './DataTableGallery.js';
import { useEffect, useState } from 'react';
import React from 'react';


function App() {

  const [view, setView] = useState('List')
  const [sort, setSort] = useState('name')
  const [direction, setDirection] = useState(true)
  const handleChange = (event) => {
    let selected = event.target.value
    setView(selected)
    console.log(view)
  }


  const viewChange = (event) => {
    let selected = event.target.value
    setSort(selected)
    console.log(view)
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1><img src={logo} className="App-logo" alt="logo" />Junior</h1>
        <div className="tool-bar">
          <select name="bob" id="bob" className="menu-bar" onChange={handleChange}>
            <option value="Individual">Individual</option>
            <option value="List" selected>List</option>
            <option value="Gallery">Gallery</option>
          </select>
          <button onClick={() => setDirection(!direction)}>{direction ? "ASC" : "DSC"}</button>
          <select name="bob2" id="bob2" className="menu-bar" onChange={viewChange}>
            <option value="name" selected>Name</option>
            <option value="department">Category</option>
            <option value="price">Price</option>
          </select>
        </div>
        {view == "Individual" ? (<DataTableIndividual sort={sort} direction={direction} />) : ('')}
        {view == "List" ? (<DataTableList sort={sort} direction={direction} />) : ('')}
        {view == "Gallery" ? (<DataTableGallery sort={sort} direction={direction} />) : ('')}
      </header>
    </div>
  );
}

export default App;
