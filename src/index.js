import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// ### DATA ###
// {
//   Trail: "Grouse Grind",
//   date: "2018-07-14",
//   heatwave: true,
//   rain: false
// }