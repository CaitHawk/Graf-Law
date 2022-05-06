import React from 'react';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeRouter from './routes/homeRouter';
import AboutRouter from './routes/aboutRouter';
import ServicesRouter from './routes/servicesRouter';
import ContactRouter from './routes/contactRouter';
import ServicesHomeRouter from './routes/servicesHomeRouter';
import BankruptcyRouter from './routes/servicesRoutes/bankruptcyRouter';
import CustodyRouter from './routes/servicesRoutes/custodyRouter';
import DivorceRouter from './routes/servicesRoutes/divorceRouter';
import MediationRouter from './routes/servicesRoutes/mediationRouter';
import TrafficIncidentsRouter from './routes/servicesRoutes/trafficIncidentsRouter';
import WillsAndTrustsRouter from './routes/servicesRoutes/willsAndTrustsRouter';


function Router () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<HomeRouter />} />
                    <Route path="about" element={<AboutRouter />} />
                    <Route path="services" element={<ServicesRouter />}>
                        <Route index element={<ServicesHomeRouter />} />
                        <Route path="bankruptcy" element={<BankruptcyRouter />} />
                        <Route path="mediation" element={<MediationRouter />} />
                        <Route path="divorce" element={<DivorceRouter />} />
                        <Route path="custody" element={<CustodyRouter />} />
                        <Route path="willsandtrusts" element={<WillsAndTrustsRouter />} />
                        <Route path="trafficincidents" element={<TrafficIncidentsRouter />} />
                    </Route>
                    <Route path="contact" element={<ContactRouter />} />
                    <Route
                        path="*"
                        element={
                            <main>
                                <h1>path catching here: (error)</h1>
                            </main>
                        } />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
