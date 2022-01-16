import React from 'react';
import './Loder.css';
import loader from '../images/loader.gif';

const Loader = () => {
  return (
    <>
      <div id="spinner-back" className="show"></div>
      <div id="spinner-front" className="show">
        <img src={loader} />
      </div>
    </>
  );
}

export default Loader;