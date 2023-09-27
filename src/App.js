
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import RenderPage from "./pages/RenderPage";
import './styles/common.css';

function App() {
  return (
    <div className='game-container'>
      <Provider store={store}>
        <RenderPage />
      </Provider>
    </div>

  );
}

export default App;

