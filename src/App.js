import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

import './scss/app.scss';

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/react-pizza/" element={<Home />} />
            <Route path="/react-pizza/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
