import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import PageA from './pages/pageA';
import PageB from './pages/pageB';
import './App.css';

function App() {
  return (
    <>
      {/* <StoreProvider store={store}> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="PageA" element={<PageA />} />
            <Route path="PageB" element={<PageA />} />

          </Route>
        </Routes>
      </BrowserRouter>
      {/* </StoreProvider> */}
    </>
  );
}

export default App;
