import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeRouter from './routes/homeRouter';
import AboutRouter from './routes/aboutRouter';
import ServicesRouter from './routes/Services';
import ContactRouter from './routes/contactRouter';
import LocationRouter from './routes/locationRouter';
import BankruptcyRouter from './routes/bankruptcyRouter';
import MediationRouter from './routes/mediationRouter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={ <HomeRouter />} />
        <Route path='/about' element={ <AboutRouter /> } />
        <Route path='/services' element={ <ServicesRouter /> }>
          <Route index element={
            <main>
              <h1>Select a service</h1>
            </main>
          } />
          <Route path="/bankruptcy" element={ <BankruptcyRouter /> } />
          <Route path="/mediation" element={ <MediationRouter /> } />
        </Route>
        <Route path='/location' element={ <LocationRouter />} />
        <Route path='/contact' element={ <ContactRouter />} />
        <Route path="*" element={
          <main>
            <h1>Path catching here</h1>
          </main>
        } />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
