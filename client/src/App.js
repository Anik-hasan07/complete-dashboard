import './App.css';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { themeSettings } from "theme";
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from 'scenes/dashboard';
import Layout from 'scenes/layout';
import Products from 'scenes/products';
import Customers from 'scenes/customers';
import Transactions from 'scenes/transactions';

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transactions />} />
              {/* <Route path="/geography" element={<Geography />} /> */}
              {/* <Route path="/overview" element={<Overview />} /> */}
              {/* <Route path="/daily" element={<Daily />} /> */}
              {/* <Route path="/monthly" element={<Monthly />} /> */}
              {/* <Route path="/breakdown" element={<Breakdown />} /> */}
              {/* <Route path="/admin" element={<Admin />} /> */}
              {/* <Route path="/performance" element={<Performance />} /> */}
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
