// change require to es6 import style
import $ from 'jquery';
import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';

function p(x) {
  const num = (new Date().getTime()) - x;
  $('#main').html(`Youve been on this page for ${num / 1000} seconds.`);
}

const starttime = new Date().getTime();
setInterval(() => { p(starttime); }, 1000);


const App = () => <div className="test">All the REACT are belong to us!</div>;

ReactDOM.render(<App />, document.getElementById('main'));
