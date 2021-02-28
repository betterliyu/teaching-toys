import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './stores/index';
import App from './components/App';

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <App />
      </AppContainer>
    </Provider>,
    document.getElementById('app')
  );
};
render();
if (module.hot) {
  module.hot.accept('./components/App', () => {
    // eslint-disable-next-line no-console
    console.log('Accepting the updated printMe module!');
    render();
  });
}
