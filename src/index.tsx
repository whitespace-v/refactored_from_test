import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { setupStore } from './redux/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

const store = setupStore()

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
reportWebVitals();

