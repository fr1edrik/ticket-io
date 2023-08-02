import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PATH } from './utils/constants/path';

const theme = createTheme({
  typography: {
    fontFamily: 'Vazirmatn',
    fontSize: 18,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="flex">
          <img src="https://cdn.ticket.io/companies/DMnDlIN6/img/holder-1080.jpg?1617caea"></img>
          <BrowserRouter>
            <Routes>
              <Route path="*" element={<Home />} />
              <Route path={PATH.HOME} element={<Home />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
