import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.component';

ReactDOM.render(<App />, document.getElementById('app'));

// if (module.hot) {
//   module.hot.accept('./print.js', function () {
//     console.log('Accepting the updated printMe module!');
//     printMe();
//   })
// }
