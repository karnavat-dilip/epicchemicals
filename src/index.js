import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GridLoader from 'react-spinners/GridLoader'
import reportWebVitals from './reportWebVitals';
const App =React.lazy(()=> import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.Suspense fallback={<GridLoader style={{position:'absolute',top:'50%',left:'50%'}} color="#263078" />}>
      <App />
    </React.Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
