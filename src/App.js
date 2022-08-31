import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

function App() {
  const [search, setsearch] = useState('');
  const [result, setresult] = useState([]);
  const changePhoto = () => {
    console.log('asd');
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=XGVsIA6LUsoZGoG32ZUkEmSTAzI0L6a3vIRLLXBDNh8`
      )
      .then((response) => {
        setresult(response.data.results);
      });
  };

  return (
    <div className="App">
      <header>
        <div className="container text-center my-5">
          <div className="input-group mb-3">
            <input
              type="text"
              placeholder="Search"
              className="form-control"
              value={search}
              onChange={(e) => {
                setsearch(e.target.value);
              }}
            />
            <div className="input-group-prepend">
              <button
                type="submit"
                className="btn btn-primary"
                id="basic-addon1"
                onClick={changePhoto}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className='container'>
        <div className='row text-center text-lg-start'>
          {result.map((value)=>{
            return (<div className='col-lg-3 col-md-4 h-100'>
              <img className='img-fluid img-thumbnil' src={value.urls.small} alt=''/>
            </div>)
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
